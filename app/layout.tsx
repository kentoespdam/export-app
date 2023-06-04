import { ReactNode } from "react";
// import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export interface IChildrenNode {
	children: ReactNode;
}
export default function RootLayout({ children }: IChildrenNode) {
	return (
		<html lang="en">
			{/*
			<head /> will contain the components returned by the nearest parent
			head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
			*/}
			<head />
			<body>{children}</body>
		</html>
	);
}
