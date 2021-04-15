import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  addToDoButton: {
    top: 110,
    left: 10,
    marginRight: 20,
    backgroundColor: "rgb(0, 247, 255)",
  },
  TodoListBlock: {
    marginTop: "110px",
    marginLeft: "20%",
  },
}));

export default useStyles;