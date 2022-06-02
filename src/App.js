import React, { useState } from "react";
import { Grid, Typography, Paper, Button, FormControl, InputLabel, MenuItem} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './App.css';

function App() {

  const backImage = "";

  const [sport, setsport] = useState("");

  const [recommendation1, setrecommendation1] = useState("");
  const [recommendation2, setrecommendation2] = useState("");
  const [recommendation3, setrecommendation3] = useState("");

  const possibleJobs = {
    "":["","",""],
    "Football":["Software Developer","Football Player","Plumber"],
    "Tennis": ["Nuclear Scientist","Consultant","Baker"],
    "Netball": ["Salesperson","Data Analyst","Construction Worker"]
  }

  const handleChange = (event: SelectChangeEvent) => {
    setsport(event.target.value);
  }

  const getRecommendations = () => {
    setrecommendation1(possibleJobs[sport][0]);
    setrecommendation2(possibleJobs[sport][1]);
    setrecommendation3(possibleJobs[sport][2]);
  }

  return (
    <Grid container padding = {5} spacing = {5} align={"center"} justifyContent={"center"}
    sx={{backgroundImage: "url("+backImage+")", backgroundSize: "auto", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
      <Grid item xs={12}>
        <Typography fontSize={50}>Ikigai Data</Typography>
      </Grid>
      <Grid item container xs={6} align={"center"} justifyContent={"center"}sx = {{height: 250, padding: 4}}>
        <Grid item xs={12}>
          <Typography fontSize={30}>About you:</Typography>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Favourite Sport</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sport}
            label="Job"
            onChange={handleChange}
          >
            <MenuItem value={"Football"}>Football</MenuItem>
            <MenuItem value={"Tennis"}>Tennis</MenuItem>
            <MenuItem value={"Netball"}>Netball</MenuItem>
          </Select>
          </FormControl>
        </Grid>

      </Grid>
      <Grid item container xs={6} align={"center"} justifyContent={"center"} sx = {{height: 250, padding: 4}}>
        <Grid item xs={12}>
          <Typography fontSize={30}>Our Recommendations:</Typography>
        </Grid>
        <Grid xs={12}>
          <Paper><Typography fontSize={20}>#1: {recommendation1}</Typography></Paper>
        </Grid>
        <Grid xs={6}>
          <Paper><Typography fontSize={15}>#2: {recommendation2}</Typography></Paper>
        </Grid>
        <Grid xs={6}>
          <Paper><Typography fontSize={15}>#3: {recommendation3}</Typography></Paper>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button variant={"contained"} color = {"success"} size={"large"} onClick = {getRecommendations}>GO</Button>
      </Grid>
    </Grid>
  );
}

export default App;
