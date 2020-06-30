import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const DatePicker = ({ padding, label, width }) => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("1984/05/11")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid>
        <KeyboardDatePicker
          fullWidth
          margin="dense"
          id="date-picker-dialog"
          format="dd/MM/yyyy"
          size="small"
          label={label}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          style={{ width: width, padding: padding }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
