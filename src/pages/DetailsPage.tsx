import React from 'react';
import {foodAPI} from "../services/foodAPI";
import Loader from "../utils/Spinner";
import {useParams} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import '../App.css';

const DetailsPage = () => {
    const {id} = useParams()
    const {data, isLoading } = foodAPI.endpoints.getMealDetailsByID.useQuery(id);
    const meal = data && data.meals[0];
    console.log(meal)
    return isLoading ? <Loader/> : (
        <>
            <Container className={'mt-5'}>
                <Row>
                    <Col xs={12} md={6}>
                        <div style={{backgroundImage: `url(${meal && meal.strMealThumb})`}} className={'details_image'}/>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4 className={'mt-4'}>{meal && meal.strMeal}</h4>
                        <hr/>
                            <b>Category: </b> <span>{ meal && meal.strCategory}.</span>
                            <hr/>
                            <b>Area: </b> <span>{ meal && meal.strArea}.</span>
                            <hr/>
                            <b>Introduction: </b> <span>{ meal && meal.strInstructions} </span>
                            <a href={meal && meal.strYoutube} target={"_blank"} role={'noreferrer'}>YouTube</a>
                    </Col>
                </Row>
                <hr/>
            </Container>
        </>
    )
};
export default DetailsPage;
