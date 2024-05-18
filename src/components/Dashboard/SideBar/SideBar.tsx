import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, List, Stack } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import SideBarItems from "./SideBarItems";
import { getUserInfo } from "@/services/actions/auth.services";
const SideBar = () => {
  const [userRole, setUserRole] = useState('')
  useEffect(()=>{
    const {role} = getUserInfo() as any
    setUserRole(role)
  },[])
  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Image src={assets.svgs.logo} width={40} height={40} alt="logo" />
        <Typography
          variant="h6"
          component="h1"
          sx={{
            cursor: "pointer",
          }}
        >
          PH Health Care
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as UserRole).map((item, index) => (
          <SideBarItems index={index} key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
