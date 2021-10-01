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
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Box,
  Typography,
} from "@mui/material";
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
      <Container sx={{ height: "100vh", minWidth: "100%", bgcolor: 'primary.main'}}>
        <Box sx={{ top: "10%", left: "37%", position: 'absolute'}}>
          <Typography variant="h1">
            Highscores!
          </Typography>
        </Box>
        <Card sx={{ maxWidth: "50%", borderRadius: '16px', left: '25%', top: "25%", right: "25%", bottom: "10%", position: 'absolute', p: 1}}>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <CustomPaginationActionsTable rows={rows} />
          </Paper>
        </Card> 
      </Container> 
    );
  } else {
    return <Alert severity="error">No results data!</Alert>;
  }
}
