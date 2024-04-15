import { Grid, List, ListItem, Rating, Stack} from "@mui/material";
import Images from "../../assets";
import React, { useState } from 'react';
import { Box,Typography } from '@mui/material';
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const About = ({data}:any) => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <Typography
        fontWeight="700"
        fontSize="20px"
        className="underlined"
        gutterBottom
        width="60px"
      >
        About
      </Typography>
      <Typography fontSize="15px" sx={{ mt: 2 }}>
       {data}
      </Typography>
    </div>
  );
};
const OverviewDetails = ({ singleUniversityData }: any) => {
  return (
    <div style={{ marginBottom: "1rem"}}>
      <Typography
        fontWeight="700"
        fontSize="20px"
        className="underlined"
        gutterBottom
        width="80px"
      >
        Overview
      </Typography>
      <Grid container spacing={3} sx={{ marginTop: "-12px", mb: 2,boxShadow:"2",width:"90%" ,m:4,borderRadius:"10px",p:2 }}>
        {singleUniversityData?.cost?.[0] ? (
          <Grid item xs={12} sm={5} sx={{pt:"10px !important"}}>
            <Box
              sx={{
                border: "1px solid #BBBCBD",
                borderRadius: "8px",
                padding: "6px",
              }}
            >
              <Stack direction="row" spacing={3}>
                <img src={Images.HomeRent} alt="capital" style={{width:"50px",height:"50px"}}/>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    Living cost
                  </Typography>
                  <p
                    className="card"
                    style={{ fontSize: "14px", fontWeight: "500", margin: 0,marginTop:"5px" }}
                  >
                    {singleUniversityData?.currency?.symbol}&nbsp;{" "}
                    {singleUniversityData?.cost?.[0]?.lowerLimit} -{" "}
                    {singleUniversityData?.cost?.[0]?.upperLimit}
                    <span style={{ fontSize: "12px"}}>
                      {" "}
                      &nbsp; /month
                    </span>
                    {/* <p className="hover-text" style={{ marginTop: "12px" }}>
                      Currency : {singleUniversityData?.currency?.code}
                    </p> */}
                  </p>
                </Box>
              </Stack>
            </Box>
          </Grid>
        ) : (
          ""
        )}

        <Grid item xs={12} sm={10} sx={{py:"10px !important"}}>
          <Box
            sx={{
              border: "1px solid #BBBCBD",
              borderRadius: "8px",
              display: "flex",
            }}
          >
            <img
              src={Images.Climate}
              alt="capital"
              style={{ padding: "10px" }}
            />
            <Box sx={{ my: 1 }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Climate
              </Typography>
              <Typography style={{ fontSize: "15px", fontWeight: "500" }}>
                Summer :{" "}
                {singleUniversityData?.average_temperatures?.summer?.min} to{" "}
                {singleUniversityData?.average_temperatures?.summer?.max} c |
                Winter :{" "}
                {singleUniversityData?.average_temperatures?.winter?.min} to{" "}
                {singleUniversityData?.average_temperatures?.winter?.max} c |
                Spring :{" "}
                {singleUniversityData?.average_temperatures?.spring?.min} to{" "}
                {singleUniversityData?.average_temperatures?.spring?.max} c |
                Autumn :{" "}
                {singleUniversityData?.average_temperatures?.autumn?.min} to{" "}
                {singleUniversityData?.average_temperatures?.autumn?.max} c{" "}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

const RatingComp = ({ value }:any) => {
  return (
    <div style={{ display: "flex", marginLeft: "13px", alignItems: "center" }}>
      <Rating
        name="read-only"
        value={value}
        precision={0.5}
        readOnly
        emptyIcon={<StarOutlineIcon sx={{ color: "gray" }} />}
      />
    </div>
  );
};

interface ReviewDataProps {
  image: string[];
  testimonial: string[];
  name: string[];
  rating: string[];
}

const ReviewData: React.FC<ReviewDataProps> = ({
  image,
  testimonial,
  name,
  rating,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index === selectedImageIndex ? -1 : index);
  };

  return (
    <Box>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {image.map((img, index) => (
          <Stack
            key={img}
            direction="column"
            spacing={2}
            alignItems="center"
            onClick={() => handleImageClick(index)}
            sx={{ cursor: 'pointer', borderRadius:"50%" }}
          >
            <img
              src={Images.HomeRent}
              alt={`Testimonial ${index + 1}`}
              style={{
                width: index === selectedImageIndex ? '100px' : '70px',
                height: 'auto',
              }}
            />
          </Stack>
        ))}
      </Stack>
      {selectedImageIndex !== -1 && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 4,
          }}
        >
            <p>{name[selectedImageIndex]}</p>
          
          <Typography  align="center" color="textPrimary" gutterBottom >
            {testimonial[selectedImageIndex]}
          </Typography>
          <Typography  align="right" color="textPrimary" fontWeight="500">
             {rating[selectedImageIndex]}
          </Typography>
          <RatingComp value={rating[selectedImageIndex]}/>
        </Box>
      )}
    </Box>
  );
};


