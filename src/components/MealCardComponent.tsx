import React, {FC} from 'react';
import {IMeal} from "../models/IMeals";
import {Button, Card} from "react-bootstrap";
import '../App.css'

interface MealCardProps extends IMeal {

}

const MealCardComponent: FC<MealCardProps> = ({strMealThumb, strMeal}) => {
    return (
        <>
            <Card className={'meal_card'}>
                <div className={'meal_card_img'} style={{backgroundImage: `url(${strMealThumb})`}} />
                <Card.Body className={'text-center'}>
                    <Card.Title>{strMeal}</Card.Title>
                    <Button>Добавить в корзину</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default MealCardComponent;
