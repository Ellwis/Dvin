import { Box, Typography } from "@mui/material";
import ImageSlider from ".//components/ImageSliderComponent";
const App = () => {
  const slides = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3HCJlI_HQvwiok906NGGbyLwFCKes2Dx21Q&usqp=CAU",
      title: "rain",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSetub7bpVl2C6ZTKwPRjtsiM70AROXFZmCE0HcJeR4nSZmybWOLkVVAXn_Xiba4kg-H7w&usqp=CAU",
      title: "rain",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWXuBStLYBsz-wTAUWPMdMLfLqc0v4iBboVOhkjJb4i_APb2X1nmyEvF0x3QtiWmTcaPw&usqp=CAU",
      title: "rain",
    },
  ];
  return (
    <Box sx={{ width: '100%' , height:'500px' }}>
      <Box
        sx={{
          width: "500px",
          height: "280px",
          margin: "0 auto",
        }}
      >
        <ImageSlider slides={slides} />
      </Box>
    </Box>
    
  );
};

export default App;
