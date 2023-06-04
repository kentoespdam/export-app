"use client";
import Close from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Link from "next/link";
import React from "react";
import { useMenuStore } from "../../storage/template/menu.store";
import { listMenu } from "./menu.list";

const MenuDrawer = () => {
	const { isMenuOpen, toggleMenu } = useMenuStore();

	return (
		<React.Fragment key="left">
			<Drawer anchor="left" open={isMenuOpen}>
				<Box
					sx={{ width: 250 }}
					role="presentation"
					// onClick={toggleMenu}
					onKeyDown={toggleMenu}
				>
					<List>
						<ListItem
							key="closeDrawerBt"
							secondaryAction={
								<IconButton
									edge="end"
									aria-label="close drawer"
									onClick={toggleMenu}
								>
									<Close />
								</IconButton>
							}
						>
							<ListItemText primary="Main Menu" />
						</ListItem>
						<Divider />
						{listMenu.map((item, index) => (
							<ListItem key={index} disablePadding>
								<ListItemButton
									component={Link}
									href={item.path}
									onClick={toggleMenu}
								>
									<ListItemIcon>{item.icon}</ListItemIcon>
									<ListItemText>{item.name}</ListItemText>
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
		</React.Fragment>
	);
};

export default MenuDrawer;
