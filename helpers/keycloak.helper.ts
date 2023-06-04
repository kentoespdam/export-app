import { Account } from "next-auth";
import { JWT } from "next-auth/jwt";

export async function requestToken(username: string, password: string) {
	const url = String(process.env.KEYCLOAK_TOKEN);
	const details = {
		client_id: String(process.env.KEYCLOAK_ID),
		client_secret: String(process.env.KEYCLOAK_SECRET),
		grant_type: "password",
		username: username,
		password: password,
	};
	const formBody: string[] = [];
	Object.entries(details).forEach(([key, value]: [string, unknown]) => {
		const encodedKey = encodeURIComponent(key);
		const encodedValue = encodeURIComponent(String(value));
		formBody.push(encodedKey + "=" + encodedValue);
	});
	const formData = formBody.join("&");
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
		},
		body: formData,
	});
	const token = await response.json();
	return token;
}

export const requestUserInfo = async (token: string) => {
	const req = await fetch(String(process.env.KEYCLOAK_USERINFO), {
		headers: {
			Authorization: `bearer ${token}`,
		},
	});

	const json = await req.json();
	return json;
};

export const requestIntrospect = async (accessToken: string) => {
	const url = String(process.env.KEYCLOAK_INTROSPECT);
	const details = {
		client_id: String(process.env.KEYCLOAK_ID),
		client_secret: String(process.env.KEYCLOAK_SECRET),
		token: accessToken,
	};
	const formBody: string[] = [];
	Object.entries(details).forEach(([key, value]: [string, unknown]) => {
		const encodedKey = encodeURIComponent(key);
		const encodedValue = encodeURIComponent(String(value));
		formBody.push(encodedKey + "=" + encodedValue);
	});
	const formData = formBody.join("&");
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
		},
		body: formData,
	});
	const result = await response.json();
	return result;
};

export interface MyToken extends JWT {
	account: Account;
}
export const requestNewToken = async (payload: JWT) => {
	const p = payload as MyToken;

	if (Date.now() < Number(p.account.expires_at))
		return { ...payload, error: false };

	const url = String(process.env.KEYCLOAK_TOKEN);
	const details = {
		client_id: String(process.env.KEYCLOAK_ID),
		client_secret: String(process.env.KEYCLOAK_SECRET),
		grant_type: "refresh_token",
		refresh_token: p.account.refresh_token,
	};
	const formBody: string[] = [];
	Object.entries(details).forEach(([key, value]: [string, unknown]) => {
		const encodedKey = encodeURIComponent(key);
		const encodedValue = encodeURIComponent(String(value));
		formBody.push(encodedKey + "=" + encodedValue);
	});
	const formData = formBody.join("&");
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
		},
		body: formData,
		next: { revalidate: 30 },
	});
	const refreshToken = await response.json();

	if (!response.ok) {
		console.log("error bro!!!");
		return {};
	}

	return {
		...payload,
		error: false,
		accessToken: refreshToken.access_token,
		refreshToken: refreshToken.refresh_token,
		accessTokenExpired: Date.now() + refreshToken.expires_in * 1000,
		refreshTokenExpired:
			Date.now() + refreshToken.refresh_expires_in * 1000,
	};
};

export const logout = async (payload: JWT) => {
	const url = String(process.env.KEYCLOAK_LOGOUT);
	const details = {
		client_id: String(process.env.KEYCLOAK_ID),
		client_secret: String(process.env.KEYCLOAK_SECRET),
		refresh_token: payload.refreshToken,
	};
	const formBody: string[] = [];
	Object.entries(details).forEach(([key, value]: [string, unknown]) => {
		const encodedKey = encodeURIComponent(key);
		const encodedValue = encodeURIComponent(String(value));
		formBody.push(encodedKey + "=" + encodedValue);
	});
	const formData = formBody.join("&");
	await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
		},
		body: formData,
		next: { revalidate: 30 },
	});
};
