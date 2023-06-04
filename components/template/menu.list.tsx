import Groups2Outlined from "@mui/icons-material/Groups2Outlined";
import LocalAtmRounded from "@mui/icons-material/LocalAtmRounded";
import PaidOutlined from "@mui/icons-material/PaidOutlined";
import PinchOutlined from "@mui/icons-material/PinchOutlined";
import CollectionsBookmarkOutlined from "@mui/icons-material/CollectionsBookmarkOutlined";
import Dashboard from "@mui/icons-material/Dashboard";
import InsightsOutlined from "@mui/icons-material/InsightsOutlined";
import AssessmentOutlined from "@mui/icons-material/AssessmentOutlined";
import PasswordOutlined from "@mui/icons-material/PasswordOutlined";
import DataUsage from "@mui/icons-material/DataUsage";

interface IMenu {
	path: string;
	name: string;
	icon: React.ReactElement;
}

type IMenuList = IMenu[];

export const listMenu: IMenuList = [
	{
		path: "/dashboard",
		name: "DASHBOARD",
		icon: <Dashboard />,
	},
	{
		path: "/dashboard/pendapatan",
		name: "PENDAPATAN",
		icon: <InsightsOutlined />,
	},
	{
		path: "/dashboard/billing",
		name: "BILLING",
		icon: <AssessmentOutlined />,
	},
	{
		path: "/dashboard/ikhtisartahunan",
		name: "IKHTISAR TAHUNAN",
		icon: <CollectionsBookmarkOutlined />,
	},
	{
		path: "/dashboard/angsuran",
		name: "ANGSURAN",
		icon: <PasswordOutlined />,
	},
	{
		path: "/dashboard/datapelanggan",
		name: "DATA PELANGGAN",
		icon: <Groups2Outlined />,
	},
	{
		path: "/dashboard/pemakaian",
		name: "DATA PEMAKAIAN",
		icon: <DataUsage />,
	},
	{
		path: "/dashboard/detailsaldo",
		name: "DETAIL SALDO",
		icon: <LocalAtmRounded />,
	},
	{
		path: "/dashboard/drd",
		name: "DRD",
		icon: <PinchOutlined />,
	},
	{
		path: "/dashboard/rekair",
		name: "REKAIR",
		icon: <PaidOutlined />,
	},
];