const Reviews: React.FC<any> = ({data}) => {
  const testimonials = [
    {
      image: ['testimonial1.jpg', 'testimonial2.jpg', 'testimonial3.jpg','testimonial1.jpg', 'testimonial2.jpg', 'testimonial3.jpg'],
      testimonial: [
        '“The academic program at University of Southern California are truly exceptional. The university offers a wide range of majors and minors, allowing students to explore their interests and tailor their education to their career goals.”',
        'Testimonial 2 content...',
        'Testimonial 3 content...',
      ],
      name: ['Testimonial 1 name', 'Testimonial 2 name', 'Testimonial 3 name'],
      rating: ['4.9', '4.8', '4.7'],
    },
  ];

  return (
    <Box>
     <Typography
        fontWeight="700"
        fontSize="20px"
        className="underlined"
        gutterBottom
        width="60px"
      >
        Reviews
      </Typography>
      <ReviewData {...testimonials[0]} />
    </Box>
  );
};


const FAQs = () => {
  const faqs = [
    {
      title: "How much does it cost to study in US?",
    },
    {
      title: "Which are the best courses to study in US?",
    },
    {
      title: "Is it possible to study in US without IELTS?",
    },
    {
      title: "What exams are required to study in US?",
    },
  ];
  const answers = [
    {
      title: "How much does it cost to study in US?",
      description:
        "The fees for courses vary across different universities in the US. The average cost of UG courses in US range from £9,000- 30,000 (INR 9,00,000- 30,00,000). The fees for PG courses is around £15,000-35,000 INR 15,00,000 -35,00,000). MBA courses in US cost around £12,000- 80,000 (INR 12,00,000- 80,00,000)",
    },
    {
      title: "Which are the best courses to study in US?",
      description:
        "Yes, it is possible for you to study in US without IELTS! The alternatives to IELTS might include online interviews held by the university or a major in English, and high school certification. These might not be applicable for all universities but certain universities do offer this provision. Some of the universities that provide this route include the University of East Anglia, University of Bristol, London Southbank University, Brunel University among others.",
    },
    {
      title: "Is it possible to study in US without IELTS?",
      description:
        "Yes, it is possible for you to study in US without IELTS! The alternatives to IELTS might include online interviews held by the university or a major in English, and high school certification. These might not be applicable for all universities but certain universities do offer this provision. Some of the universities that provide this route include the University of East Anglia, University of Bristol, London Southbank University, Brunel University among others.",
    },
    {
      title: "What exams are required to study in US?",
      description:
        "Qualifying entrance level exams are necessary when it comes to fulfilling your dream of studying abroad. For those who are willing to study in the USA, it will be mandatory for you to qualify for IELTS, TOEFL along with subject/ program related exams like SAT/ACT or GMAT/GRE.",
    },
  ];

  return (
    <div>
      <div style={{ paddingBottom: "28px" }}>
        <Typography
          fontWeight="700"
          fontSize="20px"
          className="underlined"
          gutterBottom
          width="50px"
        >
          FAQs
        </Typography>
        <List sx={{ listStyleType: "none" }}>
          {faqs.map((item, i) => (
            <ListItem
              key={i}
              sx={{ padding: "3px 0", display: "flex", color: "#2B91A7" }}
            >
              <Typography sx={{ marginRight: "8px" }}>{i + 1}.</Typography>
              <Typography>{item.title}</Typography>
            </ListItem>
          ))}
        </List>
        <List sx={{ listStyleType: "none" }}>
          {answers.map((item, i) => (
            <ListItem
              key={i}
              sx={{
                padding: "3px 0",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Typography sx={{ marginRight: "8px", fontWeight: "bold" }}>
                {item.title}.
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                {item.description}
              </Typography>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

const Overview : React.FC<{ singleUniversityData: any }> = ({ singleUniversityData })  => {
  console.log(singleUniversityData)

  return (
    <Box
      sx={{
        background: "#fff",
        borderRadius: "10px",
        boxShadow: 1,
        height: "72vh",
        overflowY: "scroll",
        p: 2,
      }}
    >
      <About data={singleUniversityData?.about}/>
      <OverviewDetails singleUniversityData={singleUniversityData}/>
      <Reviews data={singleUniversityData?.userReviews}/>
      <FAQs />
    </Box>
  );
};

export default Overview;
