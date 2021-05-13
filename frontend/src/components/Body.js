import { 
  Container, 
  Grid, 
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useStyles } from "../hooks";
import { Userform } from "./Userform";
import { UsersTable } from "./UsersTable";

export const Body = () => {
  const classes = useStyles();

  return(
    <Container className={classes.body}>
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <Userform />
      </Grid>

      <Grid item xs={7}>
        <UsersTable />
      </Grid>
    </Grid>
    </Container>
  )
}