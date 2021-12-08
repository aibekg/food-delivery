import React, {FC} from 'react';
import {useParams} from "react-router-dom";
import {foodAPI} from "../services/foodAPI";
import MealCardComponent from "../components/MealCardComponent";

const CountryPage: FC = () => {
    const {title} =  useParams();
    console.log(title)
    const {data} = foodAPI.endpoints.getMealsByArea.useQuery(title);
    console.log(data)
    return (
        <>
            <div className={'mt-5 d-flex justify-content-md-center gap-4 justify-content-around flex-wrap'}>
                {
                    data && data.meals.map(item => (
                        <MealCardComponent key={item.idMeal} meal={item}/>
                    ))
                }
            </div>
        </>
    );
};

export default CountryPage;
