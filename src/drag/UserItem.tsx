import { Card, CardContent, Typography } from '@mui/material';

type UserProps = {
  name: string;
  email: string;
};

const UserItem = ({ name, email }: UserProps) => {
    return (
      <Card style={{ marginBottom: '8px' }}>
        <CardContent>
          <Typography variant="h6" component="h2">
            Name: {name}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Email: {email}
          </Typography>
        </CardContent>
      </Card>
    );
  };
export default UserItem;
