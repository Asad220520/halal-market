import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// async thunk для логина, пример
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    // здесь можно использовать fetch/axios
    // const response = await axios.post("/api/login", credentials);
    // return response.data;

    // мок-ответ:
    return {
      id: 1,
      name: "Admin",
      role: "admin",
    };
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
