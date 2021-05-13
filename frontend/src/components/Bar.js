import { AppBar, Toolbar, Typography } from "@material-ui/core"


export const Bar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography component="h1" variant="h6" color="inherit" noWrap>
          Manager Digital Employees
        </Typography>
      </Toolbar>
    </AppBar>
  );
}