import delfos_logo from "./images/delfos_Intelligent_maintenance.png";
import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Grid from "@material-ui/core/Grid";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// import Fab from "@material-ui/core/Fab";
// import AddIcon from "@material-ui/icons/Add";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import Form from "./components/chartForm";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const chartOptions = {
  chart: {
    type: "line",
  },
  credits: {
    enabled: false,
  },
  title: {
    text: "Widget 01",
    style: {
      display: "none",
    },
  },
  yAxis: {
    lineWidth: 1,
    title: {
      text: "",
    },
    gridLineWidth: 0,
  },
  xAxis: {
    categories: ["Apples", "Bananas", "Oranges"],
  },
  series: [
    {
      showInLegend: false,
      data: [100, 200, 30, 100, 30, 50, 100],
    },
  ],
};
const chartOptions2 = {
  chart: {
    type: "line",
  },
  credits: {
    enabled: false,
  },
  title: {
    text: "Widget 02",
  },
  yAxis: {
    lineWidth: 1,
    title: {
      text: "",
    },
    gridLineWidth: 0,
  },
  xAxis: {
    categories: ["1", "2", "3"],
  },
  series: [
    {
      showInLegend: false,
      data: [100, 200, 30, 100, 30, 50, 100],
    },
  ],
};

const arrCharts = [chartOptions, chartOptions2];

function App() {
  const [searchData, setSearchData] = useState("");
  const [displaySearchData, setDisplaySearchData] = useState("");

  const getSearchData = (val) => {
    setSearchData(val.target.value);
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      console.log(searchData);
      setDisplaySearchData(searchData);
    }, 100);
    return () => clearTimeout(timeOutId);
  }, [searchData]);

  const [popover, setPopover] = useState(null);
  const openPopover = (event) => {
    setPopover(event.currentTarget);
  };

  // const submitHandler = (event) => {
  //   event.preventDefault();
  // };

  return (
    <div>
      <div className="top-bar">
        <Grid container>
          <Grid item xs={12} sm={7} md={7}>
            <a href="https://delfosim.com/" rel="noreferrer" target="_blank">
              <img src={delfos_logo} alt="delfos_logo" className="logo" />
            </a>
          </Grid>
          <Grid item xs={12} sm={5} md={5}>
            <Autocomplete
              id="combo-box-demo"
              options={arrCharts}
              getOptionLabel={(option) => option.title.text}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search..."
                  variant="outlined"
                  fullWidth
                  onChange={getSearchData}
                  onClick={getSearchData}
                />
              )}
            />
            <p>{displaySearchData}</p>
          </Grid>
        </Grid>
      </div>
      <div className="main-info">
        {arrCharts.map((chart) => (
          <Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Box className="info-box">
                <div className="chart-info">
                  <div className="widget-name">
                    <p>{chart.title.text}</p>
                  </div>
                  <div className="threeDots-menu">
                    <MoreVertIcon onClick={openPopover} />
                  </div>
                  <Popover
                    open={Boolean(popover)}
                    anchorEl={popover}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    onClose={() => {
                      setPopover(null);
                    }}
                  >
                    <Button variant="contained" color="primary">
                      Edit
                    </Button>
                    <Button variant="contained" color="secondary">
                      Delete
                    </Button>
                  </Popover>
                </div>

                <div className="chart">
                  <HighchartsReact highcharts={Highcharts} options={chart} />
                </div>
              </Box>
            </Grid>
            <div className="add-chart-btn">
              <Form></Form>
            </div>
          </Grid>
        ))}
      </div>
    </div>
  );
}

export default App;
