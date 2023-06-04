import { requestNewToken } from "@helpers/keycloak.helper";
import NextAuth, { NextAuthOptions } from "next-auth";
import KeycloackProvider from "next-auth/providers/keycloak";
import { MyToken } from "../../../helpers/keycloak.helper";

export const authOptions: NextAuthOptions = {
	secret: String(process.env.NEXTAUTH_SECRET),
	providers: [
		KeycloackProvider({
			clientId: String(process.env.KEYCLOAK_ID),
			clientSecret: String(process.env.KEYCLOAK_SECRET),
			issuer: String(process.env.KEYCLOAK_ISSUER),
		}),
	],
	session: {
		strategy: "jwt",
	},
	jwt: {},
	callbacks: {
		async jwt({ token, account, profile }) {
			if (profile && account) {
				return {
					...token,
					account: account,
					profile: profile,
					error: false,
				};
			}
			const myToken = token as MyToken;
			if (Date.now() < Number(myToken.account.expires_at)) return token;
			return await requestNewToken(token);
			// return token;
		},
		async session({ session, token }) {
			if (token) {
				return { ...session, token: token };
			}
			return session;
		},
	},
	// debug: true,
};

export default NextAuth(authOptions);
