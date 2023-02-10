import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '​https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: () => {
            headers.set('X-RapidAPI-Key', '​a155e1904emsh7da19e31f146f50p1fc919jsn75b3a4881240');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;