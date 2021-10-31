import React from 'react';
import "./About.css"
import whyimg from '../../images/tour-image-22-414x364.jpg';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={whyimg} className="img-fluid shadow-lg mb-4" alt="" />
                    </div>
                    <div className="col-md-6 pe-5">
                        <h6>WHY CHOSES US</h6>
                        <h1>Amazing Tours And Fun Adventures Waiting For You</h1>
                        <p>a traveling around from place to place. a long journey including the visiting of a number of places in sequence, especially with an organized group led by a guide. ... a journey from town to town to fulfill engagements, as by a theatrical company or an entertainer: to go on tour; a European concert tour.</p>
                        <div className="why-choose">
                            <div className="d-flex">
                                <i className="far fa-check-circle"></i>
                                <div>
                                    <h3>What is tour in tourism</h3>
                                    <p>A trip with visits to various places of interest for business, pleasure, or instruction.</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <i className="far fa-check-circle"></i>
                                <div>
                                    <h3>group organized </h3>
                                    <p>A group organized for such a trip or for a shorter sightseeing excursion.</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <i className="far fa-check-circle"></i>
                                <div>
                                    <h3> A journey to fulfill</h3>
                                    <p> A journey to fulfill a round of engagements in several places: a pianist on a concert tour.</p>
                                </div>
                            </div>
                            <Link to="/login"><button className="btn btn-primary px-5 py-3">All Tours</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;