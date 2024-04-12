import { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Container,
  Collapse,
  Box,
  ListItemIcon,
} from "@mui/material";
import { expandCardStyles } from "../components/styles/customStyles";

interface expandCardProps {
  title: string;
  children: React.ReactNode;
  imageUrl: string;
}
export default function ExpandCard({
  title,
  children,
  imageUrl,
}: expandCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card sx={expandCardStyles.cardCollapse}>
        <CardHeader
          onClick={() => setOpen(!open)}
          sx={{
            ...expandCardStyles.cardTitle,
            color: open ? "#fff" : "inherit",
            background: open ? "rgba(114, 212, 209, 1)" : "inherit", // Change text color when opened
          }}
          title={title}
          avatar={
            <Box
              sx={{
                ...expandCardStyles.cardImg,
                backgroundColor: open ? "#3B3F76" : "rgb(138 141 188)",
              }}
            >
              <ListItemIcon sx={{display:"flex",justifyContent:"center",color:"#fff",fontWeight:500}}>{imageUrl}</ListItemIcon>
            </Box>
          }
        ></CardHeader>
        <div>
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            sx={expandCardStyles.cardContent}
          >
            <CardContent>
              <Container>{children}</Container>
            </CardContent>
          </Collapse>
        </div>
      </Card>
    </>
  );
}
