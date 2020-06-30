import React from "react";
import clsx from "clsx";
import Radio from "@material-ui/core/Radio";
import useStyles from "./CustomRadioButtonStyles";

const CustomRadioButton = (props) => {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
};

export default CustomRadioButton;
