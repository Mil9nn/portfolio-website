/* eslint-disable react/prop-types */
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

function ImgMediaCard (props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={props.alt}
        height="140"
        image={props.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          href={props.gitRepoLink} // Link to GitHub repo
          target="_blank" // Open in new tab
        >
          Git Repo
        </Button>
        <Button size="small" href={props.liveDemoLink} target="_blank">
          Live Demo
        </Button>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;
