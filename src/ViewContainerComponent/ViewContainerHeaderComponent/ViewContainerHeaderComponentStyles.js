import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius:'3px 3px 0 0'
  },
  headerTitle: {
    padding: 5,
    paddingLeft: 20,
  },
  headerButtons: {
    padding: 5,
    display:'flex'
  }
}));
