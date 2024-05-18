'use client'

import { Box, Button, Stack, TextField } from '@mui/material';
import React from 'react';
import SpecialistModal from './components/SpecialistModal';

const Specialties = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleClickOpen = () => {
      setIsModalOpen(true);
    };
    const handleClose = () => {
      setIsModalOpen(false);
    };

    return (
        <Box>
           <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <Button onClick={handleClickOpen}>Create Specialty</Button>
            <SpecialistModal open={isModalOpen} setOpen={setIsModalOpen}/>
            
            <TextField placeholder='Search Specialty '/>
           </Stack>
        </Box>
    );
};

export default Specialties;