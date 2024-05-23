import React from "react";
import { useCreateSpecialtyMutation } from "@/redux/api/specialistApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import PHFileUploader from "@/components/Form/PHFileUploader";
import PHForm from "@/components/Form/PHForm";
import PHInput from "@/components/Form/PHInput";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialTyModal = ({ open, setOpen }: TProps) => {
  const [createSpecialty] = useCreateSpecialtyMutation();

  const handleFormSubmit = async (values: FieldValues) => {
 
    const data = modifyPayload(values);
 
    try {
      const res = await createSpecialty(data).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("Specialty created successfully!");
        setOpen(false)
      }
    } catch (err) {
      console.error("Error creating specialty:", err);
      console.log(err)
    }
  };

  return (
    <PHModal open={open} setOpen={setOpen} title="Create A New Specialist">
      <PHForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <PHInput name="title" label="Title" />
          </Grid>
          <Grid item md={6}>
            <PHFileUploader name="file" label="Upload File" />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ mt: 1 }}>
          Create
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default SpecialTyModal;