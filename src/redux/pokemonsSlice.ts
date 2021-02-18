import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TPokemon } from "../Types/Pokemon";

const pokemonSlice = createSlice({
  name: "pokemonsSlice",
  initialState: [] as Array<TPokemon>,
  reducers: {
    addPokemon(state, action: PayloadAction<TPokemon>) {
      state.push(action.payload);
    },
  },
});

export const { addPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
