import React, {FC} from 'react';
import {Card, Container, Spinner} from "react-bootstrap";
import {foodAPI} from "../services/foodAPI";
import CategoryCardComponent from "../components/CategoryCardComponent";
import Loader from "../utils/Spinner";

const HomePage: FC = () => {
    const {data, isLoading} = foodAPI.endpoints.getListCategories.useQuery('');
    return isLoading ? <Loader/> : (
        <>
            <Container>
                <Card>
                    <Card.Body className={'d-flex justify-content-md-center gap-2 justify-content-around flex-wrap'}>
                        {
                            data && data.categories.map(item => <CategoryCardComponent {...item} key={item.idCategory}/>)
                        }
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default HomePage;
