import React, { useState } from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';
import PropTypes from "prop-types";
import ViewContainerComponent from '../ViewContainerComponent';
import WizardFooterComponent from './WizardFooterComponent';
import useStyles from './WizardContainerComponentStyles';

export const WizardContainerComponent = (props) => {
  const { visible, steps, currentStep, width, height, padding, title, fontWeight, buttons, isClosable,
    onClose, onFinish } = props;

  const classes = useStyles();

  const [current, setCurrentStep] = React.useState(props.currentStep);

  if (current === undefined) setCurrentStep(currentStep);

  const handleNext = () => {
    if (current === (steps.length - 1)) onFinish();
    else if (current < steps.length) setCurrentStep(current + 1);
  };

  const handleBack = () => {
    if (current > 0) setCurrentStep(current - 1);
  };

  const stepRender = steps.map((step, index) => {
    return (
      <Grid xs={12} style={{ display: (index === current) ? 'flex' : 'none' }}>
        {step.component}
      </Grid>);
  });

  function generateTitle() {
    return `${title}: ${steps[current].title}`;
  }

  if (!visible) return;

  return (
    <Grid container item xs={12}>
      <ViewContainerComponent container item xs={12} visible={true} display={'flex'}
        width={width} height={height} padding={padding} title={generateTitle()} fontWeight={fontWeight}
        buttons={buttons} isClosable={isClosable} onClose={onClose} overflowY={'none'} >
        <Grid container item xs={12}>
          <Grid container item xs={12} style={{ display: 'flex', overflowY: 'auto'}}>
            {stepRender}
          </Grid>
          <Grid container item xs={12} style={{ display: 'flex'}}>
            <Grid item xs={12}>
              <Divider style={{width:'100%'}}/>
            </Grid>
            <Grid container item xs={12} className={classes.footerContainer}>
              <WizardFooterComponent onPrev={handleBack} onNext={handleNext}
                currentStep={current} totalSteps={steps.length} style={{ display: 'flex' }} />
            </Grid>
          </Grid>
        </Grid>
      </ViewContainerComponent>
    </Grid>
  );
};

WizardContainerComponent.defaultProps = {
  visible: true,
  height: 'inherit',
  padding: 2,
  title: '',
  buttons: null,
  isClosable: false,
  onClose: () => { },
  onFinish: () => { },
  currentStep: 0,
};

WizardContainerComponent.propTypes = {
  visible: PropTypes.bool,
  steps: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired,
  padding: PropTypes.number,
  title: PropTypes.string.isRequired,
  fontWeight: PropTypes.any,
  buttons: PropTypes.any,
  isClosable: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onFinish: PropTypes.func,
  currentStep: PropTypes.number.isRequired,
};

export default WizardContainerComponent;
