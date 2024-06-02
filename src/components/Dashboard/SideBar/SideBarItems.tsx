import React from "react";
import Link from "next/link";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DrawerItem } from "@/types";
import { usePathname } from "next/navigation";

type IProps = {
  item: DrawerItem;
  index: number;
};

const SideBarItems = ({ index, item }: IProps) => {
  const pathname = usePathname();
  const linkPath = `/dashboard/${item.path}`;

  return item.children ? (
    <Accordion key={index}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
      >
        <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
        <ListItemText primary={item.title} />
      </AccordionSummary>
      <AccordionDetails>
        <List component="div" disablePadding>
          {item.children.map((subItem, subIndex) => {
            const subLinkPath = `/dashboard/${subItem.path}`;
            return (
              <Link href={subLinkPath} key={subIndex}>
                <ListItem
                  key={subIndex}
                  disablePadding
                  sx={{
                    ...(pathname === subLinkPath
                      ? {
                          borderRight: "3px solid #1586FD",
                          "& svg": {
                            color: "#1586FD",
                          },
                        }
                      : {}),
                    pl: 4,
                    mb: 1,
                  }}
                >
                  <ListItemButton>
                    <ListItemText primary={subItem.title} />
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          })}
        </List>
      </AccordionDetails>
    </Accordion>
  ) : (
    <Link href={linkPath} key={index}>
      <ListItem
        key={index}
        disablePadding
        sx={{
          ...(pathname === linkPath
            ? {
                borderRight: "3px solid #1586FD",
                "& svg": {
                  color: "#1586FD",
                },
              }
            : {}),
          mb: 1,
        }}
      >
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SideBarItems;
