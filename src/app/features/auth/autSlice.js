import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL = "http://13.60.188.54"; // API логина/регистрации
const PROFILE_URL = "http://56.228.28.194/user/"; // API профиля

// Логин
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await fetch(`${API_BASE_URL}/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMsg =
          data?.detail ||
          data?.non_field_errors?.[0] ||
          Object.values(data)?.[0]?.[0] ||
          "Ошибка входа";
        throw new Error(errorMsg);
      }

      return data; // { token, ... }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Ошибка сети");
    }
  }
);

// Регистрация
export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await fetch(`${API_BASE_URL}/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMsg =
          data?.detail ||
          data?.non_field_errors?.[0] ||
          Object.values(data)?.[0]?.[0] ||
          "Ошибка регистрации";
        throw new Error(errorMsg);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Ошибка сети");
    }
  }
);

// Получение профиля по токену
export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.user?.token;

    if (!token) return thunkAPI.rejectWithValue("Нет токена");

    try {
      const response = await fetch(PROFILE_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMsg = data?.detail || "Ошибка загрузки профиля";
        throw new Error(errorMsg);
      }

      return data; // профиль пользователя
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Ошибка сети");
    }
  }
);

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
  successMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
    clearMessages(state) {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

      // register
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
        state.successMessage = "Регистрация прошла успешно!";
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

      // fetchUserProfile
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        if (state.user) {
          state.user = { ...state.user, ...action.payload };
          localStorage.setItem("user", JSON.stringify(state.user));
        }
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { logout, clearMessages } = authSlice.actions;
export default authSlice.reducer;
