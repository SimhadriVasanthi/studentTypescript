import { Button } from "@mui/material";
import { globalButton } from "../components/styles/customStyles";
import { buttonProps } from "../types/types";

const CustomButton = ({
    children,
    handleSubmit,
    width,
  }:buttonProps) => {
    
    return (
      <div >
        <Button
          type="submit"
          onClick={() => {
            handleSubmit()}}
            sx={[globalButton,{width:width}]}
        >
          {children}
        </Button>
      </div>
    );
  };
  export { CustomButton };