import { createSlice } from "@reduxjs/toolkit";

const playersSlice = createSlice({
  name: "players",
  initialState: {
    playersTeam1: [],
    playersTeam2: [],
    predictedPlayers: null,
  },
  reducers: {
    setPlayersTeam1: (state, action) => {
      state.playersTeam1 = action.payload;
    },
    setPlayersTeam2: (state, action) => {
      state.playersTeam2 = action.payload;
    },
    setPredictedPlayers: (state, action) => {
      state.predictedPlayers = action.payload;
    },
  },
});
export const { setPlayersTeam1, setPlayersTeam2, setPredictedPlayers } =
  playersSlice.actions;
export default playersSlice.reducer;
