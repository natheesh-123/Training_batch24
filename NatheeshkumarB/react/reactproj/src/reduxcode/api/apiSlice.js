import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GET,POST,PUT,DELETE } from "../../shared/service/HTTP.Service";

const API_URL = "http://localhost:8080/products";

export const fetchData = createAsyncThunk("api/fetchData", async () => {
    // let res=await axios.get(API_URL);
    let res = await GET(API_URL);
    return res.data;
});

export const deleteData = createAsyncThunk("api/fetchData", async (id) => {
    //await axios.delete(`${API_URL}/${id}`);
await DELETE (`${API_URL}/${id}`);
    return id;
});

export const addData = createAsyncThunk("api/fetchData", async (newUser) => {
   // let res = await axios.post(API_URL, newUser);
   let res =await POST(API_URL,newUser);
    return res.data;
});


const apiSlice = createSlice({

    name: "api",
    initialState: {
        data: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = "loading"
            })

            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = "success";
                state.data = action.payload;

            })

            .addCase(fetchData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export default apiSlice.reducer;