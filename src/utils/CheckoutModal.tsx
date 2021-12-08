import React, {useState} from 'react';
import {Button, Modal, FormGroup, FormControl, FormLabel, Form, FormCheck} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {removeMealsInBasket, setCheckoutModal} from "../store/reducers/basketSlice";
import axios from "axios";
import {successMessage} from "./messages";
import {useNavigate} from "react-router-dom";

const CheckoutModal = () => {
    const [checkbox, setCheckbox] = useState(false);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const {basket} = useAppSelector(state => state.basket)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {checkoutModal} = useAppSelector(state => state.basket)
    const handleClose = () => dispatch(setCheckoutModal());

    const checkout = () => {
        const text = `<b>Заказ: </b> \n\n <b>Имя: </b> <i>${name}</i> \n <b>Телефон номер: </b> <i>${phoneNumber}</i> \n <b>Адресс: </b> <i>${address}</i> \n\n <b>Еды: </b> \n <i>${basket.map((item, index) => `\t\t${index + 1}) ${item.strMeal}`).join('. \n')}</i>`
        axios.post('https://api.telegram.org/bot5030420802:AAGOs9LjNmSS8NWqfyru75we5wblYzEmQKk/sendMessage', {
            chat_id: '@osh_pizza',
            parse_mode: "HTML",
            text
        })
            .then(({data}) => {
                if (data.ok) {
                    successMessage('Order successfully');
                    navigate('/');
                    dispatch(setCheckoutModal());
                    if (checkbox) dispatch(removeMealsInBasket())
                }
            })
    }
    return (
        <>
            <Modal
                show={checkoutModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Checkout</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup className="mb-3">
                        <FormLabel>Name</FormLabel>
                        <FormControl
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Enter name"/>
                    </FormGroup>
                    <hr/>
                    <FormGroup className="mb-3">
                        <FormLabel>Phone number</FormLabel>
                        <FormControl
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            type="number"
                            placeholder="Enter phone number"/>
                    </FormGroup>
                    <hr/>
                    <FormGroup className="mb-3">
                        <FormLabel>Address</FormLabel>
                        <FormControl
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            type="text"
                            placeholder="Enter address"/>
                    </FormGroup>
                    <hr/>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <FormCheck
                            checked={checkbox}
                            onChange={() => setCheckbox(p => !p)}
                            type="checkbox"
                            label="remove food from cart."/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-warning" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        disabled={name.length < 4 || phoneNumber.length !== 10 || address.length < 4}
                        onClick={checkout}
                        variant="danger">make out</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CheckoutModal;
