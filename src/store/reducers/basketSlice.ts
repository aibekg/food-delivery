import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMeal} from "../../models/IMeals";
import {useCheckGood} from "../../hooks/useCheckGood";


interface IBasketState {
    basket: IMeal[],
    checkoutModal: boolean
}

const initialState: IBasketState = {
    basket: JSON.parse(localStorage.getItem('basket_') || '[]'),
    checkoutModal: false,
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        SetBasket(state, {payload: meal}: PayloadAction<IMeal>) {
            if (useCheckGood({basket: state.basket, idMeal: meal.idMeal})) {
                state.basket = state.basket.filter(item => item.idMeal !== meal.idMeal)
            } else {
                state.basket.push(meal);
            }
            localStorage.setItem('basket_', JSON.stringify(state.basket));
        },
        setCheckoutModal(state) {
            state.checkoutModal = !state.checkoutModal
        },
        removeMealsInBasket(state) {
            state.basket = [];
            localStorage.removeItem('basket_');
        }
    }
})
export default basketSlice.reducer;
export const {SetBasket, setCheckoutModal, removeMealsInBasket} = basketSlice.actions