import React from "react";
import { Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

const Images: React.FC = () => {
  return (
    <Box sx={{ width: 200 }}>
      <StaticImage src="../../images/big.jpg" alt="image" />
    </Box>
  );
};

export default Images;
