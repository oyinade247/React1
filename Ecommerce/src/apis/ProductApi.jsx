import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const URL= import.meta.env.VITE_APP_URL;

const productApi = createApi({
    reducerPath:"products",
    baseQuery: fetchBaseQuery({baseUrl: URL}),
    endpoints:(builder)=>({
        getAllProduct:builder.query({
            query:()=>"/products"
        })
    })
})
export default {useGetAllProduct} = productApi