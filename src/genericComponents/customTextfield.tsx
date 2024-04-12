import React from "react";
import { TextField } from "@mui/material";
import { Field } from "formik";

interface FieldProps {
  id: string;
  name: string;
  placeholder?: string;
  value: any;
  fullWidth: boolean;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomField: React.FC<FieldProps> = ({
  id,
  name,
  type ,
  placeholder,
  value,
  onChange,
  // fullWidth,
  ...rest
}) => {
  return (
    <Field
      id={id}
      name={name}
      size="small"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      // fullWidth={fullWidth}
      as={TextField}
      // sx={{width:"90%"}}
      {...rest}
    />
  );
};

export default CustomField;
