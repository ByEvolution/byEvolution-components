
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
   display:'flex',
   justifyContent:'space-around'
  },
  root: {
    maxWidth: 500,
    flexGrow: 1,
  },
  keysContainer: {
    marginTop: 10,
  },
  formControlHidden: {
    display: 'none',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  storageHelper: {
    marginBottom: 20,
  },
  generateButton: {
    marginBottom: 20,
  },
  formControl: {
    marginBottom: 15,
  },
  middleDivider: {
    marginTop: 10,
    marginBottom: 10,
  },
  stepIndicator: {
    display:'flex',
    justifyContent:'center',
    padding: 10,
  },
  footerContainer:{
    padding:'5px 0',
    [theme.breakpoints.only("xs")]: {
      padding:'15px 0',
    },
  }
}));
