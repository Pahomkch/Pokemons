import React from "react";
import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";
import { TLoadingPropsType } from "../Types/Loading";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Loading = (props: TLoadingPropsType & { children: React.ReactNode }) => {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open>
      <CircularProgress color="inherit" />
      <h4>{props.children}</h4>
    </Backdrop>
  );
};

export default Loading;
