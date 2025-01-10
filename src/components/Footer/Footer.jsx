import React from 'react'
import "./Footer.scss"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__link1">
                    <p className="footer__text1">Покупателям :</p>
                    <p className="footer__texts1">Как сделать заказ</p>
                    <p className="footer__texts1">Способы оплаты</p>
                    <p className="footer__texts1">Доставка</p>
                    <p className="footer__texts1">Возврат товара</p>
                    <p className="footer__texts1">Правила продажи</p>
                    <p className="footer__texts1">Вопросы и ответы</p>
                </div>
                <div className="footer__link2">
                    <div className="footer__company">
                        <p className="footer__text2">Компания :</p>
                        <p className="footer__texts2">О нас</p>
                        <p className="footer__texts2">Реквизиты</p>
                        <p className="footer__texts2">Контакты</p>
                    </div>
                    <div className="footer__sites">
                        <p className="sites__text">Мы в соцсетях </p>
                        <div className="sites">
                            <Link className='icon'><FaFacebook /></Link>
                            <Link className='icon'><FaInstagram /></Link>
                            <Link className='icon'><FaTelegram /></Link>
                            <Link className='icon'><FaVk /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer