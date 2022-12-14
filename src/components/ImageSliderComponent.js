import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundColor: "black"

};


const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,

  };

  return (
    <Box
      sx={{
        position: "relative",
        height: '400px',
        width: '400px',
        pt: 10,
        pb: 10,
      }}
    >
      <Box>
        <Box
          onClick={goToPrevious}
          sx={{
            position: "absolute",
          
            top: "50%",
            transform: "translate(0, -50%)",
            left: "32px",
            fontSize: "45px",
            color: "gray",
            zIndex: 1,
            cursor: "pointer",
          }}
        >
          ❰
        </Box>
        <Box
          onClick={goToNext}
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translate(0, -50%)",
            right: "32px",
            fontSize: "45px",
            color: "gray",
            zIndex: 1,
            cursor: "pointer",
          }}
        >
          ❱
        </Box>
      </Box>
      <Box style={slideStylesWidthBackground}></Box>
      <Typography sx={{fontSize: '30px' , color: 'white' , textAlign:'center',mt:2}}>This is my  slider  Project</Typography>
      <Typography sx={{fontSize: '30px' , color: 'white' , textAlign:'center',mt:2}}>Dvin Ohanians</Typography>

    </Box>
  );
};

export default ImageSlider;
