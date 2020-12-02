import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import UnlockIcon from "@material-ui/icons/LockOpenOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const { control, handleSubmit } = useForm();
  const [register, setRegister] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const onSubmit = (data) => {
    axios.post("").then(() => {
      setLoggedIn(true);
      toast.success("Successfully logged in");
    });
    console.log(data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {!loggedIn ? (
          <>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Controller
                    as={
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                      />
                    }
                    name="email"
                    control={control}
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    as={
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                    }
                    name="password"
                    control={control}
                    defaultValue=""
                  />
                </Grid>
                {register && (
                  <Grid item xs={12} sm={6}>
                    <Controller
                      as={
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          name="first_name"
                          label="First name"
                          id="first_name"
                        />
                      }
                      name="first_name"
                      control={control}
                      defaultValue=""
                    />
                  </Grid>
                )}
                {register && (
                  <Grid item xs={12} sm={6}>
                    <Controller
                      as={
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          name="last_name"
                          label="Last name"
                          id="lastName"
                        />
                      }
                      name="last_Name"
                      control={control}
                      defaultValue=""
                    />
                  </Grid>
                )}
                {register && (
                  <Grid item xs={12}>
                    <Controller
                      as={
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          type="number"
                          name="age"
                          label="Age"
                          id="age"
                        />
                      }
                      name="age"
                      type="number"
                      control={control}
                      defaultValue=""
                    />
                  </Grid>
                )}
                {register && (
                  <Grid item xs={12}>
                    <Controller
                      as={
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          type="number"
                          name="pesel"
                          label="PESEL"
                          id="pesel"
                        />
                      }
                      name="pesel"
                      control={control}
                      defaultValue=""
                    />
                  </Grid>
                )}
                {register && (
                  <Grid item xs={12} sm={6}>
                    <Controller
                      as={
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          name="address"
                          label="Adress"
                          id="address"
                        />
                      }
                      name="address"
                      control={control}
                      defaultValue=""
                    />
                  </Grid>
                )}
                {register && (
                  <Grid item xs={12} sm={6}>
                    <Controller
                      as={
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          name="zip"
                          label="Zip code"
                          id="zip"
                        />
                      }
                      name="zip"
                      control={control}
                      defaultValue=""
                    />
                  </Grid>
                )}
                {register && (
                  <Grid item xs={12} sm={6}>
                    <Controller
                      as={
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          name="town"
                          label="Town"
                          id="town"
                        />
                      }
                      name="town"
                      control={control}
                      defaultValue=""
                    />
                  </Grid>
                )}
                {register && (
                  <Grid item xs={12} sm={6}>
                    <Controller
                      as={
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          name="country"
                          label="Country"
                          id="country"
                        />
                      }
                      name="country"
                      control={control}
                      defaultValue=""
                    />
                  </Grid>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  {register ? "Sign Up" : "Sign In"}
                </Button>
                <Grid item xs={12}>
                  <FormControlLabel
                    fullWidth
                    control={
                      <Checkbox
                        checked={register}
                        onChange={() => setRegister(!register)}
                        color="primary"
                      />
                    }
                    label="I want to register an account."
                  />
                </Grid>
              </Grid>
            </form>
          </>
        ) : (
          <>
            <Avatar className={classes.avatar}>
              <UnlockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Successfully logged in
            </Typography>
          </>
        )}
      </div>
    </Container>
  );
}
