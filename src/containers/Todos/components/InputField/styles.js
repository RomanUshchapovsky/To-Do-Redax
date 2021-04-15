import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formButton: {
    marginTop: 30,
    marginRight: 100,
    backgroundColor: "rgb(0, 247, 255)",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default useStyles;
