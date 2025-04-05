import Link from 'next/link';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import HiveIcon from '@mui/icons-material/Hive';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const menuItems = [
  {
    title: 'MENU',
    items: [
      { label: 'Home', href: '/', icon: <HomeFilledIcon /> },
      { label: 'Hives', href: '/hives', icon: <HiveIcon /> },
      { label: 'Tasks', href: '/tasks', icon: <AssignmentIcon /> },
    ],
  },
  {
    title: 'OTHERS',
    items: [
      { label: 'Profile', href: '/profile', icon: <PersonIcon /> },
      { label: 'Settings', href: '/settings', icon: <SettingsIcon /> },
      { label: 'Logout', href: '/logout', icon: <LogoutIcon /> },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((section) => (
        <div className="flex flex-col gap-2" key={section.title}>
          <span className="hidden lg:block text-gray-400 front-light my-4">
            {section.title}
          </span>
          <div className="flex flex-col gap-2">
            {section.items.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
