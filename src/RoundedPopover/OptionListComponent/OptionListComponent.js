import { List, ListItemIcon, ListItem, ListItemText, Link } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouteLink} from 'react-router-dom';
//import { push } from 'connected-react-router';

import useStyles from './OptionListComponentStyles';

function OptionListComponent({ options, className, dispatch, ...rest }) {
  const classes = useStyles();

  return (
    <List {...rest} className={clsx(classes.root, className)} disablePadding >
      {options.map((menu, i) => (
        <ListItem
          className={classes.listItem}
          divider={i < options.length - 1}
          key={menu.id}
          to={menu.to}
          component={React.forwardRef((itemProps, ref) =>
            (<RouteLink to={menu.to} {...itemProps} ref={ref} />))}
        >
          <ListItemIcon style={{ display: (menu.icon)?'flex':'none'}} >{menu.icon}</ListItemIcon>
          <ListItemText
            primary={menu.title}
            primaryTypographyProps={{ variant: 'body2' }}
            secondary={menu.subtitle}
          />
          <ArrowForwardIcon className={classes.arrowForwardIcon} />
        </ListItem>
      ))}
    </List>
  );
}

OptionListComponent.defaultProps = { className: '' };

OptionListComponent.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default OptionListComponent;
