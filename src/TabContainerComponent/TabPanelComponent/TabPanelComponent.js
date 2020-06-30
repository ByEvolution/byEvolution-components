import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";

export const TabPanelComponent = (props) => {
  const { children, value, index, padding, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{ padding: padding }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanelComponent.defaultProps = {
  padding: 24,
};

TabPanelComponent.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default TabPanelComponent;
