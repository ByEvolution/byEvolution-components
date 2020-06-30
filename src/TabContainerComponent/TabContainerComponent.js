import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { AppBar, Grid, Hidden, Tabs, Tab } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import useStyles from './TabContainerComponentStyles';
import TabPanelComponent from './TabPanelComponent';

/*
  Fill with:
  const items = [
    {title:'The title', component:AComponent},
    {title:'Another title', component:AnotherComponent},
  ];
//*/

export const TabContainerComponent = (props) => {
  const { items, padding,minHeight,maxHeight,maxWidth} = props;
  const theme = useTheme();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  };

  function getTitleTab(index) {
    return {
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  }

  const MyTab = styled(Tab)({ fontSize: "0.64rem" });

  if (items === undefined || items === null || items.length === 0) return (<Grid></Grid>);

  const tabRender = items.map((item, index) => {
    return (<Tab wrapped fullWidth={true} label={item.title} {...getTitleTab(index)} />);
  });

  const myTabRender = items.map((item, index) => {
    return (<MyTab wrapped fullWidth={true} label={item.title} {...getTitleTab(index)} />);
  });

  const tabPanelRender = items.map((item, index) => {
    return (
      <TabPanelComponent value={value} index={index} dir={theme.direction} padding={padding}>
        {item.component}
      </TabPanelComponent>);
  });

  return (
    <Grid container item xs={12}>
      <Grid container item className={classes.tabsContainer}>
        <Grid item xs={12}>
          <Hidden only={["xs"]}>
            <AppBar position="static" color="default">
              <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary"
                aria-label="Full width Tabs" variant='fullWidth'>
                {tabRender}
              </Tabs>
            </AppBar>
          </Hidden>
          <Hidden smUp>
            <AppBar position="static" color="default">
              <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary"
                aria-label="Full width Tabs" variant='fullWidth'>
                {myTabRender}
              </Tabs>
            </AppBar>
          </Hidden>
          <Grid item xs={12}>
            <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value}
              onChangeIndex={handleChangeIndex} className={classes.SwipeableViews} style={{minHeight:minHeight,maxHeight:maxHeight,maxWidth:maxWidth}}>
              {tabPanelRender}
            </SwipeableViews>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

TabContainerComponent.propTypes = {
  items: PropTypes.array.isRequired
};

export default TabContainerComponent;
//*/