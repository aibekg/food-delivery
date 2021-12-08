import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMeal} from "../../models/IMeals";
import {useCheckGood} from "../../hooks/useCheckGood";


interface IBasketState {
    basket: IMeal[]
}

const initialState: IBasketState = {
    basket: JSON.parse(localStorage.getItem('basket_') || '[]'),
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        SetBasket (state, {payload: meal}: PayloadAction<IMeal>) {
            if(useCheckGood({basket: state.basket, idMeal: meal.idMeal})) {
                state.basket = state.basket.filter(item => item.idMeal !== meal.idMeal)
            }else{
                state.basket.push(meal);
            }
            localStorage.setItem('basket_', JSON.stringify(state.basket));
        }
    }
})
export default basketSlice.reducer;
export const {SetBasket} = basketSlice.actions