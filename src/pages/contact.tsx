import React from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { FormikProps, useFormik } from "formik";
import * as yup from "yup";

import PageContainer from "components/PageContainer";
import { ContactForm } from "types";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

const Contact: React.FC = () => {
  const formik: FormikProps<ContactForm> = useFormik<ContactForm>({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <PageContainer>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <Typography variant="h4" sx={{ fontWeight: "bold",mb:4 }}>
            Want To Get In Touch?
          </Typography>
          <Typography gutterBottom sx={{mb:3}}>
            Four dollar toast biodiesel plaid salvia actually pickled banjo
            bespoke mlkshk intelligentsia edison bulb synth.
          </Typography>
          <Typography gutterBottom sx={{mb:3}}>
            Cardigan prism bicycle rights put a bird on it deep v.
          </Typography>
          <Typography>
            Hashtag swag health goth air plant, raclette listicle fingerstache
            cold-pressed fanny pack bicycle rights cardigan poke.
          </Typography>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <Paper sx={{ padding: 4, mt: 2 }} elevation={4}>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                id="name"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                fullWidth
                id="email"
                margin="normal"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                fullWidth
                id="message"
                name="message"
                label="Message"
                margin="normal"
                multiline
                rows={3}
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
              <Button
                sx={{ mt: 3 }}
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Contact;
