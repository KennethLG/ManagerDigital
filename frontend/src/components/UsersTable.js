import { Card, CardContent, Typography } from "@material-ui/core";

export const UsersTable = () => {
  return(
    <Card>
      <CardContent>
        <Typography component="h1" variant="h6" color="primary" noWrap>
          Users
        </Typography>
      </CardContent>
    </Card>
  );
}