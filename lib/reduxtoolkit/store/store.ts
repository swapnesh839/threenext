import {configureStore} from "@reduxjs/toolkit"
import { MusicSlice } from "../Scilce/MusicSclice"
export const store =configureStore({
    reducer:{
        music: MusicSlice.reducer
    }
})

export type Rootstore = ReturnType<typeof store.getState>

export type AppDispatch = ReturnType<typeof store.dispatch>