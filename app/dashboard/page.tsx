"use client";
import { signIn, useSession } from "next-auth/react";

const Dashboard = () => {
	const { data, status } = useSession();

	if (status === "loading") return "Harap Tunggu";

	if (status === "unauthenticated") signIn();

	return <div>Welcome to the jungle</div>;
};

export default Dashboard;
