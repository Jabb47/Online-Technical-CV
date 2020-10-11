import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: 'darkgoldenrod',
  },
}))(LinearProgress);
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Skill(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h1>{props.name}</h1>
      <BorderLinearProgress variant="determinate" value={props.percentage} />
    </div>
  );
}
