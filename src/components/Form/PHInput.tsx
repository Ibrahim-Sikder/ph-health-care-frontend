import { SxProps, TextField } from "@mui/material";
import React from "react";
import { useForm, Controller, useFormContext } from "react-hook-form";


type  TInputProps = {
    name:string,
    label?:string,
    variant?:string,
    size?:'small' | 'medium',
    fullWidth?: boolean,
    type?:string,
    sx?:SxProps,
    placeholder?:string,
    required: boolean,
}

const PHInput = ({ name, label , type ='text', variant, size='small', fullWidth, placeholder, required, sx }:TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
      <TextField
      {...field}
      label={label}
      sx={{...sx}}
      placeholder={label}
      required={required}
      type={type}
      variant='outlined'
      size={size}
      fullWidth={fullWidth}
      />
    )}
    />
  );
};

export default PHInput;
