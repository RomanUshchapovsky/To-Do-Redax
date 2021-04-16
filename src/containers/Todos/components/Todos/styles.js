import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  todoList: {
    display: "flex",
    textAlign: "center",
    height: "100%",
    width: "900px",
    paddingTop: "5px",
  },
  todosListBlock: {
    display: "flex",
    backgroundColor: "rgb(235, 248, 230)",
    borderBottom: "solid",
  },
  todosListImg: {
    height: "50px",
    maxWidth: "60px",
    overflow: "hidden",
    textAlign: "center",
  },
  img: {
    height: "50px",
    objectFit: "contain",
  },
  todosListText: {
    width: "350px",
    marginLeft: "10px",
    overflow: "hidden",
  },
  todosListDate: {
    marginLeft: "10px",
    width: "75px",
  },
  editTodo: {
    right: "5px",
    top: "10px",
    backgroundColor: "rgb(15, 121, 56)",
    color: "white",
  },
  deleteTodo: {
    top: "10px",
    backgroundColor: "rgb(241, 11, 11)",
    color: "white",
  },
}));

export default useStyles;
