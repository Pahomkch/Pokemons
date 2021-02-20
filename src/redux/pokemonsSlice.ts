import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPokemon } from "../api/api";
import { TPokemon } from "../Types/Pokemon";
import { TInitialSliceState } from "../Types/Redux";

const initialState: TInitialSliceState = {
  pokemons: [],
  error: false,
};

export const fetchPokemon = createAsyncThunk("pokemons/fetchOnePokemon", async (id: number) => {
  const response = await getPokemon(id);
  return response;
});

const pokemonSlice = createSlice({
  name: "pokemonsSlice",
  initialState,
  reducers: {
    addPokemon(state, action: PayloadAction<TPokemon>) {
      state.pokemons.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.pending, (state, action) => {
      state.error = false;
    });
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.pokemons.push(action.payload);
      state.error = false;
    });
    builder.addCase(fetchPokemon.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export const { addPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
