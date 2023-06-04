"use client";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { IChildrenNode } from "@app/layout";

const ContentComponent = ({ children }: IChildrenNode) => {
	return (
		<>
			<CssBaseline />
			<Toolbar />
			<Container
				maxWidth="xl"
				style={{
					minHeight: "100vh",
					minWidth: "100vw",
					marginTop: 10,
				}}
			>
				{children}
			</Container>
		</>
	);
};

export default ContentComponent;
