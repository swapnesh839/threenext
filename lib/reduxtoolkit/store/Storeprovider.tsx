"use client"
import React from 'react'
import {Provider} from "react-redux"
import { store } from "@/lib/reduxtoolkit/store/store";

const Storeprovider = ({children}:{children:React.ReactNode}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default Storeprovider