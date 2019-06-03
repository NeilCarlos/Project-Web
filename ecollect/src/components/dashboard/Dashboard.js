import React, { Component } from 'react'

import './dashboard.css'
import { Link } from 'react-router-dom';
import $ from 'jquery'; 

export default class Dashboard extends Component {


    componentDidMount() {
        this.ClickToggleSidebar();
    }

    ClickToggleSidebar = () => {
        // console.log("Se hizo clic");
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        // $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    }

    ClickSideBar=()=>{
        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        });
    }

    render() {
        return (

            <div className="wrapper">

                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>Bootstrap Sidebar</h3>
                    </div>

                    <ul className="list-unstyled components">
                        <p>Dummy Heading</p>
                        <li className="active">
                            <Link to="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</Link>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <Link to="#">Home 1</Link>
                                </li>
                                <li>
                                    <Link to="#">Home 2</Link>
                                </li>
                                <li>
                                    <Link to="#">Home 3</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#">About</Link>
                        </li>
                        <li>
                            <Link to="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</Link>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <Link to="#">Page 1</Link>
                                </li>
                                <li>
                                    <Link to="#">Page 2</Link>
                                </li>
                                <li>
                                    <Link to="#">Page 3</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="#">Contact</Link>
                        </li>
                    </ul>

                    <ul className="list-unstyled CTAs">
                        <li>
                            <Link to="#" className="download">Download source</Link>
                        </li>
                        <li>
                            <Link to="#" className="article">Back to article</Link>
                        </li>
                    </ul>
                </nav>


                <div id="content">

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">

                            <button type="button" id="sidebarCollapse" onClick={this.ClickToggleSidebar} className="btn btn-info">
                                <i className="fas fa-align-left"></i>
                                <span>Toggle Sidebar</span>
                            </button>

                            <button onClick={this.ClickSideBar} className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fas fa-align-justify"></i>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="nav navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="#">Page</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Page</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Page</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Page</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <h2>Collapsible Sidebar Using Bootstrap 4</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <div className="line"></div>

                    <h2>Lorem Ipsum Dolor</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <div className="line"></div>

                    <h2>Lorem Ipsum Dolor</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <div className="line"></div>

                    <h3>Lorem Ipsum Dolor</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

            </div>

        )
    }
}
