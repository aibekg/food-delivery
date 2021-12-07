import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ICategory, ICategoryList} from "../models/ICategory";
import {IMeals} from "../models/IMeals";


export const foodAPI = createApi({
    reducerPath: 'foodAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://www.themealdb.com/api/json/v1/1'}),
    endpoints: (build )=> ({
        getListCategories : build.query<ICategoryList, string | undefined>({
            query: () => ({
                url: '/categories.php'
            })
        }),
        getMealsByCategory : build.query<IMeals, string | undefined>({
            query: (title) => ({
                url: "/filter.php",
                params: {
                    c: title
                }
            })
        })
    })
})