import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../components/RestoList'
 

type Product = {
    id: number
    price: number
}

export type Delivery= {
    receiver: string,
    address: {
        description: string,
        city: string,
        zipCode: string,
        number: number,
        complement: string
    }
}

type PurchasePayload = {
    products: Product[]
    delivery: Delivery
    payment: {
        card: {
            name: string
            number: string
            code: number
            expires: {
                month: number
                year: number
            }
        }
    }
}

type PurchaseResponse = {
    orderId: string
}

const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-tau.vercel.app/api/efood' }),
    endpoints: builder => ({
        getReataurants: builder.query<Restaurante[], void>({
            query: () => 'restaurantes'
        }),
        getPlateList: builder.query<Restaurante, string>({
            query: (id) => `restaurantes/${id}`
        }),
        purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body
            })
        })
    })
});

export const {
    useGetReataurantsQuery,
    useGetPlateListQuery,
    usePurchaseMutation
} = apiSlice;

export default apiSlice