import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../components/RestoList'
 

const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-tau.vercel.app/api/efood' }),
    endpoints: builder => ({
        getReataurants: builder.query<Restaurante[], void>({
            query: () => 'restaurantes'
        }),
        getPlateList: builder.query<Restaurante, string>({
            query: (id) => `restaurantes/${id}`
        })
    })
});

export const {
    useGetReataurantsQuery,
    useGetPlateListQuery
} = apiSlice;

export default apiSlice