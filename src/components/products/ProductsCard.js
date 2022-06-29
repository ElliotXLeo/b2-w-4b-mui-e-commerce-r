import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ProductsCard() {
  return (
    <Card sx={{ maxWidth: 256 }}>
      <CardMedia
        component="img"
        height="256"
        image="https://res.cloudinary.com/elgs/image/upload/v1655223336/pokemon-inc-mern/nyqkqzvzjlk0zgvbwi8z.png"
        alt="Mew"
      />
      <CardContent>
        <Typography variant="h5">
          Mew
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Psiquico
        </Typography>
        <Typography variant="p">
          {
            Array(5).fill().map((_, i) => (
              <span>⭐</span>
            ))
          }
        </Typography>
        <Typography variant="h5">
          S/ 100 C/U
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Antes: S/ 200 C/U
        </Typography>
      </CardContent>
      <CardActions>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        <Button variant="outlined" endIcon={<AddShoppingCartIcon />}>
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
}
