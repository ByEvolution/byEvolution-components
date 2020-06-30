import { Grid, Paper, GridList } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import useStyles from './ViewContainerComponentStyles';
import { useMediaQuery,useTheme } from '@material-ui/core';

import ViewContainerHeaderComponent from "./ViewContainerHeaderComponent";

const ViewContainerComponent = (props) => {
  let { visible, display, children, width, height,titleHeight, title, showAsTitle,headerContainer,headerTitle,
  headerButtons, fontWeight,backgroundColor,backgroundColorContent, buttons, isClosable, onClose, overflowY, contentClass } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));
  const isLaptop = useMediaQuery(theme.breakpoints.down('md'));
  const isLarge = useMediaQuery(theme.breakpoints.down('lg'));

  if (!visible) return;
  if (contentClass === null || contentClass === undefined) contentClass = classes.paperViewContainer;
  return (
    <Paper className={contentClass} style={{ height, width }}>
      <Grid container style={{ height: titleHeight }}>
        <ViewContainerHeaderComponent
          title={title}
          showAsTitle={showAsTitle}
          buttons={buttons}
          backgroundColor={backgroundColor}
          isClosable={isClosable}
          onClose={onClose}
          variant="h5"
          headerTitle={headerTitle}
          headerContainer={headerContainer}
          headerButtons={headerButtons}
          fontWeight={fontWeight}
          isMobile={isMobile}
          isTablet={isTablet}
          isLaptop={isLaptop}
          isLarge={isLarge}
        />
        <Grid
          container
          item
          xs={12}
          className={classes.viewContainerContent}
          style={{
            overflowY: overflowY,
            backgroundColor: backgroundColorContent,
          }}
        >
          <Grid
            item
            xs
            className={classes.viewContainerChildrenContent}
            style={{ display }}
          >
            {children}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

ViewContainerComponent.defaultProps = {
  visible: true,
  display: null,
  width: null,
  height: null,
  title: '',
  titleHeight:'inherit',
  buttons: null,
  backgroundColor:null,
  backgroundColorContent:null,
  isClosable: true,
  showAsTitle: true,
  overflowY:'auto',
  contentClass:null,
  onClose: () => {}
};

ViewContainerComponent.propTypes = {
  visible: PropTypes.bool,
  display: PropTypes.any,
  children: PropTypes.any,
  width: PropTypes.any,
  height: PropTypes.any,
  backgrounColor: PropTypes.any,
  backgroundColorContent:PropTypes.any,
  title: PropTypes.string.isRequired,
  titleHeight: PropTypes.any,
  variant: PropTypes.any,
  fontWeight: PropTypes.any,
  buttons: PropTypes.any,
  isClosable: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  showAsTitle: PropTypes.bool,
  overflowY:PropTypes.bool,
  contentClass:PropTypes.any
};

export default ViewContainerComponent;
