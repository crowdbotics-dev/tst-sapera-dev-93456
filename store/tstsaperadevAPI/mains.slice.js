import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_main_list = createAsyncThunk(
  "mains/api_v1_main_list",
  async payload => {
    const response = await apiService.api_v1_main_list(payload)
    return response.data
  }
)
export const api_v1_main_create = createAsyncThunk(
  "mains/api_v1_main_create",
  async payload => {
    const response = await apiService.api_v1_main_create(payload)
    return response.data
  }
)
export const api_v1_main_retrieve = createAsyncThunk(
  "mains/api_v1_main_retrieve",
  async payload => {
    const response = await apiService.api_v1_main_retrieve(payload)
    return response.data
  }
)
export const api_v1_main_update = createAsyncThunk(
  "mains/api_v1_main_update",
  async payload => {
    const response = await apiService.api_v1_main_update(payload)
    return response.data
  }
)
export const api_v1_main_partial_update = createAsyncThunk(
  "mains/api_v1_main_partial_update",
  async payload => {
    const response = await apiService.api_v1_main_partial_update(payload)
    return response.data
  }
)
export const api_v1_main_destroy = createAsyncThunk(
  "mains/api_v1_main_destroy",
  async payload => {
    const response = await apiService.api_v1_main_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const mainsSlice = createSlice({
  name: "mains",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_main_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_main_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_main_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_main_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_main_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_main_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_main_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_main_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_main_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_main_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_main_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_main_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_main_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_main_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_main_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_main_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_main_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_main_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_main_list,
  api_v1_main_create,
  api_v1_main_retrieve,
  api_v1_main_update,
  api_v1_main_partial_update,
  api_v1_main_destroy,
  slice: mainsSlice
}
