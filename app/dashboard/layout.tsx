"use client";
import ContentComponent from "@template/content";
import HeaderComponent from "@template/header";
import MenuDrawer from "@template/menu.drawer";
import { SessionProvider } from "next-auth/react";
import { IChildrenNode } from "../layout";

const Layout = ({ children }: IChildrenNode) => {
	return (
		<SessionProvider refetchOnWindowFocus={true}>
			<HeaderComponent />
			<MenuDrawer />
			<ContentComponent>{children}</ContentComponent>
		</SessionProvider>
	);
};

export default Layout;
