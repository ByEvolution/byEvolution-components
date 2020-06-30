import React, {useState} from "react";
import clsx from "clsx";
import Checkbox from "@material-ui/core/Checkbox";
import useStyles from "./CustomCheckboxStyles";

function StyledCheckbox(props) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const disableOnClick = () => {
    setChecked(!checked);
  };

  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ "aria-label": "decorative checkbox" }}
      checked={checked}
      onChange={disableOnClick}
      {...props}
    />
  );
}

export default function CustomCheckbox() {
  return (
    <div>
      <StyledCheckbox />
    </div>
  );
}
