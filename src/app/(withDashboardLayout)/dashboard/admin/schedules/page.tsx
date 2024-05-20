'use client'

import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import ScheduleModal from "./components/ScheduleModal";

const SchedulePage = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const handleClickOpen = () => {
        setIsModalOpen(true);
      };
    
      const handleClose = () => {
        setIsModalOpen(false);
      };
  return (
    <div>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={handleClickOpen}>Create Specialty</Button>
        <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
       
      </Stack>
    </div>
  );
};

export default SchedulePage;
