import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import PropTypes from "prop-types";
import useStyles from "./DropzoneStyles";
import { Grid, Typography } from "@material-ui/core";

const Dropzone = (props) => {
  const { placeholder, className } = props;
  const classes = useStyles();
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <Grid item className={classes.thumb} key={file.name}>
      <Grid item className={classes.thumbInner}>
        <img className={classes.img} src={file.preview} />
      </Grid>
    </Grid>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <Grid
      item
      className={classes.mainContainer}
    >
      <div className={classes.dropzoneBox} {...getRootProps()}>
        <input {...getInputProps()} />
        {thumbs != 0 ? (
          thumbs
        ) : (
          <Typography>{placeholder}</Typography>
        )}
      </div>
    </Grid>
  );
};

Dropzone.defaultProps = {
  placeholder: "Arrastre su archivo aquí, o haga click para seleccionarlo",
  className: "",
};

Dropzone.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Dropzone;
