export const globalButton = {
  backgroundColor: "#3B3F76",
  color: "#fff",
  fontWeight: "500",
  fontSize: "16px",
  textTransform: "none",
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: "#3B3F76",
    color: "#fff",
  },
};
export const labelStyle = {
  fontWeight: 600,
  color: "#000",
  mb: 0.5,
};
export const activeTab = {
  textTransform: "capitalize",
  ".MuiTab-root.Mui-selected": {
    color: "#000",
    fontWeight: 600,
    fontSize: { sm: "1rem", xs: "14px" },
    textTransform: "none",
    borderBottom: "1px solid #000",
  },
  "& .MuiTabs-indicator": {
    background: "none",
  },
};
export const deleteIcon = {
  "&:hover": {
    filter:
      "brightness(0) saturate(100%) invert(40%) sepia(100%) saturate(384%) hue-rotate(320deg) brightness(100%) contrast(96%)",
  },
};

export const expandCardStyles = {
  cardCollapse: {
    mb: 2,
    cursor: "pointer",
    boxShadow: 2,
    borderRadius: "10px",
    "&.MuiPaper-elevation1": {
      color: "#000",
      borderRadius: "0.625rem",
      overflow: "hidden",
      minWidth: "18.75rem",
    },
  },
  cardImg:{
    width: "40px", 
    height: "40px", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%", 

  },
  cardTitle: {
    "&.MuiCardHeader-root": {
      p: 1.5,
    },
    ".MuiTypography-root": {
      fontSize: "1rem",
      fontWeight: 500,
    },
  },
  cardContent: {
    "&.MuiCollapse-root": {
      backgroundColor: "#fff",
    },
  },
};
