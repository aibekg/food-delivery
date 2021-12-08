import React, {FC} from 'react';
import {IMeal} from "../models/IMeals";
import {Button, Card} from "react-bootstrap";
import '../App.css'
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {BsCartFill, MdDelete} from "react-icons/all";
import {useCheckGood} from "../hooks/useCheckGood";
import {SetBasket} from "../store/reducers/basketSlice";

interface IMealCardProps {
    meal: IMeal
}

const MealCardComponent: FC<IMealCardProps> = ({meal}) => {
    const {basket} = useAppSelector(state => state.basket);
    const dispatch = useAppDispatch();

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(SetBasket(meal))
    }
    return (
        <>
            <Card className={'meal_card'}>
                <div
                    className={'meal_card_img'}
                    style={{backgroundImage: `url(${meal.strMealThumb})`}} />
                <Card.Body className={'text-center'}>
                    <Card.Title>{meal.strMeal}</Card.Title>
                    <div className={'card_footer d-flex justify-content-between'}>
                        <Button
                            variant={"outline-danger"}
                            className={'meal_card_btn'}
                            onClick={handleClick}
                        >
                            {
                               useCheckGood({basket, idMeal: meal.idMeal}) ? <MdDelete fontSize={20}/> : <BsCartFill fontSize={20}/>
                            }
                        </Button>
                        <Link to={`/details/${meal.idMeal}`}>
                            <Button
                                variant={"outline-warning"}
                                className={'meal_card_btn'}
                            >Подробнее</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default MealCardComponent;