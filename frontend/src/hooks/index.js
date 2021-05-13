import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  body: {
    marginTop: "128px"
  },
  form: {
    width: "90%",
    margin: "auto"
  },
  button: {
    margin: "16px 0"
  },
  margin: {
    margin: theme.spacing(1),
  },
  title: {
    margin: "8px 0",
    padding: "8px 0",
    fontSize: "24px",
    textAlign: "center"
  }
}));