import React, {FC} from 'react';
import MealCardComponent from "../components/MealCardComponent";
import {useAppSelector} from "../hooks/redux";
import '../App.css'
import {BsCart3} from "react-icons/all";
import {Link} from "react-router-dom";

const BasketPage: FC = () => {
    const {basket} = useAppSelector(state => state.basket);
    console.log(basket)
    return !basket.length ? (
        <>
            <div className={'basket_empty'}>
                <BsCart3 className={'basket_empty_icon'}/>
                <div className={'basket_empty_title'}>Oh! empty.</div>
               <Link to={'/'}>
                   <div className={'basket_empty_text'}>Exit the menu?</div>
               </Link>
            </div>
        </>
    ) : (
        <>
            <div className={'mt-5 d-flex justify-content-md-center gap-4 justify-content-around flex-wrap'}>
                {
                    basket && basket.map(item => (
                        <MealCardComponent key={item.idMeal} meal={item}/>
                    ))
                }
            </div>
        </>
    );
};

export default BasketPage;
