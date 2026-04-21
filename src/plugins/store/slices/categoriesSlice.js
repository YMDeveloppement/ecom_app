import { createSlice } from '@reduxjs/toolkit'
import axiosIns from '@/plugins/axiosIns.js'
const initialState = { categories : {} }

const categoriesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getData(state) {
        axiosIns.get('products/categories')
        .then(({categories}) => {
            state.categories = categories
            console.log(state.categories)
        }).catch((ex)=>{})
    },
  },
})

export const { increment } = categoriesSlice.actions
export default categoriesSlice.reducer
