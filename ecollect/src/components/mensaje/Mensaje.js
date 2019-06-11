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
                            <div class="inbox_chat">

                                <div class="chat_list active_chat">
                                    <div class="chat_people">
                                        <div class="chat_img"> <img src="https://www.flaticon.com/premium-icon/icons/svg/145/145855.svg" alt="sunil" /> </div>
                                        <div class="chat_ib">
                                            <h5>Saul, Ramos Villanueva<span class="chat_date">Dec 25</span></h5>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div class="chat_list">
                                    <div class="chat_people">
                                        <div class="chat_img"> <img src="https://www.flaticon.com/premium-icon/icons/svg/145/145857.svg" alt="sunil" /> </div>
                                        <div class="chat_ib">
                                            <h5>Hernesto, R. Zaens<span class="chat_date">Dec 25</span></h5>                                            
                                        </div>
                                    </div>
                                </div>                              
                                
                                
{/* 
                                <div class="chat_list">
                                    <div class="chat_people">
                                        <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                        <div class="chat_ib">
                                            <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>                                            
                                        </div>
                                    </div>
                                </div>

                                <div class="chat_list">
                                    <div class="chat_people">
                                        <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                        <div class="chat_ib">
                                            <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>                                            
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="chat_list">
                                    <div class="chat_people">
                                        <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                        <div class="chat_ib">
                                            <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>                                            
                                        </div>
                                    </div>
                                </div> */}


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
                                    <div className="incoming_msg_img"> <img src="https://www.flaticon.com/premium-icon/icons/svg/145/145855.svg" alt="sunil" /> </div>
                                    <div className="received_msg">
                                        <div className="received_withd_msg">
                                            <p>El producto que publicaste , la cantidad que colocaste es real?</p>
                                            <span className="time_date"> 11:20 AM    |    Ayer</span></div>
                                    </div>
                                </div>

                                <div className="outgoing_msg">
                                    <div className="sent_msg">
                                        <p>Claro aun esta disponible, pero la cantidad es grande por lo que necesitaras algun vehiculo especial para llevarlo.</p>
                                        <span className="time_date"> 09:01 AM    |    Hoy</span> </div>
                                </div>

                                <div className="incoming_msg">
                                    <div className="incoming_msg_img"> <img src="https://www.flaticon.com/premium-icon/icons/svg/145/145855.svg" alt="sunil" /> </div>
                                    <div className="received_msg">
                                        <div className="received_withd_msg">
                                            <p>Por eso no tengo inconveniente.</p>
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

                </div>
            </div>
            // </div>

        )
    }
}
