import React, { Component } from 'react'


export default class Reciclar extends Component {
    render() {
    const style1 = {left: '0px', top: '0px', position: 'absolute', transform: 'translate3d(0px, 42px, 0px)'};
        return (
            <div className="container">

                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link" href="#home" data-toggle="tab">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#profile" data-toggle="tab">Profile</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" role="button" aria-expanded="false" aria-haspopup="true" href="#" data-toggle="dropdown">Dropdown</a>
                        <div className="dropdown-menu" style={style1} x-placement="bottom-start">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade" id="home">
                        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, 
                            retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. 
                            Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. 
                            Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                    </div>
                    <div className="tab-pane fade active show" id="profile">
                        <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, 
                            blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. 
                            Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. 
                            Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
                    </div>
                    <div className="tab-pane fade" id="dropdown1">
                        <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi 
                            farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles 
                            etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</p>
                    </div>
                    <div className="tab-pane fade" id="dropdown2">
                        <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse 
                            gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf 
                            cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table 
                            VHS viral locavore cosby sweater.</p>
                    </div>
                </div>

            </div>
        )
    }
}




// <div>
// <h3> Test 1 </h3>
// <hr />
// <ul className="nav nav-pills">
//     <li className="active"><a data-toggle="pill" href="#home">Home</a></li>
//     <li><a data-toggle="pill" href="#menu1">Menu 1</a></li>
//     <li><a data-toggle="pill" href="#menu2">Menu 2</a></li>
// </ul>

// <div className="tab-content">
//     <div id="home" className="tab-pane fade in active">
//         <h3>HOME</h3>
//         <p>Some content.</p>
//     </div>
//     <div id="menu1" className="tab-pane fade">
//         <h3>Menu 1</h3>
//         <p>Some content in menu 1.</p>
//     </div>
//     <div id="menu2" className="tab-pane fade">
//         <h3>Menu 2</h3>
//         <p>Some content in menu 2.</p>
//     </div>
// </div>
// </div>