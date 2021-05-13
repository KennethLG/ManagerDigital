import { 
  Card, 
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  withStyles,
  TableCell,
  TableBody,
  IconButton
} from "@material-ui/core";

import {
  Delete,
  Edit
} from "@material-ui/icons";
import axios from "axios";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, editUser } from "../actions";
import { config } from "../config";
import { useStyles } from "../hooks";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export const UsersTable = () => {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const classes = useStyles();

  useEffect(()=> {
    dispatch(getUsers());
  }, [users]);

  const deleteUser = async (id) => {
    const response = await axios.delete(`${config.host}/deleteUser/${id}`);
    console.log(response.data);
  }

  const setUser = async (id) => {
    dispatch(editUser(id));
  }

  return(
    <Card>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell> Name </StyledTableCell>
              <StyledTableCell align="right"> Identification card </StyledTableCell>
              <StyledTableCell align="right"> Phone </StyledTableCell>
              <StyledTableCell align="right"> Adress </StyledTableCell>
              <StyledTableCell align="right"> Actions </StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {
              users.length !== 0 && users.map(user => 
                <StyledTableRow key={user._id}>
                  <StyledTableCell align="right">{user.username}</StyledTableCell>
                  <StyledTableCell align="right">{user.ic}</StyledTableCell>
                  <StyledTableCell align="right">{user.phone}</StyledTableCell>
                  <StyledTableCell align="right">{user.adress}</StyledTableCell>
                  <IconButton aria-label="delete" className={classes.margin} onClick={() => deleteUser(user._id)}>
                    <Delete fontSize="default" />
                  </IconButton>
                  <IconButton aria-label="delete" className={classes.margin} onClick={() => setUser(user._id)}>
                    <Edit fontSize="default" />
                  </IconButton>
                </StyledTableRow>
              )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}