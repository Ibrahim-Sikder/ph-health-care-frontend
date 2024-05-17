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

import { FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/actions/auth.services";
import { userLogin } from "@/services/actions/userLogin";
import PHForm from "@/components/Form/PHForm";
import PHInput from "@/components/Form/PHInput";

interface IPatientData {
  name: string;
  email: string;
  address: string;
  contactNumber: string;
}

const Register = () => {
  const router = useRouter();

  const handleRegister  = async (values:FieldValues) => {
    const data = modifyPayload(values);

    try {
      const res = await registerPatient(data);
      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await userLogin({
          password: values.password,
          email: values.patient.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/");
        }
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
              <Typography>Patient Register </Typography>
            </Box>
          </Stack>
          <Box>
            <PHForm onSubmit={handleRegister}>
              <Grid container spacing={3} my="2">
                <Grid item md={12}>
                  <PHInput
                    label="Name"
                    fullWidth={true}
                    name="patient.name"
                     required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    type="email"
                    label="Email"
                    fullWidth={true}
                    name="patient.email"
                    required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    type="password"
                    label="Password"
                    fullWidth={true}
                    name="password"
                     required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    type="tel"
                    label="Contact Number"
                    fullWidth={true}
                    name="patient.contactNumber"
                     required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    label="Address"
                    fullWidth={true}
                    name="patient.address"
                     required={true}
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth={true} sx={{ margin: "10px 0" }}>
                Register
              </Button>
              <Typography>
                Do you have an account? <Link href="/login">Login</Link>{" "}
              </Typography>
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Register;
