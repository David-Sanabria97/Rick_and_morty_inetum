import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "@/types/character";

const MAX_RECENT = 5;

interface RecentState {
  items: Character[];
}

const initialState: RecentState = {
  items: [],
};

const recentSlice = createSlice({
  name: "recent",
  initialState,
  reducers: {
    addRecent(state, action: PayloadAction<Character>) {
      const filtered = state.items.filter(
        (item) => item.id !== action.payload.id,
      );

      state.items = [action.payload, ...filtered].slice(0, MAX_RECENT);
    },
    setRecent(state, action: PayloadAction<Character[]>) {
      state.items = action.payload;
    },
  },
});

export const { addRecent, setRecent } = recentSlice.actions;
export default recentSlice.reducer;
