import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Alert,
  Button,
  FormLabel,
  TablePagination,
  TextField,
} from "@mui/material";
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
import zIndex from "@mui/material/styles/zIndex";

type props = {
  score: number;
  time: number;
  setPostFailed: React.Dispatch<React.SetStateAction<boolean>>;
  correctAnswers: (string | null)[];
};

type row = {
  username: string;
  score: number;
  time: number;
};

export type rows = Array<row>;

export default function Scoreboard({
  score,
  time,
  setPostFailed,
  correctAnswers,
}: props) {
  const [rows, setRows] = React.useState<Array<row>>([]);
  const [loadingFailed, setLoadingFailed] = React.useState(false);
  const [hasSumbitted, setHasSubmitted] = React.useState<boolean>(false);
  const [isAcceptableUsername, setIsAcceptableUsername] =
    React.useState<boolean>(true);
  const [username, setUsername] = React.useState<string>("");
  const [helperText, setHelperText] = React.useState<string>("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    setIsAcceptableUsername(true);
    setHelperText("");
  };

  const handleSubmit = () => {
    if (username.length == 0) {
      setIsAcceptableUsername(false);
      setHelperText("Username must exist");
      return;
    }
    const sendData = { username, score, time };
    setHasSubmitted(true);
    fetch("http://localhost:9000/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    }).catch((err) => setPostFailed(true));
  };

  const getData = async () => {
    fetch("http://localhost:9000/scores")
      .then((res) => res.json())
      .then((res) => {
        setRows(res.scores);
      })
      .catch((err) => setLoadingFailed(true));
  };
  getData();

  function percentage(partialValue: number, totalValue: number) {
    return (100 * partialValue) / totalValue;
  }

  if (rows !== null || !loadingFailed) {
    return (
      <Container
        sx={{
          height: "100vh",
          minWidth: "100%",
          bgcolor: "primary.main",
          zIndex: "-1",
        }}
      >
        <Box
          sx={{
            top: "10%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: "20px",
            paddingBottom: "40px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
              variant="h1"
            >
              Highscores!
            </Typography>
            <Typography
              variant="h4"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                paddingTop: "20px",
              }}
            >
              {score} / {correctAnswers.length} Percentage ={" "}
              {Math.round(percentage(score, correctAnswers.length))}%{" "}
              {Math.round(percentage(score, correctAnswers.length)) >= 65
                ? "Pass"
                : "Better Luck Next Time"}
            </Typography>
            {!hasSumbitted && (
              <>
                <FormLabel component="legend">
                  Would you like to submit your score?
                </FormLabel>
                <TextField
                  id="username"
                  label="Name"
                  value={username}
                  onChange={handleUsernameChange}
                  error={!isAcceptableUsername}
                  helperText={helperText}
                />
                <Button
                  sx={{
                    mt: 1,
                    mr: 1,
                    bgcolor: "secondary.main",
                    display: "flex",
                    flexDirection: "row",
                    alignSelf: "center",
                  }}
                  onClick={handleSubmit}
                  variant="outlined"
                  id="cy-button"
                >
                  Submit
                </Button>
              </>
            )}
            <Card>
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <CustomPaginationActionsTable rows={rows} />
              </Paper>
            </Card>
          </Box>
        </Box>
      </Container>
    );
  } else {
    return <Alert severity="error">No results data!</Alert>;
  }
}
