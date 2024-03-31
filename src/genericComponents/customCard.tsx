import { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Container,
  IconButton,
  Collapse,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { expandCardProps } from "../types/types";

export default function CustomCard ({ title, children }: expandCardProps) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Card >
        <CardHeader
          title={title}
          action={
            <IconButton
              onClick={() => setOpen(!open)}
              aria-label="expand"
              size="small"
            >
              {open ? <Remove /> : <Add />}
            </IconButton>
          }
        ></CardHeader> 
        <div>
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
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
