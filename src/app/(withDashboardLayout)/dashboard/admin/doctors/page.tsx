"use client";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import DoctorModal from "./components/DoctorModal";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";
import {
  useDeleteDoctorMutation,
  useGetAllDoctorsQuery,
} from "@/redux/api/doctorApi";
import { toast } from "sonner";
import EditIcon from "@mui/icons-material/Edit";
import Edit from "@mui/icons-material/Edit";
import Link from "next/link";

const AdminDoctor = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>();
 
  query["searchTerm"] = searchTerm;

  const { data, isLoading } = useGetAllDoctorsQuery({ ...query });
  const [deleteDoctor] = useDeleteDoctorMutation();
  const doctors = data?.doctors;
  const meta = data?.meta;

  const handleClickOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };
  const handleDelete = async (id: string) => {
    try {
      const res = await deleteDoctor(id).unwrap();
      if (res.id) {
        toast.success("Specialty delete successfully !");
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contactNumber", headerName: "Contact Number", flex: 1 },
    { field: "gender", headerName: "Gender ", flex: 1 },
    { field: "apointmentFee", headerName: "Appointment Fee ", flex: 1 },
    {
      field: "action",
      headerName: "Action" ,
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              onClick={() => handleDelete(row.id)}
              aria-label="delete"
            >
              <GridDeleteIcon />
            </IconButton>
            <Link href={`/dashboard/admin/doctors/edit/${row.id}`}>
              <IconButton>
                <Edit />
              </IconButton>
            </Link>
          </Box>
        );
      },
    },
  ];

  return (
    <div>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={handleClickOpen}>Create Specialty</Button>
        <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Specialty "
        />
      </Stack>
      {!isLoading ? (
        <Box sx={{ margin: "5px" }}>
          <DataGrid rows={doctors} columns={columns} />
        </Box>
      ) : (
        <h2>Loading....</h2>
      )}
    </div>
  );
};

export default AdminDoctor;
