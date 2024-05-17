"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import assets from "@/assets";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { userLogin } from "@/services/actions/userLogin";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/actions/auth.services";
import PHForm from "@/components/Form/PHForm";
import PHInput from "@/components/Form/PHInput";

export type FormValues = {
  email: string;
  password: string;
};
const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (values:FieldValues) => {
    try {
      const res = await userLogin(values);
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
            <Box>
              <Image src={assets.svgs.logo} alt="logo" width={50} height={50} />
            </Box>
            <Box>
              <Typography sx={{ margin: "10px 0" }} variant="h5">
                Login PH Health Care{" "}
              </Typography>
            </Box>
          </Stack>
          <PHForm onSubmit={handleLogin}>
            <Box sx={{ marginTop: "10px" }}>
              <Grid container spacing={3} my="2">
                <Grid item md={6}>
                  <PHInput
                    label="Email"
                    fullWidth={true}
                    name="email"
                    required={true}
                    
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    type="Password"
                    label="Password"
                    fullWidth={true}
                    name='password'
                    required={true}
                  />
                </Grid>
              </Grid>
              <Link href={"/forgot-password"}>
                <Typography
                  mb={1}
                  textAlign="end"
                  component="p"
                  fontWeight={300}
                  sx={{
                    textDecoration: "underline",
                  }}
                >
                  Forgot Password?
                </Typography>
              </Link>

              <Button type="submit" fullWidth={true} sx={{ margin: "10px 0" }}>
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Don&apos;t have an account?{" "}
                <Link href="/register">Create an account</Link>
              </Typography>
            </Box>
          </PHForm>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
