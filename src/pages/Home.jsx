import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Nav from '../components/Nav'
import bgImage from "../images/bgimg.webp"
import serverImage from "../images/hostingserver.png"
import './home.css';
import iconOne from "../images/icon1.png";
import iconTwo from "../images/icon2.png";
import iconThree from "../images/icon3.png";
import iconFour from "../images/icon4.png";
import d1 from "../images/d1.png";
import d2 from "../images/d2.png";
import d3 from "../images/d3.png";
import d4 from "../images/4.png";
import d5 from "../images/d5.png";
import d6 from "../images/d6.png";
import cpanel from "../images/cpanel.png";
import c1 from "../images/c1.png";
import c2 from "../images/c2.png";
import c3 from "../images/c3.png";
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s3 from "../images/s3.png";
import sp1 from "../images/sp1.png";
import sp2 from "../images/sp2.png";
import sp3 from "../images/sp3.png";
import sp4 from "../images/sp4.png";
import sl1 from "../images/sl1.png";
import sl2 from "../images/sl2.png";
import sl3 from "../images/sl3.png";
import sl4 from "../images/sl4.png";
import sl5 from "../images/sl5.png";

const HomeArea = styled.div    `
background-color:${({theme})=>theme.bgLighter};
color:${({theme})=>theme.text};
padding: 120px 0;
position:relative;
`
const Pricing = styled.div `
padding:60px 0;
background:${({theme})=>theme.bgMain};
`
const Box = styled.div `
background:${({theme})=>theme.bgLighter};
text-align:center;
padding:0 25px 53px 25px;
border-radius:8px;


`
const Heading = styled.h2 `  
    color: ${({theme})=>theme.myText};
    font-size: 22px;
    font-weight: 500;

`

const SubHeading = styled.p`
    color: ${({theme})=>theme.myText};
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 25px;
`
const SubHeading2 = styled.p`
color: ${({theme})=>theme.textSoft};
margin-bottom: 25px;

`

const Price = styled.h4 `
color: ${({theme})=>theme.my};
font-weight:600;
font-size:22px;
margin-bottom:30px;

`
const Month = styled.span   `
color: ${({theme})=>theme.my};

`

// user section content of user


const User = styled.div `
background:${({theme})=>theme.bgMain};
color: ${({theme})=>theme.myText};
padding:60px 0;

`
const UserContent = styled.h2 `
font-size:35px ;
color: ${({theme})=>theme.myText };
text-align:center;

`
 const UserP = styled.p `
 font-size:18px ;
 color: ${({theme})=>theme.textSoft}};
 text-align:center;

 `
// Service section
const Service = styled.div `
 background: ${({theme})=>theme.bg};
 padding:120px 0;

`
// special section

const Special = styled.div `
background: ${({theme})=>theme.bgSpecial};
padding:120px 0;


`
const Slider = styled.div `
background:#fff;
padding:60px 0;


`


