import React, { Component } from 'react'
import './Mensaje.css';

export default class Mensaje extends Component {
    render() {
        return (
            <div className="container">
                <h3 className=" text-center">MENSAJES</h3>
                <div className="messaging">
                    <div className="inbox_msg">
                        <div className="inbox_people">
                            <div className="headind_srch">
                                <div className="recent_heading">
                                    <h4>Recientes</h4>
                                </div>
                                <div className="srch_bar">
                                    <div className="stylish-input-group">
                                        <input type="text" className="search-bar" placeholder="Buscar" />
                                        <span className="input-group-addon">
                                            <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* Usuario */}
                            <div className="inbox_chat">                                
                                <div className="chat_list active_chat">
                                    <div className="chat_people">
                                        <div className="chat_img">
                                            <img src="https://www.flaticon.com/premium-icon/icons/svg/145/145855.svg" alt="sunil" />
                                        </div>

                                        <div className="chat_ib">
                                            <h5>Usuario1
                                                    <span className="chat_date">Dec 25</span>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                <div class="chat_ib">
                  <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                  <p>Test, which is a new approach to have all solutions 
                    astrology under one roof.</p>
                </div>
              </div>
            </div>
                        </div>


                        {/* Mensajes */}

                        <div className="mesgs">
                            {/* Cesta de Mensajes */}
                            <div className="msg_history">

                                {/* Mensaje Recibido */}
                                <div className="incoming_msg">
                                    <div className="incoming_msg_img"> <img src="https://www.flaticon.com/premium-icon/icons/svg/145/145855.svg" alt="sunil" /> </div>
                                    <div className="received_msg">
                                        <div className="received_withd_msg">
                                            <p>Hola !!! , te hablo por el anuncio.</p>
                                            <span className="time_date"> 11:01 AM    |    Junio 9</span></div>
                                    </div>
                                </div>
                                {/* Mensaje Enviado */}
                                <div className="outgoing_msg">
                                    <div className="sent_msg">
                                        <p>Si dime cual es tu consulta.</p>
                                        <span className="time_date"> 11:01 AM    |    Junio 9</span> </div>
                                </div>

                                <div className="incoming_msg">
                                    <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                    <div className="received_msg">
                                        <div className="received_withd_msg">
                                            <p>Test, which is a new approach to have</p>
                                            <span className="time_date"> 11:01 AM    |    Yesterday</span></div>
                                    </div>
                                </div>
                                <div className="outgoing_msg">
                                    <div className="sent_msg">
                                        <p>Apollo University, Delhi, India Test</p>
                                        <span className="time_date"> 11:01 AM    |    Today</span> </div>
                                </div>
                                <div className="incoming_msg">
                                    <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                    <div className="received_msg">
                                        <div className="received_withd_msg">
                                            <p>We work directly with our designers and suppliers,
                                              and sell direct to you, which means quality, exclusive
                    products, at a price anyone can afford.</p>
                                            <span className="time_date"> 11:01 AM    |    Today</span></div>
                                    </div>
                                </div>
                            </div>

                            {/* Input y boton de Enviar */}
                            <div className="type_msg">
                                <div className="input_msg_write">
                                    <input type="text" className="write_msg" placeholder="Escribe un Mensaje" />
                                    <button className="msg_send_btn" type="button"><i className="fas fa-paper-plane"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div></div>

        )
    }
}
