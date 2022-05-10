import React from "react";
import { Link } from "gatsby";
import { Button } from "@mui/material";

import PageContainer from "components/PageContainer";

export default function Points () {
  return (
    <PageContainer>
      <Link to="/nested/contact">Contact</Link>
      <br />
      <a href="https://www.gatsbyjs.com/">Global Non Gatsby Link</a>
      <Button>Hiiii</Button>
    </PageContainer>
  );
}
