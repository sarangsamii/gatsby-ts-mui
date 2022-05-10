import React from "react";
import { Typography ,Box} from "@mui/material";

import errorBg from "images/404.jpg";

const ErrorPage:React.FC = () => {
  return (
    <section>
      <main>
        <Box
          sx={{
            background: `url(${errorBg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize:"cover",
            height: "90vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column"

          }}
        >
          <Typography variant="h1" sx={{fontWeight:"bold"}}>404</Typography>
          <Typography sx={{fontSize:"2rem"}}>Sorry that page never returned from a trip to the Atacama desert!</Typography>
        </Box>
      </main>
    </section>
  );
};

export default ErrorPage;
