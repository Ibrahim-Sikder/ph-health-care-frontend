"use client";

import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";
import SpecialTyModal from "./components/SpecialTyModal";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialistApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";

const Specialties = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { data, isLoading } = useGetAllSpecialtiesQuery({});

  const handleClickOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 200 },
    {
      field: "icon",
      headerName: "Icon",
      width: 100,
      renderCell: ({ row }) => (
        <Box>
          
        </Box>
      ),
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
        <Box sx={{ margin: '5px' }}>
          <DataGrid 
            rows={data} 
            columns={columns} 
         
          />
        </Box>
      ) : (
        <h2>Loading....</h2>
      )}
    </Box>
  );
};

export default Specialties;
