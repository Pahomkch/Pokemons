import React from "react";
import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";
import { TLoadingPropsType } from "../Types/Loading";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Loading: React.FC<TLoadingPropsType> = (props) => {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open>
      <CircularProgress color="inherit" />
      {props.children}
    </Backdrop>
  );
};

export default Loading;
