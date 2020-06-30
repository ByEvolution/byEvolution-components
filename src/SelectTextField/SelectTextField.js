import React from 'react';
import { MenuItem,TextField } from '@material-ui/core';

const SelectTextField = (props) => {
  const { label,items,id } = props;
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

   const itemsRender = items.map((item, index) => {
     return (
       <MenuItem key={item.value} value={item.value}>
         {item.label}
       </MenuItem>
     );
   });

  return (
    <form noValidate autoComplete="off">
      <TextField
        id={id}
        select
        fullWidth
        label={label}
        value={value}
        style={{ zIndex: 100 }}
        onChange={handleChange}
        variant="outlined"
      >
        {itemsRender}
      </TextField>
    </form>
  );
}
export default SelectTextField;