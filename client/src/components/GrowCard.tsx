import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface GrowCardProps {
  start_date: string;
  mushroom_type: string;
  container: string;
  substrate: string;
  inoculation_method: string;
}

const GrowCard: React.FC<GrowCardProps> = ({
  mushroom_type,
  start_date,
  container,
  substrate,
  inoculation_method,
}) => {
  return (
    <Card sx={{ width: '250px' }}>
      <CardContent>
        <Typography variant='h5' component='h2'>
          {mushroom_type}
        </Typography>
        <Typography variant='subtitle2' color='textSecondary'>
          {start_date}
        </Typography>
        <Typography variant='body1' component='p'>
          Container: {container}
        </Typography>
        <Typography variant='body1' component='p'>
          Substrate: {substrate}
        </Typography>
        <Typography variant='body1' component='p'>
          Inoculation Method: {inoculation_method}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GrowCard;
