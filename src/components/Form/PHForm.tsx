import React from "react";
import { useForm, FormProvider, useFormContext, FieldValues, SubmitHandler, FieldValue } from "react-hook-form";


type TFormConfig = {
  resolver?:any,
  defaultValues?: Record <string, any >
}
type TFormProps = {
    children: React.ReactNode,
    onSubmit:SubmitHandler<FieldValues>
} & TFormConfig

const PHForm = ({children, onSubmit, resolver,defaultValues }:TFormProps) => {
  const formConfig: TFormConfig = {}
  if(formConfig){
    formConfig["resolver"] = resolver
  }
  if(defaultValues){
    formConfig["defaultValues"] = defaultValues
  }
const methods = useForm(formConfig)
  const {handleSubmit, reset} = methods;

  const submit:SubmitHandler<FieldValues> = (data) =>{

    onSubmit(data)
    reset()
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default PHForm;
