import { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Container,
  Collapse,
  IconButton,
} from "@mui/material";
import { expandCardStyles } from "../components/styles/customStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface expandCardProps {
  title: string;
  children: React.ReactNode;
}
export default function Accordion({ title, children }: expandCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card sx={[expandCardStyles.cardCollapse, { boxShadow: 0, p: 0 }]}>
        <CardHeader
          onClick={() => setOpen(!open)}
          sx={{
            ...expandCardStyles.cardTitle,
            "&.MuiCardHeader-root": {
              padding: "12px !important",
            },
            color: "#000",
            ".MuiTypography-root": {
              fontSize: "1rem",
              fontWeight: 500,
            },
            background: open ? "#DCF8F7" : "#F7FAFD", // Change text color when opened
          }}
          title={title}
          action={
            <IconButton
              onClick={() => setOpen(!open)}
              aria-label="expand"
              size="small"
              sx={{marginRight:"20px"}}
            >
              {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          }
        ></CardHeader>
        <div>
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            sx={{"& .MuiCardContent-root":{
              paddingTop:"16px !important",
              p:0
            }}}
          >
            <CardContent sx={{ boxShadow: 3 }}>
              {children}
            </CardContent>
          </Collapse>
        </div>
      </Card>
    </>
  );
}
