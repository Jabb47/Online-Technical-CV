import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: 'black',
    color: 'white',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

}));

export default function ProjectCard(props) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardHeader
      title={props.name}
      />
      <CardMedia
        className={classes.media}
        image={props.img}
        title={props.name}
      />
      <CardContent>
        <Typography variant="body2" color="white" component="p">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
