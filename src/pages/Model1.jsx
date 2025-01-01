import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Typography,
} from "@mui/material";
import DatePicker from "react-datepicker"; // Import react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // Required CSS for the calendar
import "../styles/Model1.css";

const Model1 = () => {
  const [trainingProgress, setTrainingProgress] = useState(70); // Example training progress percentagex
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 1,
  });

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
    <Box display="flex" height="100vh" overflow="hidden">
      {/* Sidebar */}
      <Box className="sidebar">
        <Typography variant="h6" className="inputabout" gutterBottom>
          Train Data Range
        </Typography>
        <FormControl className="form-control" fullWidth>
          From :<InputLabel sx={{ color: "white", shrink: true }}></InputLabel>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MM/dd/yyyy"
            className="datepicker-input"
          />
        </FormControl>

        <FormControl className="form-control" fullWidth>
          To :<InputLabel sx={{ color: "white", shrink: true }}></InputLabel>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="MM/dd/yyyy"
            className="datepicker-input"
          />
        </FormControl>

        <Typography variant="h6" className="inputabout" gutterBottom>
          Test Data Range
        </Typography>
        <FormControl className="form-control" fullWidth>
          From :<InputLabel sx={{ color: "white" }}></InputLabel>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MM/dd/yyyy"
            className="datepicker-input"
          />
        </FormControl>
        <FormControl className="form-control" fullWidth>
          To :<InputLabel sx={{ color: "white" }}></InputLabel>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="MM/dd/yyyy"
            className="datepicker-input"
          />
        </FormControl>
        <Button className="train-button">Train On Custom Dataset</Button>
        {/* Image at the bottom of the sidebar */}
        <Box className="sidebar-graph"></Box>
      </Box>

      {/* Main content */}
      <Box className="main-content">
        <Typography variant="h5" className="table-title" gutterBottom>
          DataSheet Cricket
        </Typography>
        <Box className="table-container">
          <DataGrid
            rows={rows}
            columns={columns}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[1, 2, 25]}
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
      </Box>
    </Box>
  );
};

export default Model1;
