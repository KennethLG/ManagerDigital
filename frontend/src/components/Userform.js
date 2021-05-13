import { Button, Card, CardContent, Paper, TextField, Typography } from "@material-ui/core"
import { useEffect, useState } from "react";
import { useStyles } from "../hooks";

import axios from "axios";
import { config } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { createUser, editUser, editUserAction } from "../actions";

export const Userform = () => {

  const [user, setUser] = useState({
    username: "",
    ic: "",
    phone: "",
    adress: "",
    editId: ""
  });

  const userEdit = useSelector((state) => state.userEdit);

  const classes = useStyles();

  const dispatch = useDispatch();

  const updateUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const sendForm = async (e) => {

    e.preventDefault();

    if (!user.username || !user.ic || !user.phone || !user.adress) {
      alert("Please complete all the form");
      return;
    }

    if (user.editId !== "") {
      const response = await axios.post(`${config.host}/editUser/${user.editId}`, {
        username: user.username,
        ic: user.ic,
        phone: user.phone,
        adress: user.adress
      });
      console.log(response);
    } else {
      const response = await axios.post(`${config.host}/createUser`, {
        username: user.username,
        ic: user.ic,
        phone: user.phone,
        adress: user.adress
      });
      console.log(response);
    }
    setUser({
      username: "",
      ic: "",
      phone: "",
      adress: "",
      editId: ""
    });
    editUserAction(undefined);
  }

  useEffect(() => {
    if (userEdit && user.editId === "") {
      setUser({
        username: userEdit.username,
        ic: userEdit.ic,
        phone: userEdit.phone,
        adress: userEdit.adress,
        editId: userEdit._id
      });
    }
  }, [userEdit]);

  return(
    <Card className={classes.form}>
      <CardContent>
        <form noValidate autoComplete="off">

          <Typography component={Paper} className={classes.title} color="primary" noWrap>
            Employee
          </Typography>

          <TextField name="username" fullWidth id="standard-basic" label="Name" value={user.username} onChange={(e) => updateUser(e)}/>
          <TextField name="ic" fullWidth id="standard-basic" label="Identification card" value={user.ic} onChange={(e) => updateUser(e)} />
          <TextField name="phone" fullWidth id="standard-basic" label="Phone" value={user.phone} onChange={(e) => updateUser(e)} />
          <TextField name="adress" fullWidth id="standard-basic" label="Adress" value={user.adress} onChange={(e) => updateUser(e)} />

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={(e) => sendForm(e)}
          >
            Send
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}