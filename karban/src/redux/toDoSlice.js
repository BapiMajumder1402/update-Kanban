import {createSlice} from '@reduxjs/toolkit'
import {v4 as uuid} from 'uuid'
const initialState={
    value:[]
}

export const toDoSlice=createSlice({
    name:"toDo", 
    initialState, 
    reducers:{
        addTask: (state, action)=>{
            state.value.push({id:uuid(), task: action.payload, completed: false})
        }
    }
})

export const {addTask}=toDoSlice.actions
export default toDoSlice.reducer