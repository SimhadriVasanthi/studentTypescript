import { Box } from "@mui/material";
import { useAppSelector } from "../../../../assets/hooks";
import ExpandCard from "../../../../genericComponents/expandCard";
import AcademicDocs from "./academicDocs";
import PersonalDocs from "./personalDocs";

const TranscriptDocs = () => {
  const documents = useAppSelector(state=>state.documents)
console.log(documents)
  const profile = [
    {
      title: "Personal Documents",
      image: 1,
      component: <PersonalDocs data={documents?.data?.personal}/>
    },
    {
      title: "Academic Documents",
      image:  2,
      component:<AcademicDocs data={documents?.data?.academic}/> 
    }
    
  ];
  return (
    <Box
     
    >
      {profile?.map((item: any) => (
        <ExpandCard title={item.title} imageUrl={item.image} key={item}>
          {item.component}
        </ExpandCard>
      ))}
    </Box>
  );
};

export default TranscriptDocs;
