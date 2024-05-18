import PHFileUploader from "@/components/Form/PHFileUploader";
import PHForm from "@/components/Form/PHForm";
import PHInput from "@/components/Form/PHInput";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { Button, Grid, TextField } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpecialistModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = (values: FieldValues) => {};
  return (
    <PHModal open={open} setOpen={setOpen} title="Create A New Specialist ">
      <PHForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <PHFileUploader />
          </Grid>
          <Grid item md={6}>
            <PHInput name="Title" label="Title" />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ mt: 1 }}>
          Create
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default SpecialistModal;
