import React, { Component } from 'react'


import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                {/* <h5 className="card-title text-center">Iniciar Sesión</h5> */}
                                <div className="content-logo">   
                                        <img className="logo-login" id="loginlogo" alt="" src={require('./img/imagen.jpg')}/>
                                    </div>         
                                <form className="form-signin">                                                           
                                    <hr className="my-1" />
                                    <div className="form-group">
										<input type="text" name="email" id="email" className="form-control" placeholder="Correo Electronico" required autoFocus/>
									</div>

                                    <div className="form-group">
										<input type="password" name="password" id="password" className="form-control" placeholder="Contraseña" required />
									</div>
                                    

                                    <div className="custom-control custom-checkbox mb-3 fila-flex">
                                        <div>                                        
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label">Recordar Contraseña</label>
                                        </div>
                                        
                                        <button className="text-info btn-link">Registrar Aqui</button>
                                            
                                    </div>
                                    
                                    

                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Iniciar</button>
                                    <hr className="my-1" />

                                    <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Login con Google</button>

                                    <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Login con Facebook</button>
                                    <hr className="my-1" />
                                    
                                    <div className="custom-control mb-2 fila-flex">
                                        <button className="text-info btn-link">Olvidaste tu Contraseña?</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
