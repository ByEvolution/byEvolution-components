import React from 'react';
import { Grid, Typography, Checkbox, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { green, red } from '@material-ui/core/colors';
import useStyles from './ContractTextComponentStyles';
import SendIcon from '@material-ui/icons/Send';
import { useMediaQuery,useTheme } from '@material-ui/core';

import renderHTML from 'react-render-html';

const ContractTextComponent = (props) => {

  const { user, text, isSigned, signatureMS } = props;

  const classes = useStyles();

  const { t } = useTranslation("ns", { useSuspense: false });
  const signatureDate = new Date(signatureMS * 1000).toLocaleString();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));

  function canShowPrivateItems(signatureMS) {
    if (user === undefined || user === null || user.ID === -1) return 'none';
    else return 'flex';
  }
  function getCheckboxColor(isSigned) {
    if (!isSigned) return red[500];
    else return green[600];
  }

  function getAcceptanceText(isSigned, signatureMS) {
    if (!isSigned) return t('contract:unsigned_text');
    else return t('contract:signed_text');
  }

  function getVariant(isTitle){
    if(isMobile) return isTitle ? 'body1' : 'body2';
    else return isTitle ? 'h5' : 'body2';
  }

  return (
    <Grid container item xs={12}>
      <Grid container item xs={12} style={{ display: "flex", alignItems: "center" }}>
        <Grid item style={{
          paddingLeft: 20,
          display: canShowPrivateItems(signatureMS),
          alignContent: 'center'
        }}>
          <Checkbox style={{ color: getCheckboxColor(isSigned) }} checked={isSigned} />
          <Typography variant={getVariant(false)} style={{ color: getCheckboxColor(isSigned),display:'flex',alignItems:'center',paddingRight:10 }} >
            {`${getAcceptanceText(isSigned, signatureMS)} ${signatureDate}`}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{paddingLeft:30, paddingRight:20}}>
        <Typography constiant="subtitle2" className={classes.typography}>
          {renderHTML(text)}
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ display: canShowPrivateItems(isSigned), justifyContent: 'flex-end' }}>
        <Button disabled={isSigned} variant="contained" color="primary">
          <SendIcon style={{ paddingRight: 10 }} />
          {t('contract:accept')}
        </Button>
      </Grid>
   </Grid>
  );
};

export default ContractTextComponent;
