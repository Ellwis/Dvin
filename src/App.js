import { Box} from "@mui/material";
import ImageSlider from ".//components/ImageSliderComponent";
const App = () => {
  const slides = [
    {
      url: "https://media-public.canva.com/4Rbpc/MAEo704Rbpc/1/s3.jpg",
      title: "Model",
    },
    {
      url: "https://media-public.canva.com/5SZQ0/MAEoKo5SZQ0/1/s3.jpg",
      title: "Model",
    },
    {
      url: "https://media-public.canva.com/JBIAg/MAEoKvJBIAg/1/s3.jpg",
      title: "Model",
    },
    {
      url: "https://media-public.canva.com/PL9hg/MAEoKqPL9hg/1/s3.jpg",
      title: "Model",
    },
    {
      url: "https://media-public.canva.com/VUVpY/MAEo73VUVpY/1/s3.jpg",
      title: "Model",
    },
    {
      url: "https://media-public.canva.com/a6vFk/MAEo74a6vFk/1/s3.jpg",
      title: "Model",
    },
    {
      url: "https://media-public.canva.com/qBDF8/MAEo7zqBDF8/1/s3.jpg",
      title: "Model",
    },
  ];
  return (
    <Box sx={{ width: "100%", height: "500px" }}>
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
