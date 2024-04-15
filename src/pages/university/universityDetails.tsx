import { Box, Button, Typography } from "@mui/material";
import Images from "../../assets";
import { UniversityListObj } from "../../types/types";

const UniversityDetails : React.FC<{ singleUniversityData: UniversityListObj }> = ({ singleUniversityData })  => {
  return (
    <div>
      <Box
        sx={{
          background: "#fff",
          borderRadius: "10px",
          boxShadow: 1,
          p: 3,
          m: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 10,
        }}
      >
        <img src={singleUniversityData?.logoSrc} alt="logo" />
        <Typography sx={{fontSize:"20px",fontWeight:600}}>{singleUniversityData?.name} </Typography>
        <Typography color="#848586" fontSize="14px">
          {singleUniversityData?.location?.city} |{" "}
              {singleUniversityData?.location?.state} |{" "}
              {singleUniversityData?.location?.country}
        </Typography>
        <Button
          sx={{ color: "#fff", background: "#FEB853", textTransform: "none",my:2 }}
        >
          Join community
        </Button>
        <Button
          sx={{
            color: "#000",
            border: "1px solid #14C6A4",
            textTransform: "none",
          }}
        >
          Wirite a review
        </Button>
      </Box>
    </div>
  );
};

export default UniversityDetails;
