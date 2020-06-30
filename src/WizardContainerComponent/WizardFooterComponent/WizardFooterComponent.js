import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './WizardFooterComponentStyles';
import { useTranslation } from "react-i18next";

const WizardFooterComponent = (props) => {
  const { currentStep, totalSteps, onPrev, onNext} = props;
  const classes = useStyles();
  const { t } = useTranslation("", { useSuspense: false });

  return (
    <Grid container item xs={12} style={{display:'flex',justifyContent:'space-around'}}>
      <Grid item >
        <Button variant="contained" color="primary" disabled={currentStep === 0}
          onClick={onPrev}>
          {t('common:back')}
        </Button>
      </Grid>
      <Grid item>
        <Typography variant="body2" className={classes.stepIndicator}>
          {`${currentStep + 1} / ${totalSteps}`}
        </Typography>
      </Grid>
      <Grid item  >
        <Button variant="contained" color="primary" onClick={onNext}>
          { (currentStep === totalSteps -1) ? t('common:finish') : t('common:next') }
        </Button>
      </Grid>
    </Grid>
  );
};

WizardFooterComponent.propTypes = {
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.number.isRequired,
};

export default WizardFooterComponent;
