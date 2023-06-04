import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import Alert, { AlertColor } from "@mui/material/Alert";

export interface INotif {
	open: boolean;
	message: [] | null;
	severity: AlertColor;
	setOpen: (v: boolean) => void;
}

export default function Notif(props: INotif) {
	const { open, message, severity, setOpen } = props;

	const handleClose = (
		event: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	const action = (
		<React.Fragment>
			<Button color="secondary" size="small" onClick={handleClose}>
				UNDO
			</Button>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={handleClose}
			>
				<CloseIcon fontSize="small" />
			</IconButton>
		</React.Fragment>
	);

	const vertical = "top";
	const horizontal = "right";

	return (
		<div>
			{/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
			<Snackbar
				anchorOrigin={{ vertical, horizontal }}
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				action={action}
			>
				<Alert onClose={handleClose} severity={severity}>
					{message?.map((item, index) => (
						<div key={index}>{item}</div>
					))}
				</Alert>
			</Snackbar>
		</div>
	);
}
