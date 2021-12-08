import React, {FC} from 'react';
import {foodAPI} from "../services/foodAPI";
import {useParams} from "react-router-dom";
import Loader from "../utils/Spinner";
import MealCardComponent from "../components/MealCardComponent";
import {MdOutlineManageSearch} from "react-icons/all";

const SearchPage: FC = () => {
    const {text} = useParams();
    const {data, isLoading} = foodAPI.endpoints.getMealsByTitle.useQuery(text);
    return isLoading ? <Loader/> : (
        <>
            <div className={'mt-5 d-flex justify-content-md-center gap-4 justify-content-around flex-wrap'}>
                {
                    data && data.meals !== null ? data.meals.map(item => <MealCardComponent key={item.idMeal} meal={item}/>) : (
                        <>
                            <div className={'basket_empty'}>
                                <MdOutlineManageSearch className={'no_such_food_icon'}/>
                                <div className={'no_such_food'}>There is no such food</div>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    );
};

export default SearchPage;
