import React from "react";
import { Box, Container } from "@mui/material";

const PageContainer :React.FC= ({ children }) => {
  return (
    <Container>
      <Box my={2}>{children}</Box>
    </Container>
  );
};

export default PageContainer;
