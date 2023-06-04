"use client";
import { billingTabHandler, useBillingTabStore } from "@storage/billing.store";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import BillingFilterComponent from "./billing.filter.component";

const BillingComponent = () => {
	const { tabIndex, setTabIndex } = useBillingTabStore((state) => ({
		tabIndex: state.tabIndex,
		setTabIndex: state.setTabIndex,
	}));

	return (
		<Box sx={{ minHeight: "100vh" }}>
			<BillingFilterComponent />

			<Paper
				elevation={2}
				sx={{ minHeight: 400, width: "100%", p: 1, mb: 1 }}
			>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs
						aria-label="After Posting"
						onChange={(e, v) => setTabIndex(v)}
						value={tabIndex}
					>
						<Tab label="Ikhtisar Rekening" />
						<Tab label="Laporan Lainnya" />
					</Tabs>
				</Box>

				<Box sx={{ mt: 1, minHeight: "100%" }}>
					{billingTabHandler(tabIndex)}
				</Box>
			</Paper>
		</Box>
	);
};

export default BillingComponent;
