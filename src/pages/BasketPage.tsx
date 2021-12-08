import React, {FC} from 'react';
import MealCardComponent from "../components/MealCardComponent";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import '../App.css'
import {BsCart3} from "react-icons/all";
import {Link} from "react-router-dom";
import CheckoutModal from "../utils/CheckoutModal";
import {Button} from "react-bootstrap";
import {setCheckoutModal} from "../store/reducers/basketSlice";

const BasketPage: FC = () => {
    const {basket} = useAppSelector(state => state.basket);
    const dispatch = useAppDispatch();
    const showModal = () => dispatch(setCheckoutModal());

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
                    basket && basket.map(item => <MealCardComponent key={item.idMeal} meal={item}/>)
                }
            </div>
            <Button
                onClick={showModal}
                variant={'danger'}
                className={'order_btn'}>Order</Button>
            <CheckoutModal/>
        </>
    );
};

export default BasketPage;
