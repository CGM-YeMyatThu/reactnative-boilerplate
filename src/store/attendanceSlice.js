import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
}

export const attendanceSlice = createSlice({
    name: 'attendance',
    initialState,
    reducers: {
        addAttendance: (items, action) => {
            items.list = [...items.list, action.payload]
        },
        reset: (items, action) => {
            items.list = []
        }
    }
})
const attendanceReducer = attendanceSlice.reducer
export const { addAttendance, reset } = attendanceSlice.actions

//selector
export const getAttendanceLists = (state) => state.attendance.list

export default attendanceReducer;