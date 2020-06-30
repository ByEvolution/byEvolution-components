import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

import useStyles from './PlaceholderComponentStyles';

function PlaceholderComponent({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)} >
      <div className={classes.image} />
      <Typography variant="h4">
        No tiene notificaciones
      </Typography>
    </div>
  );
}

PlaceholderComponent.propTypes = { className: PropTypes.string };

export default PlaceholderComponent;
