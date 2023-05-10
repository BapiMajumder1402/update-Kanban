import {configureStore} from '@reduxjs/toolkit'
import toDoReducer from './toDoSlice'


export const store=configureStore({
    reducer:{
        toDo: toDoReducer
    }
})
