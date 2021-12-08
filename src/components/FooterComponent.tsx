import React from 'react';
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import {AiOutlineInstagram, FaTelegramPlane, GiMeal} from "react-icons/all";

const FooterComponent = () => {
    return (
        <>
            <div className={'footer_'}>
                <div className={'footer_icon'}>
                </div>
                <Row className={'m-0 p-0'}>
                    <Col className={'mt-4'} xs={12} md={3}>
                        <p>Телефон:</p>
                        <a href={'tel:0776613090'} style={{color:"white"}}> +996776 613 090</a>
                    </Col>
                    <Col xs={12} md={3} className={'mt-4'}>
                        <p>Время работы:</p>
                        <p>Ежедневно с 8:00 до 0:00</p>
                    </Col>
                    <Col xs={12} md={3} className={'mt-4'}>
                        <p> Email:</p>
                        <p>aibek.kdm90@gmail.com</p>
                    </Col>
                    <Col xs={12} md={3} className={'mt-4'}>
                        <p> Социальные сети:</p>
                        <div className={'d-flex gap-3 justify-content-center'}>
                            <a href="https://web.telegram.org/z/#-555248659">
                                <FaTelegramPlane color={'white'} fontSize={20}/>
                            </a>
                            <a href="https://www.instagram.com/a.ibek_/">
                                <AiOutlineInstagram color={'white'} fontSize={20}/>
                            </a>
                        </div>
                    </Col>
                </Row>
                <hr color={'white'}/>
                <Row className={'m-0 p-0'}>
                    <Col xs={12} md={3} className={'mt-3'}>
                        <div style={{fontSize: 20}}>
                            Food<span className={'text-warning'}> - </span>Delivery <GiMeal color={'yellow'}/>
                        </div>
                    </Col>
                    <Col xs={12} md={3} className={'mt-3'}>
                        <div className={'d-flex justify-content-around flex-wrap'}>
                            <Link to={'/'}> <p>Главная</p></Link>
                            <Link to={'/stocks'}>  <p>Новости</p></Link>
                            <Link to={'/profile'}>  <p>Личный профиль</p></Link>
                        </div>
                    </Col>
                    <Col xs={12} md={3} className={'mt-3'}>
                        <span >Политика конфиденцияльности</span>
                    </Col>
                    <Col xs={12} md={3} className={'mt-3 mb-3'}>
                        <hr className={'d-block d-md-none'} color={'white'}/>
                        <span style={{color:'#07d4d7'}} >&copy; Go Space Group</span>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default FooterComponent;
