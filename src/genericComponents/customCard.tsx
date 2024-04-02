import { Card } from "@mui/material";
import { expandCardProps } from "../types/types";

export default function CustomCard({
  children,
  handleSubmit,
}: expandCardProps) {
  return (
    <>
      <Card
        sx={{
          boxShadow: 0,
          border: "1px solid #BCB9B9",
          p: 2,
          borderRadius: "0.625rem",
          mb: 1,
          cursor: "pointer",
          position: "relative",
          "&:hover": {
            background: "#FFFAF4",
          },
        }}
        onClick={() => handleSubmit()}
      >
        <div>{children}</div>
      </Card>
    </>
  );
}
