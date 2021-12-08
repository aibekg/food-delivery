import React from 'react';
import {Spinner} from "react-bootstrap";

const Loader = () => {
    return (
        <div className={'loading_block'}>
            <Spinner className={'spinner'} animation="border" variant="danger" />
        </div>
    );
};

export default Loader;
