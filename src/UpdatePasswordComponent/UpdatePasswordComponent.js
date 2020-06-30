import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, TextField, Hidden } from '@material-ui/core';
import useStyles from './UpdatePasswordComponentStyles';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

export const UpdatePasswordComponent = (props) => {
  const { changePasswordLabel, newPasswordLabel, repeatPasswordLabel,confirmPasswordLabel, onSave } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function updateState() {
    if (value !== 'UPDATING') setValue('UPDATING');
    else setValue('NORMAL');
  }

  function save() {
    setValue('NORMAL');
    onSave();
  }

  return (
    <Grid container item xs={12} className={classes.changePasswordTextField}>
      <Grid item xs={12} >
        <Button fullWidth className={classes.changePasswordButton}
          variant="contained" color="primary" size="medium"
          style={{ display: (value === 'UPDATING') ? 'none' : 'flex' }} onClick={updateState}>
          <VpnKeyIcon className={classes.keyIcon} />
          {changePasswordLabel}
        </Button>
      </Grid>
      <Grid container item xs={12} style={{ display: (value !== 'UPDATING') ? 'none' : 'flex' }}>
        <Grid item sm={4} xs={12}>
          <TextField fullWidth label={newPasswordLabel} id="newPassword" name="newPassword"
            variant="outlined" size="small" margin="normal" className={classes.textFieldsPadding}
            InputProps={{ classes: { notchedOutline: classes.notchedOutline } }}/>
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextField fullWidth label={repeatPasswordLabel} id="newPassword" name="newPassword"
            variant="outlined" size="small" margin="normal" className={classes.textFieldsPadding}
            InputProps={{ classes: { notchedOutline: classes.notchedOutline } }}/>
        </Grid>
        <Grid item sm={4} xs={12} style={{display:'flex',alignItems:'center',paddingTop:5}}>
          <Button fullWidth variant="contained" color="primary" size="medium"
             onClick={save}>
            <VpnKeyIcon className={classes.keyIcon} />
            {confirmPasswordLabel}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

UpdatePasswordComponent.defaultProps = {
  changePasswordLabel:'',
  newPasswordLabel:'',
  repeatPasswordLabel:'',
  onSave: () => { }
};

UpdatePasswordComponent.propTypes = {
  changePasswordLabel:PropTypes.string.isRequired,
  newPasswordLabel:PropTypes.string.isRequired,
  repeatPasswordLabel:PropTypes.string.isRequired,
  onSave: PropTypes.func
};

export default UpdatePasswordComponent;
