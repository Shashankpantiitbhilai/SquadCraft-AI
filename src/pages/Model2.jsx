import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, Button } from "@mui/material";
import "../styles/Model2.css";

const Model2 = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const [trainingProgress, setTrainingProgress] = useState(70); // Example training progress percentage

  const columns = [
    { field: "hospitalName", headerName: "Hospital Name", width: 200 },
    { field: "address", headerName: "Address", width: 250 },
    { field: "city", headerName: "City", width: 150 },
    { field: "state", headerName: "State", width: 100 },
    { field: "zipCode", headerName: "ZIP Code", width: 100 },
    { field: "phone", headerName: "Phone Number", width: 200 },
  ];

  const rows = [
    {
      id: 1,
      hospitalName: "SOUTHEAST ALABAMA MEDICAL CENTER",
      address: "1108 ROSS CLARK CIRCLE",
      city: "DOTHAN",
      state: "AL",
      zipCode: "36301",
      phone: "123-456-7890",
    },
    {
      id: 2,
      hospitalName: "MARSHALL MEDICAL CENTER SOUTH",
      address: "2505 U S HIGHWAY 431 NORTH",
      city: "BOAZ",
      state: "AL",
      zipCode: "35957",
      phone: "123-456-7891",
    },
    {
      id: 3, // Fix IDs to be unique
      hospitalName: "SOUTHEAST ALABAMA MEDICAL CENTER",
      address: "1108 ROSS CLARK CIRCLE",
      city: "DOTHAN",
      state: "AL",
      zipCode: "36301",
      phone: "123-456-7890",
    },
    // ... continue with unique IDs for all rows
  ];

  return (
    <Box className="container">
      {/* Data Table Section */}
      <Box className="table-section">
        <Typography className="table-title">Hospital Dataset</Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[10, 20, 30]}
          pagination
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 },
            },
          }}
          getRowId={(row) => row.id}
          style={{ height: "100%" }}
        />
      </Box>

      {/* Metrics and Training Progress Section */}
      <Box className="metrics-section">
        {/* Top Metric Boxes */}
        <Box className="top-metrics">
          <Box className="metric-box">
            <Typography className="metric-title">Accuracy:</Typography>
            <Typography className="metric-value">95%</Typography>
          </Box>

          <Box className="metric-box">
            <Typography className="metric-title">F1 Score:</Typography>
            <Typography className="metric-value">0.92</Typography>
          </Box>

          <Box className="metric-box">
            <Typography className="metric-title">Precision:</Typography>
            <Typography className="metric-value">0.93</Typography>
          </Box>
        </Box>

        {/* Bottom Components */}
        <Box className="bottom-metrics">
          <Box className="training-progress">
            <Typography className="progress-title">
              Training Progress
            </Typography>
            <Box className="progress-bar">
              <Box
                className="progress-fill"
                style={{ width: `${trainingProgress}%` }}
              ></Box>
            </Box>
          </Box>

          <Box className="metrics-button">
            <Button className="other-metrics-button">
              Other Training Metrics
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Model2;
