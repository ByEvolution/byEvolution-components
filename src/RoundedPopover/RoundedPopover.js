import { Divider, Popover } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

import useStyles from './RoundedPopoverStyles';
import OptionListComponent from './OptionListComponent';
import PlaceholderComponent from './PlaceholderComponent';

function RoundedPopover({ dispatch, title, options, anchorEl,display, ...rest }) {
  const classes = useStyles();

  const { t } = useTranslation('header', { useSuspense: false });
  
  return (
    <Popover id='popover'
      {...rest}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      className={classes.popoverBox}
    >
      <div className={classes.root}>
        {options.length > 0 ? (<OptionListComponent options={options} dispatch={dispatch} />) :
          (<PlaceholderComponent />)}
        <Divider />
      </div>
    </Popover>
  );
}

RoundedPopover.defaultProps = { className: '', anchorEl: null };

RoundedPopover.propTypes = {
  anchorEl: PropTypes.any,
  className: PropTypes.string,
  options: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default RoundedPopover;
