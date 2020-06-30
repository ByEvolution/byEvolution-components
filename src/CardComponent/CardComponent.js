import React, {useState} from "react";
import cx from "clsx";
import NoSsr from "@material-ui/core/NoSsr";
import GoogleFontLoader from "react-google-font-loader";
import { makeStyles } from "@material-ui/core/styles";
import { Card,Grid, Divider } from "@material-ui/core";
import { Column, Item } from "@mui-treasury/components/flex";
import { Info, InfoTitle, InfoSubtitle } from "@mui-treasury/components/info";
import { useSoftRiseShadowStyles } from "@mui-treasury/styles/shadow/softRise";
import SelectTextField from '../SelectTextField';
import useStyles from "./CardComponentStyles";
import PropTypes from "prop-types";

const family = "Solomon";

const useOfferInfoStyles = makeStyles((theme) => {
  return {
    title: {
      color: "#e94e19",
      fontFamily: family,
      fontSize: "2.125rem",
      fontWeight: 700,
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.only("xs")]: {
        fontSize: "1.125rem",
      },
    },
  };
});

export const CardComponent = React.memo(function OfferCard(props) {

  const { items, label, value, title, showPermissions, backgroundColor,onSelected,id,
    selectable, startSelected, backgroundImage } = props;
  
  const [selected, setSelected] = useState({});
  const classes = useStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  if (selected === undefined || selected === null) {
    setSelected(startSelected);
  }
  const selectRender = () => {
    if (items === undefined || items === null || items.length === 0) return;
    else return <SelectTextField items={items} label={label} value={value} />;
  }

  const onSelect = () => {
    if (!selectable) return;
    if (!selected && (onSelected !== null || onSelected !== undefined)) onSelected(id);
    setSelected(!selected);
  }
    
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: family, weights: [500, 700] }]} />
      </NoSsr>
      <Card
        className={cx(classes.card, shadowStyles.root)}
        style={{ backgroundColor: backgroundColor,backgroundImage:backgroundImage }}
        onClick={onSelect}
        selectable={selectable}
        selected={selected}
        >
        <Column gap={2} mr={2}>
          <Info position={"middle"} useStyles={useOfferInfoStyles}>
            <InfoTitle>{title}</InfoTitle>
          </Info>
          <Divider className={classes.divider}/>
          <Item mt={2}>{showPermissions ? selectRender : <Grid></Grid>}</Item>
        </Column>
        <div className={classes.shell} />
      </Card>
    </>
  );
});

CardComponent.defaultProps = {
  backgroundColor: null,
  items:[],
  label:'',
  value:'',
  title:'',
  showPermissions:false,
  backgroundImage:null,
  selectable:false,
  startSelected: false,
  onSelected:null
};

CardComponent.propTypes = {
  backgroundColor: PropTypes.any,
  items: PropTypes.any,
  label: PropTypes.any,
  value: PropTypes.any,
  title: PropTypes.any.isRequired,
  showPermissions: PropTypes.bool,
  backgroundImage: PropTypes.any,
  selectable: PropTypes.bool,
  startSelected: PropTypes.bool,
  onSelected: PropTypes.func,
};

export default CardComponent;
