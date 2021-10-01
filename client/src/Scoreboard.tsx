import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Alert, TablePagination } from "@mui/material";
import CustomPaginationActionsTable from "./CustomPaginationActionsTable";

type props = {};

type row = {
  username: string;
  score: number;
  time: number;
};

export type rows = Array<row>;

export default function Scoreboard({}: props) {
  const [rows, setRows] = React.useState<Array<row>>([]);
  const [loadingFailed, setLoadingFailed] = React.useState(false);
  const getData = async () => {
    fetch("http://localhost:9000/scores")
      .then((res) => res.json())
      .then((res) => {
        setRows(res.scores);
      })
      .catch((err) => setLoadingFailed(true));
  };
  getData();

  const millitotime = (millis: number) => {
    let minutes = Math.floor(millis / 60000);
    let seconds: number = (millis % 60000) / 1000;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  if (rows !== null || !loadingFailed) {
    return (
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <CustomPaginationActionsTable rows={rows} />
      </Paper>
    );
  } else {
    return <Alert severity="error">No results data!</Alert>;
  }
}
