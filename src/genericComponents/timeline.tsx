// CustomTimelineComponent.jsx
import { styled } from "@mui/system";

const CustomTimeline = styled("div")({
  position: "relative",
  padding: "20px 0",
  height:"200px",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "12px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#fff",
    borderRadius: "8px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#fff",
  },
});

const CustomTimelineItem = styled("div")({
  position: "relative",
  margin: "0 auto",
  padding: "0 20px",
  marginBottom: "10px",
  boxSizing: "content-box",
  "&:before": {
    content: '""',
    position: "absolute",
    height: "100%",
    width: "1px",
    backgroundColor: "rgb(189, 189, 189)",
  },
  "&:after": {
    content: '""',
    position: "absolute",
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: "rgb(189, 189, 189)",
    top: "0",
    transform: "translateX(-50%)",
    zIndex: 1,
  },
  "& > div": {
    position: "relative",
    padding: "10px",
    backgroundColor: "#ffffff",
    borderRadius: "4px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    marginTop: "30px",
    marginBottom: "30px",
    borderTop: "2px solid rgb(189, 189, 189)",
    borderBottom: "2px solid rgb(189, 189, 189)",
  },
});

export { CustomTimeline, CustomTimelineItem };
