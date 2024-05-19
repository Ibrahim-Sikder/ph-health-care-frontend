export const modifyPayload = (values: any) => {
  const obj = { ...values };
  const file = obj["file"];
  delete obj["file"];
  const data = JSON.stringify(obj);
  console.log(data)
  const formData = new FormData();
  console.log(formData)
  formData.append("data", data);
  console.log(formData)
  formData.append("file", file as Blob);
  console.log(formData)

  return formData;
};