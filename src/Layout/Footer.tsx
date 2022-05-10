import * as React from "react";

import { Box, Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Copyright() {
  return (
    <Typography variant="body1" >
      {"© "}
      {new Date().getFullYear()}
      {" "}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[400]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Box display="flex" flexDirection="row" justifyContent="center">
          <Copyright />
          <Typography variant="body1" sx={{ml:1}}>
            SimplyRecipes built with{" "}
            <Link target="_blank" href="https://www.gatsbyjs.com/">Gatsby</Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
