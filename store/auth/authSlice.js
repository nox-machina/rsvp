// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const verifyAuth = createAsyncThunk(
//     "auth/verifyAuth",
//     async (_, { rejectWithValue }) => {
//         try {
//             const response = await fetch("http://localhost:3000/api/auth/verify", {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 credentials: "include",
//             });
//             const data = await response.json();
//             if (response.status !== 200) {
//                 return rejectWithValue(data.error);
//             }
//             console.log(data);
//             if (response.status === 200) {
//                 return data;
//             }
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     }
// )