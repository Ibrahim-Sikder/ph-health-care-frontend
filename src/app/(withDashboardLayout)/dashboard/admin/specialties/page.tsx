"use client";

import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import React from "react";
import SpecialTyModal from "./components/SpecialTyModal";
import {
  useDeleteSpecialtyMutation,
  useGetAllSpecialtiesQuery,
} from "@/redux/api/specialistApi";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";
import Image from "next/image";
import { toast } from "sonner";

const Specialties = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { data, isLoading } = useGetAllSpecialtiesQuery({});
  const [deleteSpecialty] = useDeleteSpecialtyMutation();

  const handleClickOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };
  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSpecialty(id).unwrap();
      if (res.id) {
        toast.success("Specialty delete successfully !");
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", flex: 1 },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,
      renderCell: ({ row }) => (
        <Box>
          <Image width={40} height={40} alt="icon" src={""} />
        </Box>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
            <GridDeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={handleClickOpen}>Create Specialty</Button>
        <SpecialTyModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField placeholder="Search Specialty " />
      </Stack>
      {!isLoading ? (
        <Box sx={{ margin: "5px" }}>
          <DataGrid rows={data} columns={columns} hideFooter={true} />
        </Box>
      ) : (
        <h2>Loading....</h2>
      )}
    </Box>
  );
};

export default Specialties;
