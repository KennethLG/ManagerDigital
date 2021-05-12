import { Button, Card, CardContent, TextField } from "@material-ui/core"
import { useState } from "react";
import { useStyles } from "../hooks";

import * as axios from "axios";

export const Userform = () => {

  const [user, setUser] = useState({
    username: "",
    ic: "",
    phone: "",
    adress: ""
  });

  const classes = useStyles();

  const updateUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const sendForm = async () => {
    
  }

  return(
    <Card className={classes.form}>
      <CardContent>
        <form noValidate autoComplete="off">
          <TextField name="username" fullWidth id="standard-basic" label="Username" value={user.username} onChange={(e) => updateUser(e)}/>
          <TextField name="ic" fullWidth id="standard-basic" label="Identification card" value={user.ic} onChange={(e) => updateUser(e)} />
          <TextField name="phone" fullWidth id="standard-basic" label="Phone" value={user.phone} onChange={(e) => updateUser(e)} />
          <TextField name="adress" fullWidth id="standard-basic" label="Adress" value={user.adress} onChange={(e) => updateUser(e)} />

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={sendForm}
          >
            Send
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}