const Home = () => {
  return (
    <>
     {/* <Nav/> */}
     <HomeArea className="home-area" style={{  
  backgroundImage: `url(${bgImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

}}>
        <div className="container">
        <div className="row">
            <div className="col">
            <nav className="navbar navbar-expand-lg ">
  <div className="container">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hosting
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/web-hosting">Web Hosting</Link>
            <p>Next Level SSD Hosting</p>
            </li>
            <li><Link className="dropdown-item" to="#">Reseller Hosting</Link>
            <p>Starter Selling Today</p>
            </li>
            
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Server
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Virtual Server</Link>
            <p>Next-Gen VPS Hosting</p>
            </li>
            <li><Link className="dropdown-item" to="#">Dedicated Server</Link>
            <p>Gain maximum power and control</p>
            </li>
            
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Domain</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Email Hosting</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">SSL Certificate</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
            </div>
        </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6">
                    <div className="-home-top-content">
                        <h2>Next Level SSD Hosting Solutions!
                            </h2>           <p>Experience the next level SSD hosting which built for speed! We utilize solid-state drives(SSD) for our all hosting plans. For Enhanced performance we use <strong> LiteSpeed Web Server, HTTP/2, PHP7. </strong> We make your website faster, which will help you to increase search ranking!

                            </p>
                            <div className="content-btn-area">
                                <button className='btn first'><Link to="/"> Get started</Link> </button>
                                <button className='btn second' ><Link to="/"> Compare Plans</Link> </button>
                            </div>
    
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="server-img">
                        <img src={serverImage} alt="Server image"/>
                    </div>
                </div>
            </div>
                 {/* domain name section */}

           <div className="row">
            <div className="col"> 
            
            
 <form id="search-domain" action="#" method="get">

<div className="search mt-5  ">
<span className="home-domain-name d-inline-block">www.</span>
<input type="text" name="domain_name " className="home-domain-input form-control me-2" placeholder="Type your domain..." required/>
<select className="form-select d-inline-block select" aria-label="Default select example">
    <option data-display="All" selected>All</option>
    <option value="1">.com</option>
        <option value="2">.in</option>
        <option value="3">.co.in</option>
        <option value="4">.xyz</option>
        <option value="5">.me</option>
        <option value="6">.org</option>
        <option value="7">.top</option>
        <option value="8">.net</option>
        <option value="9">.info</option>
    </select>
    <button type="submit" className= "btn  home-domain-submit" value=""> <i className="fa-solid fa-magnifying-glass"></i></button>
</div>

</form>
            <div className="domain-price-list">
                <div className="row">
               
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6">
                        <div className="domain-list">
                            <img src={d1} alt="" />
                            <p>Only TK799.00</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6">
                        <div className="domain-list">
                            <img src={d2} alt="" />
                            <p>Only TK119.00</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6">
                        <div className="domain-list">
                            <img src={d3} alt="" />
                            <p>Only TK1800.00</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6">
                        <div className="domain-list">
                            <img src={d4} alt="" />
                            <p>Only TK1200.00</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6">
                        <div className="domain-list">
                            <img src={d5} alt="" />
                            <p>Only TK999.00</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6">
                        <div className="domain-list">
                            <img src={d6} alt="" />
                            <p>Only TK1000.00</p>
                        </div>
                    </div>
                   
                </div>
            </div>
            </div>
           </div>
        </div>
     </HomeArea>


     
     <Pricing >

        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <Box>
                        <img src={iconOne} alt="" />
                        <Heading> Web Hosting</Heading>
                        <SubHeading> Ideal to get started and go on to a more advanced hosting package.</SubHeading>
                        <SubHeading2> Starting at </SubHeading2>

                            <Price>
                            $3.99/ <Month>mo</Month>
 
                            </Price>
                            <button className='btn price-btn'><Link to="/"> Get started</Link> </button>
                    </Box>
                </div>



         <div className="col-xl-3 col-lg-4 col-md-6">
                    <Box>
                        <img src={iconTwo} alt="" />
                        <Heading>Reseller Hosting
</Heading>
                        <SubHeading> Ideal for web master or who want to start web hosting business without any hassle.</SubHeading>
                        <SubHeading2> Starting at </SubHeading2>

                            <Price>
                            $21.34/
<Month>mo</Month>
 
                            </Price>
                            <button className='btn price-btn'><Link to="/"> Get started</Link> </button>
                    </Box>
                </div>


            
            <div className="col-xl-3 col-lg-4 col-md-6">
                    <Box>
                        <img src={iconThree} alt="" />
                        <Heading> Virtual Servers</Heading>
                        <SubHeading> Get started with a VPS or enjoy the flexibility of our SSD VPS solutions.</SubHeading>
                        <SubHeading2> Starting at </SubHeading2>

                            <Price>
                            $27.95/ <Month>mo</Month>
 
                            </Price>
                            <button className='btn price-btn'><Link to="/"> Get started</Link> </button>
                    </Box>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <Box>
                        <img src={iconFour} alt="" />
                        <Heading> Dedicated Servers</Heading>
                        <SubHeading> Get started with a VPS or enjoy the flexibility of our SSD VPS solutions.

</SubHeading>
                        <SubHeading2> Starting at </SubHeading2>

                            <Price>
                            $169.00 <Month>mo</Month>
 
                            </Price>
                            <button className='btn price-btn'><Link to="/"> Get started</Link> </button>
                    </Box>
                </div>
            </div>
        </div>
     </Pricing>

     {/* user area */}

    <User>
        <div className="container">
            <div className="row">
                <div className="col">
                <UserContent> User Friendly Control Panel
        </UserContent>
        <UserP className='mb-4'> Intuitive and easy to use, cPanel help you to manage a web hosting account with maximum efficiency.

                </UserP>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-7 col-lg-7 col-md-7">
                    <div className="content-img">
                        <img src={cpanel} alt="" />
                    </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5">
                <div className="demo-content mb-3 d-flex ">
                    <div className="demo-img w-50">
                        <img src={c1}className='' alt="" />
                    </div>
                    <div className="demo-content c-border ">
                        <Heading className='w-50'>One-Click Deploy</Heading>
                        <SubHeading>With our one click installer tool, available on every Web Hosting plan, you can create any type of website: blog, forum, CMS, wiki, photo gallery, E-commerce store, and so much more!

                    </SubHeading>
                    </div>
                </div>

                <div className="demo-content mb-3 d-flex ">
                    <div className="demo-img w-50">
                        <img src={c2}className='' alt="" />
                    </div>
                    <div className="demo-content c-border ">
                        <Heading className='w-50'>Terminal Access
                </Heading>
                        <SubHeading>The Terminal interface allows you to access an in-browser terminal application for direct command-line access within a cPanel.

!

                    </SubHeading>
                    </div>
                </div>
                <div className="demo-content mb-3 d-flex ">
                    <div className="demo-img w-50">
                        <img src={c3}className='' alt="" />
                    </div>
                    <div className="demo-content ">
                        <Heading className='w-50'>Easy management
                    </Heading>
                        <SubHeading>RarHost Panel is extremely user-friendly and can be used by those with little experience in website development.
                    </SubHeading>
                    </div>
                </div>

                </div>
            </div>

            
        </div>
    </User>

    {/* service section */}

    <Service>
        <div className="container">
        <div className="row">
                <div className="col">
                <UserContent> Powerful Web Hosting Solution  </UserContent>
        <UserP className='mb-4'> Our clients love us because we listen to their needs.   </UserP>
                </div>
            </div>
            <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
                    <Box className="p-2">
                        <img className="iconimg " src={s3} alt="" />
                        <Heading className="text-left mb-3 mt-3"> High Performance SSD Servers</Heading>
                        <SubHeading className="text-left p-1"> We use only top of the line server hardware, and this reflects in the quality service that we provide. We are using Enterprise NVMe SSD hard drives in a Raid array to give your site that extra speed boost!

                </SubHeading>
                    </Box>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4">
                    <Box className="p-2">
                        <img className="iconimg" src={s2} alt="" />
                        <Heading className="text-left mb-3 mt-3"> LiteSpeed Web Server</Heading>
                        <SubHeading className="text-left">Speed matters! Web Hosting with LiteSpeed Web Server experience creates a captive audience of satisfied users and higher search engine rankings. Our Web Hosting blended with litespeed web server, PHP 7.4 for better Speed.



                </SubHeading>
                    </Box>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4">
                    <Box className="p-2">
                        <img className="iconimg" src={s1} alt="" />
                        <Heading className="text-left mb-3 mt-3"> Rock-Solid Security</Heading>
                        <SubHeading className="text-left">Protect your site against constant threats we are using custom web application firewall rules. Combined with real-time 24/7 server monitoring, we can stop the majority of web application attacks even before they start.



                </SubHeading>
                    </Box>
                </div>
            </div>
         
        </div>
    </Service>

    {/* Special Of Rarhost */}

    

    <Special>
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <Heading>What Makes RarHost Special?</Heading>
                    <SubHeading>We Have the Features & Service You Deserve!

</SubHeading>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="special d-flex justify-content-center align-content-center">
                        <div className="special-img w-38 mr-2">
                            <img src={sp2} alt="" />
                        </div>
                        <div className="special-content w-58 ml-3">
                            <Heading className='mb-3'> 30 Days Money-back gurarantee</Heading>
                            <SubHeading>We have 30 Days moneyback guarantee, so you can try our service without any risk. We'll refund you if you're not satisfied.

</SubHeading>

                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="special d-flex justify-content-center align-content-center">
                        <div className="special-img w-38 mr-2">
                            <img src={sp3} alt="" />
                        </div>
                        <div className="special-content w-58 ml-3">
                            <Heading className='mb-3'> Free 24/7 Professional Support</Heading>
                            <SubHeading>Our customer support is 24x7x365. With your hosting package you also gain 24x7 accesses to our expert support team.

</SubHeading>

                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="special d-flex justify-content-center align-content-center">
                        <div className="special-img w-38 mr-2">
                            <img src={sp4} alt="" />
                        </div>
                        <div className="special-content w-58 ml-3">
                            <Heading className='mb-3'>Free SSL Certificate</Heading>
                            <SubHeading>We are offering Unlimited SSL for Free. Easy to install/auto-renewed Let's Encrypt SSL certificates can help secure your websites.


</SubHeading>

                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="special d-flex justify-content-center align-content-center">
                        <div className="special-img w-38 mr-2">
                            <img src={sp1} alt="" />
                        </div>
                        <div className="special-content w-58 ml-3">
                            <Heading className='mb-3'> 99.9% Uptime Guarantee</Heading>
                            <SubHeading>We understand the uptime importance. We pledge to deliver in excess of 99.9% uptime, each and every month.

</SubHeading>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Special>

    <section class="testimonial_section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                       <div class="about_content">
                            <div class="background_layer"></div>
                            <div class="layer_content">
                                <div class="section_title">
                                    <h5>CUSTOMERS</h5>
                                    <h2>Happy with <strong className='text-primary'> 10000+  </strong>Customers</h2>
                                    <div class="heading_line"><span></span></div>
                                    <p>We hosted more than 10000 happy customers. Small website to high traffic website customers.
</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="testimonial_box">
                            <div class="testimonial_container">
                                <div class="background_layer"></div>
                                <div class="layer_content">
                                    <div class="testimonial_owlCarousel owl-carousel">
                                        <div class="testimonials"> 
                                            <div class="testimonial_content">
                                                <div class="testimonial_caption">
                                                    <h6>Robert </h6>
                                                    <span>CEO, Axura</span>
                                                </div>
                                                <p>I am using RarHost since 2017. I am fully satisfied. The service is really good. Specially support is awesome of RarHost. Highly recommended. </p>
                                            </div>
                                            <div class="images_box">
                                                <div class="testimonial_img">
                                                    <img class="img-center" src="https://cdn.pixabay.com/photo/2017/08/30/17/27/business-woman-2697954_960_720.jpg" alt="images not found"/>
                                                </div>
                                            </div>
                                        </div>
                                      
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Slider>
            <div className="container">
                <div className="row">
                    <div className="col-xl-1 col-lg-3 col-md-4 col-sm-6">
                        <div className="slider-img">
                            <img src={sl1} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="slider-img">
                            <img src={sl2} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="slider-img">
                            <img src={sl4} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="slider-img">
                            <img src={sl3} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                        <div className="slider-img">
                            <img src={sl5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Slider>

    </>
    
  )
}

export default Home