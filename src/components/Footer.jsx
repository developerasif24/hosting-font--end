import React from 'react'
import styled from 'styled-components';
import './footer.css';
import support_man from "../images/supportman.png"
import { Link } from 'react-router-dom';
import submit from "../images/submit.png";
import payment from "../images/payment.png";

const CallUs = styled.div `
background:${({theme})=>theme.bgY};

`

const Heading = styled.h2 `  
    color: #fff;
    font-size: 28px;
    font-weight: 500;

`

const SubHeading = styled.p`
    color: #fff;
    font-size: 17px;
    line-height: 22px;
    margin-bottom: 25px;
`

export const Footer = () => {
  return (
    <>
    <CallUs>
        <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-7 col-md-7">
                    <div className="call-heading mt-5">
                        <Heading className="mb-4">Not sure where to Start?</Heading>
                        <SubHeading>Talk to one of our hosting specialist who will review your needs and propose a tailored hosting solution that will match your specific business reality and needs.</SubHeading>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-5">
                    <div className="support_man">
                        <img src={support_man} alt="support_man" />
                    </div>
                </div>
            </div>
        </div>
    </CallUs>
    
    {/* main footer */}
    <footer className="main-footer">
        <div className="container">
            <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-4">
                    <div className="footer-content">
                        <h2>Hosting</h2> 


                        <Link to="#" className='footer-link'>Web Hosting</Link>
                        <Link to="#" className='footer-link'>Turbo Hosting</Link>
                        <Link to="#" className='footer-link'>Reseller Hosting</Link>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4">
                    <div className="footer-content">
                        <h2>Server</h2>  

                        <Link to="#" className='footer-link'>Virtual Server</Link>
                        <Link to="#" className='footer-link'>BDIX Dedicated</Link>
                        <Link to="#" className='footer-link'>Dedicated Server</Link>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4">
                    <div className="footer-content">
                        <h2>Domain</h2> 
                       


                        <Link to="#" className='footer-link'> Domain Registration</Link>
                        <Link to="#" className='footer-link'>Domain Transfer</Link>
                        <Link to="#" className='footer-link'>Reseller Hosting</Link>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4">
                    <div className="footer-content">
                        <h2>Email Hosting</h2> 
                       


                        <Link to="#" className='footer-link'> Business Email</Link>
                        <Link to="#" className='footer-link'>G-Suite</Link>
                        <Link to="#" className='footer-link'>Reseller Hosting</Link>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4">
                    <div className="footer-content">
                        <h2>Company</h2> 
                        




                        <Link to="#" className='footer-link'>About US</Link>
                        <Link to="#" className='footer-link'>Our Datacenters</Link>
                        <Link to="#" className='footer-link'>Our Blog</Link>
                        <Link to="#" className='footer-link'>Contact US</Link>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4">
                    <div className="footer-content">
                        <h2>Help</h2> 

                        



                        <Link to="#" className='footer-link'>Knowledgebase</Link>
                        <Link to="#" className='footer-link'>Service Status</Link>
                        <Link to="#" className='footer-link'>Support Center</Link>
                        <Link to="#" className='footer-link'>Bank Payment Details</Link>
                    </div>
                </div>
                <hr/>
            </div>

            <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4">
                    <div className="footer-content">
                        <h2>Our Address</h2> 
                        <p>Purple IT Ltd
                            House 452 (4th Floor), Road 31,
                            New DOHS Mohakhali
                            Dhaka - 1206, Bangladesh</p>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4">
                    <div className="footer-content">
                        <h2>Payment Options</h2> 
                        <img src={payment} alt="payment option" />
                    </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-4">
                    <div className="footer-content">
                        <h2>Subscribe Newsletter</h2> 
                        <p>Subscribe for new offers and updates.</p>
                        <div class="footer-newsletter">
                                            <input type="text" class="footer-newsletter-input"
                                                   placeholder="enter your email...."/>
                                            <input type="submit" style={{ background: `url(${submit}) no-repeat center center #40bc3d`,
                                            width: '42px',
                                            height: '42px',
                                            display: 'block',
                                            border: 'none',
                                            position: 'absolute',
                                            right: '0px',
                                            top: '0px',
                                            }} class="footer-newsletter-submit" value=""/>
                                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4">
                    <div className="footer-content">
                        <h2>Connect with</h2> 
                        <p>To get updates follow us on Facebook, Twitters etc.</p>
                        <ul class="footer-social">
                                            <li><a href="#"><span class="icon-icon-10"><i class="fa-brands fa-facebook-f"></i></span></a>
                                            </li>
                                            <li><a href="#"><span
                                                    class="icon-icon-11"><i class="fa-brands fa-twitter"></i></span></a></li>
                                            <li><a href="#"><span class="icon-icon-12">
                                            <i class="fa-brands fa-linkedin-in"></i></span></a></li>
                                            <li><a href="#"><span class="icon-icon-13"><i class="fa-brands fa-instagram"></i></span></a></li>
                                            <li><a href="#"><span class="icon-icon-14"><i class="fa-brands fa-youtube"></i></span></a></li>
                                        </ul>
                    </div>
                </div>
                
            </div>
           
            
        </div>
    </footer>
    <section className="copyright">
        <div className="container">
        <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="footer-content text-left">
                        <p>© 2022 RarHost. All rights reserved.

</p>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="footer-content text-right">
                        <p className="text-center"><a href="#" className="footer-link d-inline-block ">Terms of Service</a> | Privacy Policy

</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}
