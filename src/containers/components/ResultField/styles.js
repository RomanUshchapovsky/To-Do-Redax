import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  resultBlock: {
    display: "flex",
    // justifyContent: "center",
    marginTop: "200px",
    backgroundColor: "rgb(0, 247, 255)",
    width: "600px",
    height: "40px",
  },
  allToDo: {
    width: "200px",
    backgroundColor: "yellow",
  },
  unassignedUsers: {
    width: "200px",
    backgroundColor: "pink",
    marginLeft: "40px",
  },
  assignedUsers: {
    width: "200px",
    backgroundColor: "grey",
    marginLeft: "40px",
  },
}));

export default useStyles;
