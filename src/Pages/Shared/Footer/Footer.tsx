import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <div className='myfootecss'>
            <div className=" mt-5">
                <div className="card ">
                    <div className="row mb-4">
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="footer-text pull-left">
                                <div className="d-flex">
                                    <h2 style={{ color: "#8ca3ba" }}> <img style={{ width: "80px", height: "80px", marginRight: "10px" }}
                                        src="https://github.com/chamod-ishankha/childy-app-contents/blob/master/images/application_icon-removebg-preview.png?raw=true" />
                                        CHILDY</h2>
                                </div>
                                <p className="card-text">
                                The main objective of the proposed Childy application is to provide a more reliable and user-friendly experience for modern childcare,
                                 incorporating smart technology and innovative solutions to support parents and nannies in caring for young children.
                                </p>
                                <div className="social mt-2 mb-3">
                                    <i className="fa fa-facebook-official fa-lg" onClick={() => { window.location.replace("https://www.facebook.com/chamod1122/?_rdc=2&_rdr") }}></i>
                                    <i className="fa fa-instagram fa-lg" onClick={() => { window.location.replace("") }}></i>
                                    <i className="fa fa-twitter fa-lg" onClick={() => { window.location.replace("") }}></i>
                                    <i className="fa fa-linkedin-square fa-lg" onClick={() => { window.location.replace("https://www.linkedin.com/in/chamod-ishankha-425444260/") }}></i>
                                    <i className="fa fa-github" onClick={() => { window.location.replace("https://github.com/chamod-ishankha") }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2"></div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Team Members</h5>
                            <ul>
                                <li>Chamod Ishankha</li>
                                <li>Lakmini Pabasara</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Downloads</h5>
                            <ul className="card-text">
                                <li>Project Proposal</li>
                                <li>Project Charter</li>
                                <li>Log Book</li>
                                <li>Final Report</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Contact Us</h5>
                            <ul className="card-text">
                                <li>SLIIT</li>
                                <li>Malabe</li>
                                <li>Kaduwela</li>
                                <li>071 9748970</li>
                            </ul>
                        </div>
                    </div>
                    <div className="divider mb-4"> </div>
                    <div className="row" style={{ fontSize: "10px", textAlign: "center" }}>
                        <div>
                            Designed and Developed by Bytecub Team <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;