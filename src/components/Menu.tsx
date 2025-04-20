import Link from "next/link";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import HiveIcon from "@mui/icons-material/Hive";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LogoutIcon from "@mui/icons-material/Logout";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        label: "Home",
        href: "/",
        icon: <HomeFilledIcon />,
        visible: ["admin", "operator", "viewer"],
      },
      // {
      //   label: 'Productivity',
      //   href: '/',
      //   icon: <TrendingUpIcon />,
      //   visible: ['admin'],
      // },
      // {
      //   label: 'Fincance',
      //   href: '/',
      //   icon: <AttachMoneyIcon />,
      //   visible: ['admin'],
      // },
      {
        label: "Hives",
        href: "/hives",
        icon: <HiveIcon />,
        visible: ["admin", "operator", "viewer"],
      },
      // {
      //   label: 'Tasks',
      //   href: '/tasks',
      //   icon: <AssignmentIcon />,
      //   visible: ['admin', 'operator'],
      // },
    ],
  },
  {
    title: "OTHERS",
    items: [
      // {
      //   label: 'Profile',
      //   href: '/profile',
      //   icon: <PersonIcon />,
      //   visible: ['admin', 'operator'],
      // },
      // {
      //   label: 'Settings',
      //   href: '/settings',
      //   icon: <SettingsIcon />,
      //   visible: ['admin', 'operator'],
      // },
      {
        label: "Logout",
        href: "/logout",
        icon: <LogoutIcon />,
        visible: ["admin", "operator", "viewer"],
      },
    ],
  },
];

type MenuProps = {
  role: string;
};

const Menu = ({ role }: MenuProps) => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((section) => (
        <div className="flex flex-col gap-2" key={section.title}>
          <span className="hidden lg:block text-primary-300 font-light my-4">
            {section.title}
          </span>
          {section.items.map((item) =>
            item.visible.includes(role) ? (
              <Link
                href={item.href}
                key={item.href}
                className="flex items-center justify-center lg:justify-start gap-4 p-2 text-primary-100 rounded-md hover:bg-primary-400 transition"
              >
                {item.icon}
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            ) : null
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;
