import Link from 'next/link';
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { DrawerItem } from '@/types';
import { usePathname, useRouter } from 'next/navigation';
type IProps = {
    item: DrawerItem,
    index:number
}

const SideBarItems = ({index, item}:IProps) => {
    const pathname= usePathname()
  const linkPath = `/dashboard/${item.path}`
  
    return (
        <Link href={linkPath}>
            <ListItem key={index} disablePadding
           sx={{
            ...(pathname === linkPath
               ? {
                    borderRight: '3px solid #1586FD',
                    '& svg': {
                       color: '#1586FD',
                    },
                 }
               : {}),
            mb: 1,
         }}
            >
            <ListItemButton>
              <ListItemIcon>
            {item.icon && <item.icon/>}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        </Link>
    );
};

export default SideBarItems;