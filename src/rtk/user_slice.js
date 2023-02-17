import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  initialState: {
    user: {
      name: "Fouad",
      day: 1,
      month: 1,
    },
  },
  // which it was []
  name: "userSlice",
  // state = {
  //   name: action.payload.name,
  //   month: action.payload.month,
  //   day: action.payload.day,
  // };
  // which it was an state.push(action.payload)
  reducers: {
    SET_User: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});
export const { SET_User } = userSlice.actions;
export default userSlice.reducer;
