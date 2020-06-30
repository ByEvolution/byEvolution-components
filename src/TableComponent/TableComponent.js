import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import useStyles from "./TableComponentStyles";
import PropTypes from "prop-types";

const TableComponent = (props) => {
  const classes = useStyles();
  let { showHeader, headers, rows, renderColumnData, align,alignHeader, tableClass, headerClass, bodyClass } = props;

  if (tableClass === null || tableClass === undefined) tableClass = classes.table;
  if (headerClass === null || headerClass === undefined) headerClass = classes.head;
  if (bodyClass === null || bodyClass === undefined) bodyClass = classes.tbody;
  
  const headerRender = headers.map((header, index) => {
    return (
      <Th align={alignHeader} key={index} component="th" scope="row">
        {header}
      </Th>
    );
  });

  const columnRender = (row) => {
    let columns = [];
    for (const headerID in headers) {
      const renderData = (renderColumnData === null || renderColumnData === undefined) ? row[headerID] : renderColumnData(headerID, row[headerID]);
      
      const renderColumn = (
        <Td align={align} component="th" scope="row">
          {renderData}
        </Td>
      );
      columns = [...columns, renderColumn];
    }
    return columns;
  }

  const rowsRender = () => {
    let renderRows = [];
    for (const rowID in rows){
      const renderRow = (
        <Tr key={rows[rowID].id} className={bodyClass}>
          {columnRender(rows[rowID])}
        </Tr>
      );
      renderRows = [...renderRows, renderRow];
    }
    return renderRows;
  }

  return (
    <Grid container item xs={12}>
      <Grid container item xs={12} className={classes.paddingTableContainer}>
        <TableContainer component={Paper} className={classes.overflowXTable}>
          <Table className={tableClass} aria-label="customized table">
            <Thead style={{display:showHeader}}>
              <Tr className={headerClass}>{headerRender}</Tr>
            </Thead>
            <Tbody>{rowsRender()}</Tbody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

TableComponent.defaultProps = {
  tableClass: null,
  headerClass: null,
  bodyClass: null,
  rows:[],
  renderColumnData: null,
  showHeader:'contents'
};

TableComponent.propTypes = {
  headers: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  renderColumnData: PropTypes.func,
  tableClass: PropTypes.any,
  headerClass: PropTypes.any,
  bodyClass: PropTypes.any,
  showHeader:PropTypes.any
};

export default TableComponent;
