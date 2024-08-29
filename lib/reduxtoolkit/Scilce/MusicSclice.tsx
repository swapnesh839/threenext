import { createSlice } from "@reduxjs/toolkit"

export const MusicSlice= createSlice({
    name: "music",
    initialState: {
        music: false
    },
    reducers: {
        toggleMusic: (state) => {
            state.music = !state.music
        }
    }
})
export const { toggleMusic } = MusicSlice.actions
export default MusicSlice