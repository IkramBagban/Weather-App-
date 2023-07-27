import { createSlice } from "@reduxjs/toolkit"


const cardSlice = createSlice({
    name:'card',
    initialState : [],
    reducers:{
        findWeather:(state,action) => {
            state.push(action.payload)
        },
    }
})

export const {findWeather} = cardSlice.actions
export default cardSlice.reducer;