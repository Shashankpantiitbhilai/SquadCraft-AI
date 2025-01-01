import { createSlice } from "@reduxjs/toolkit";

const matchSlice = createSlice({
  name: "match",
  initialState: {
    team1: "",
    team2: "",
    date: "",
    matchType: "",
  },
  reducers: {
    setTeam1: (state, action) => {
      state.team1 = action.payload;
    },
    setTeam2: (state, action) => {
      state.team2 = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setMatchType: (state, action) => {
      state.matchType = action.payload;
    },
  },
});
export const { setTeam1, setTeam2, setDate, setMatchType } = matchSlice.actions;
export default matchSlice.reducer;
