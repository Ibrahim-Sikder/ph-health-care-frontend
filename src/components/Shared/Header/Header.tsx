'use client'

import AuthButton from "@/components/ui/HomePage/AuthButton/AuthButton";
import {
} from "@/services/actions/auth.services";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Header = () => {
 
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography component={Link} href="/" variant="h4" fontWeight={600}>
          P
          <Box component="span" color="primary.main">
            H
          </Box>{" "}
          Health Care
        </Typography>

        <Stack direction="row" gap={4} justifyContent="space-between">
          <Typography component={Link} href="/login">
            Consultation
          </Typography>
          <Typography component={Link} href="/login">
            {" "}
            Health Care
          </Typography>
          <Typography component={Link} href="/login">
            Diagnostics
          </Typography>
          <Typography component={Link} href="/login">
            Doctors
          </Typography>
          <Typography component={Link} href="/login">
            Consultation
          </Typography>
        </Stack>
          <AuthButton/>
      </Stack>
    </Container>
  );
};

export default Header;
