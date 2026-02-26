import {configureStore} from '@reduxjs/toolkit'
import {productApi} from "../apis/ProductApi"

const store = configureStore({
    reducer: {

      [productApi.reducerPath]:productApi.reducer
    },
    middleware:(getDefaultMiddleWare)=>
        getDefaultMiddleWare().concat(productApi.middleware)
})

export default store;