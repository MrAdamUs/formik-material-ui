import React from 'react';
import Header from './Components/Header';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import Textfield from './Components/FormsUI/Textfield';
import Select from './Components/FormsUI/Select';
import countries from './data/countries.json';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));
const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  country: '',
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email.').required('Required'),
  phone: Yup.number()
    .integer()
    .typeError('Please enter a valid phone number')
    .required('Required'),
  addressLine1: Yup.string().required('Required'),
  addressLine2: Yup.string(),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
});

const App = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth='md'>
          <div className={classes.formWrapper}></div>
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>Your details</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Textfield name='firstName' label='First Name' />
                </Grid>
                <Grid item xs={6}>
                  <Textfield name='lastName' label='Last Name' />
                </Grid>
                <Grid item xs={12}>
                  <Textfield name='email' label='Email' />
                </Grid>
                <Grid item xs={12}>
                  <Textfield name='phone' label='Phone Number' />
                </Grid>

                <Grid item xs={12}>
                  <Typography>Adress</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Textfield name='addressLine1' label='addressLine1' />
                </Grid>
                <Grid item xs={12}>
                  <Textfield name='addressLine2' label='addressLine2' />
                </Grid>
                <Grid item xs={6}>
                  <Textfield name='city' label='city' />
                </Grid>
                <Grid item xs={6}>
                  <Textfield name='state' label='state' />
                </Grid>
                <Grid item xs={12}>
                  <Select name='country' label='country' options={countries} />
                </Grid>

                <Grid item xs={12}>
                  <Typography>Booking information</Typography>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Container>
      </Grid>
    </Grid>
  );
};

export default App;
