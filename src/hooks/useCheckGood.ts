import {IMeal} from "../models/IMeals";

interface IUseCheckGoods {
    basket: IMeal[] | [],
    idMeal: string
}

export const useCheckGood = ({basket, idMeal}: IUseCheckGoods): boolean => {
    return basket.filter(item => item.idMeal === idMeal).length === 1
}