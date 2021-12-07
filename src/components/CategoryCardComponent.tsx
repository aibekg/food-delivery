import React, {FC} from 'react';
import {Card} from "react-bootstrap";
import '../App.css';
import {ICategory} from "../models/ICategory";
import {Link} from "react-router-dom";


const CategoryCardComponent: FC <ICategory>  = ({strCategory, strCategoryThumb}) => {
    return (
        <>
            <Card as={Link} to={`category/${strCategory}`} className={'category_card'}>
                <div className={'category_card_img'} style={{backgroundImage: `url(${strCategoryThumb})`}}/>
                <Card.Body>
                    <Card.Title>{strCategory}</Card.Title>
                </Card.Body>
            </Card>
        </>
    );
};

export default CategoryCardComponent;
