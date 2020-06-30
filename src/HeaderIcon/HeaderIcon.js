import React from 'react';
import Fab from '@material-ui/core/Fab';
import useStyles from "./HeaderIConStyles";
import Tooltip from '@material-ui/core/Tooltip';


export default function HeaderIcon(props) {
  const {width, height, backgroundColor,title,children} = props;

  const classes = useStyles();

  return (
    <div>
      <Tooltip title={title} aria-label="add">
        <Fab style={{width:width, height:height, backgroundColor: backgroundColor}} className={classes.fab}>
          {children}
        </Fab>
      </Tooltip>

    </div>
  );
}