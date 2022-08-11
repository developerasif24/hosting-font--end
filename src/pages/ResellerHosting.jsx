import { FormControlLabel } from '@mui/material';
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import bgImage from "../images/bgimg.webp"
import './home.css'
import Switch from '@mui/material/Switch';
import premiumImage from "../images/pr5.jpg";
import server1 from "../images/server1.png";
import server2 from "../images/server2.png";
import server3 from "../images/server3.png";

const HomeArea = styled.div    `
background-color:${({theme})=>theme.bgLighter};
color:${({theme})=>theme.text};
padding: 120px 0;
position:relative;
`

const Heading = styled.h2 `  
    color: ${({theme})=>theme.myText};
    font-size: 22px;
    font-weight: 500;

`

const SubHeading = styled.p`
    color: ${({theme})=>theme.textSoft};
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 25px;
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
 text-align:center;`

 const CoponCode = styled.h4 `
 font-size:14px;
 color: ${({theme})=>theme.my};
 `
const PriceTable = styled.h1 `
font-size:40px;
font-weight:600;
color: ${({theme})=>theme.price};
`
const Table = styled.div   `

background: ${({theme})=>theme.bg};
padding:20px 15px;
box-shadow: 3px 4px 10px #ddd;
border-radius:10px;
`
const PackageTitle = styled.h2 `
color: ${({theme})=>theme.title};
margin-top:15px;
 font-size:20px;
 font-weight:400;
 margin-bottom:20px;
 text-transform:uppercase;
`
const PackageData = styled.p `
color: ${({theme})=>theme.textSoft};
font-size:15px;
font-weight:400;
border-bottom:1px solid #dcddde;
`

const TableSection = styled.div `
padding:120px 0;
background:${({theme})=>theme.bgMain};
`
const ServerSection = styled.div   `
padding:120px 0;
background:${({theme})=>theme.bgMain};

`
const AdvancedTable = styled.div   `
background: ${({theme})=>theme.bgc};
padding:20px 0px;
border-radius:10px;
`
const AdvancedSection = styled.div`
background: ${({theme})=>theme.bgc};
padding: 120px 0;
`
const Box = styled.div `
background:${({theme})=>theme.bg};
text-align:center;
padding:0 25px 53px 25px;
border-radius:8px;

`
// Service section
const Service = styled.div `
 background: ${({theme})=>theme.bg};
 padding:120px 0;

`
const Special = styled.div `
background: ${({theme})=>theme.bgSpecial};
padding:120px 0;


`



export const ResellerHosting = () => {

    const [yearly,setYearly] = useState(false)
console.log("yearly"+yearly)
    
  return (
    <>
    
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
              <li><Link className="dropdown-item" to="/reseller-hosting">Reseller Hosting</Link>
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
                  <div className="col">
                      <div className="-home-top-content text-center">
                          <h2>Reseller Web Hosting </h2>    
                                 <p>Plans are designed for you to make money!
                              </p>
                              
      
                      </div>
                  </div>

              </div>
             
  
        
          </div>
       </HomeArea>

       {/* start pricing table section */}

    <TableSection className="price-table">
        <div className="container">
            <div className="row">
                <div className="col text-center mb-5">
                <Heading >Find the Reseller Hosting Plan that's Right for Your Business</Heading>
                    <SubHeading>We Have the Features and Service You Deserve!.</SubHeading>
                <div className="switch d-flex justify-content-center align-items-center">
                   
                    <div className="monthly ml-2">
                        <PackageTitle>Monthly</PackageTitle>
                    </div>
                    <div className="toggle-y">
                    <FormControlLabel onClick={()=>setYearly(!yearly)} control={<Switch  />} label="" />
                    </div>
                    <div className="yearly">
                        <PackageTitle>Yearly</PackageTitle>
                    </div>
                </div>


              
                </div>
            </div>

            {/* package table */}

            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4">
                
                <Table>

                <Heading>R-Starter</Heading>
                  

                  
                    <PriceTable className=""> {yearly ? <p>TK 19,750 <span className='text-14'></span></p> :

                    <p>TK 1750 <span className='text-14'></span></p>}
                    </PriceTable>
                    <CoponCode> {yearly ? <p> Per Annually</p> : <p>Per Month</p> }</CoponCode>
                    <div className="c-border ">
                    
                    </div>

                    <div className="package">
                       
                        <PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">20 
</strong>GB SSD Storage</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">500 
</strong> GB Bandwidth
</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">25 
</strong>cPanel Account</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">1 
</strong>  GB RAM Per cPanel

</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">1
</strong>  Core CPU Per cPanel

</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">20
</strong>  Entry Process Per cPanel

</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">Whitelabel
</strong>   Reseller


</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">Private
</strong>   Name Servers


</PackageData>
                    </div>
                    <Link to="/" className="started-btn">Get Started</Link>
                    </Table>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                
                <Table>

                <Heading>R-Standard </Heading>
                  

                  
                    <PriceTable className=""> {yearly ? <p>TK 30,950 <span className='text-14'></span></p> :

                    <p>TK 2750  <span className='text-14'></span></p>}
                    </PriceTable>
                    <CoponCode> {yearly ? <p> Annually</p> : <p> per month</p> }</CoponCode>
                    <div className="c-border ">
                    
                    </div>

                    <div className="package">
                       
                        <PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">50 
</strong>GB SSD Storage</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">1000 
</strong> GB Bandwidth
</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">50 
</strong>cPanel Account</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">1 
</strong>  GB RAM Per cPanel

</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">1
</strong>  Core CPU Per cPanel

</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">20
</strong>  Entry Process Per cPanel

</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">Whitelabel
</strong>   Reseller


</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">Private
</strong>   Name Servers


</PackageData>
                    </div>
                    <Link to="/" className="started-btn">Get Started</Link>
                    </Table>
                </div>


                <div className="col-xl-4 col-lg-4 col-md-4">
                
                <Table>

                <Heading>R-Advanced</Heading>
                  

                  
                    <PriceTable className=""> {yearly ? <p>TK 57,380<span className='text-14'></span></p> :

                    <p>TK 5100  <span className='text-14'></span></p>}
                    </PriceTable>
                    <CoponCode> {yearly ? <p> Annually</p> : <p>per month</p> }</CoponCode>
                    <div className="c-border ">
                    
                    </div>

                    <div className="package">
                       
                        <PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">100 
</strong>GB SSD Storage</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">2000 
</strong> GB Bandwidth
</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">100 
</strong>cPanel Account</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">1 
</strong>  GB RAM Per cPanel

</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">1
</strong>  Core CPU Per cPanel

</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">20
</strong>  Entry Process Per cPanel

</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">Whitelabel
</strong>   Reseller


</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">Private
</strong>   Name Servers


</PackageData>
                    </div>
                    <Link to="/" className="started-btn">Get Started</Link>
                    </Table>
                </div>
              
            </div>
        </div>
    </TableSection>

 {/* end pricing table section */}

 
  
    

    {/* Advanced Features
*/}

        <AdvancedSection className="advanced">
            <div className="container">
                <div className="row">
                    <div className="col text-center mb-5">
                    
                        <div className="server-content">
                        <Heading>Advanced Features</Heading>
            </div>
                    </div>
                </div>
               <div className="row-bg">
               <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6">
                            
  <AdvancedTable>



    <div className="package">
       
        <PackageData > <span><i class="fa-solid fa-check"></i></span>
         <strong className="p-bold">30 
</strong> Day Money Back Guarantee

</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
         <strong className="p-bold"> 99.9%  
</strong>Server Uptime Guarantee


</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
         <strong className="p-bold">1 
</strong> Hour Response Time

</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
         <strong className="p-bold">24/7 
</strong>  Technical Support


</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
         <strong className="p-bold">Clustered
</strong>   Failover DNS




</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
         <strong className="p-bold">Unlimited
</strong>  MySQL Databases


</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
         <strong className="p-bold">Unlimited
</strong>   FTP Accounts



</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
         <strong className="p-bold">Unlimited
</strong>   E-Mail Accounts



</PackageData>
    </div>
    
    </AdvancedTable>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                            
      <AdvancedTable>
            
            
            
                <div className="package">
                   
                    <PackageData > <span><i class="fa-solid fa-check"></i></span>
                     <strong className="p-bold">Softaculous 
            </strong>  Script Installer


            
            </PackageData>
            <PackageData > <span><i class="fa-solid fa-check"></i></span>
                     <strong className="p-bold"> Malware
            </strong> & Exploit Scanning


            
            
            </PackageData>
            <PackageData > <span><i class="fa-solid fa-check"></i></span>
                     <strong className="p-bold">CloudFlare 
            </strong>  CDN


            
            </PackageData>
            <PackageData > <span><i class="fa-solid fa-check"></i></span>
                     <strong className="p-bold">Unlimited
            </strong>   Sub Domains


            
            
            </PackageData>
            <PackageData > <span><i class="fa-solid fa-check"></i></span>
                     <strong className="p-bold">Ruby
            </strong>   On Rails


            
            
            
            
            </PackageData>
            <PackageData > <span><i class="fa-solid fa-check"></i></span>
                     <strong className="p-bold">FREE
            </strong>  Let's Encrypt SSL Certs


            
            
            </PackageData>
            <PackageData > <span><i class="fa-solid fa-check"></i></span>
                     <strong className="p-bold">FREE
            </strong>    cPanel Migration


            
            
            
            </PackageData>
            <PackageData > <span><i class="fa-solid fa-check"></i></span>
                     <strong className="p-bold">Mariadb
            </strong>   10.x / phpMyAdmin

   
            
            </PackageData>
                </div>
                
                </AdvancedTable>
                                </div>


                                <div className="col-xl-3 col-lg-3 col-md-6">
                            
     <AdvancedTable>
            
            
            
                <div className="package">
                   
                    <PackageData > <span><i class="fa-solid fa-check"></i></span>
                     <strong className="p-bold">20 
            </strong> GBPS DDoS Protection


            
            </PackageData>
            <PackageData > <span><i class="fa-solid fa-check"></i></span>
                     <strong className="p-bold"> Unlimited
            </strong> Auto Responders


            
            
            </PackageData>
            <PackageData > <span><i class="fa-solid fa-check"></i></span>
                     <strong className="p-bold">Spam 
            </strong>  Protection


            
            </PackageData>
            <PackageData > <span><i class="fa-solid fa-check"></i></span>
                     <strong className="p-bold">SSH
            </strong>   Access Available


            
            
            </PackageData>
            <PackageData > <span><i class="fa-solid fa-check"></i></span>
                     <strong className="p-bold">Node.js 
            </strong>   Version Selector


            
            
            
            
            </PackageData>
            <PackageData > <span><i class="fa-solid fa-check"></i></span>
                     <strong className="p-bold">ionCube
            </strong>   PHP Loader


            
            
            </PackageData>
            <PackageData > <span><i class="fa-solid fa-check"></i></span>
                     <strong className="p-bold">Awstats
            </strong>   & Webalizer


            
            
            
            </PackageData>
            <PackageData > <span><i class="fa-solid fa-check"></i></span>
                     <strong className="p-bold">Zend
            </strong>   Guard Loader


            
            
            
            </PackageData>
                </div>
                
                </AdvancedTable>
                                </div>

                                <div className="col-xl-3 col-lg-3 col-md-6">
                            
      <AdvancedTable>
            
            
            
                <div className="package">
                   
                    <PackageData > <span><i class="fa-solid fa-check"></i></span>
                     <strong className="p-bold">Server 
            </strong>  Side Includes


            
            </PackageData>
            <PackageData > <span><i class="fa-solid fa-check"></i></span>
                     <strong className="p-bold"> Curl
            </strong> / GD2 / ImageMagick


            
            
            </PackageData>
            <PackageData > <span><i class="fa-solid fa-check"></i></span>
                     <strong className="p-bold">PHP 
            </strong>  Selector (5.4 - 7.x)


            
            </PackageData>
            <PackageData > <span><i class="fa-solid fa-check"></i></span>
                     <strong className="p-bold">Python
            </strong>  Version Selector


            
            
            </PackageData>
            <PackageData > <span><i class="fa-solid fa-check"></i></span>
                     <strong className="p-bold">CloudLinux
            </strong>    / CageFS


            
            
            
            
            </PackageData>
            <PackageData > <span><i class="fa-solid fa-check"></i></span>
                     <strong className="p-bold">LitesSpeed
            </strong>   Web Server


            
            
            </PackageData>
            <PackageData > <span><i class="fa-solid fa-check"></i></span>
                     <strong className="p-bold">Latest
            </strong>    cPanel


            
            
            
            </PackageData>
            
                </div>
                
                </AdvancedTable>
                                </div>
                </div>
               </div>
            </div>
        </AdvancedSection>

           {/* premium speed section */}
 {/* user area */}

 <User>
        <div className="container">
            
            <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-5">
                    <div className="content-img">
                        <img src={server1} alt="" />
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7">
                <div className="demo-content  mt-5">
                        <Heading className='w-50 pt-5'>Free cPanel/WHM

                    </Heading>
                        <SubHeading>cPanel is one of the leading control panels in the web hosting industry. Take control of your ssd reseller account with this feature-packed and user-friendly control panel. You can create, modify and terminate customer account from Web Host Manager. You don't need to worry about managing your customer hosting account.

                    </SubHeading>
                    </div>
                </div>
               

                
                
               

               
            </div>

            
        </div>
    </User>   
    <User>
        <div className="container">
            
            <div className="row">
                
                <div className="col-xl-7 col-lg-7 col-md-7">
                <div className="demo-content  mt-5">
                        <Heading className='w-50 pt-5'>Stable & Secure Cloud Technology


                    </Heading>
                        <SubHeading>One of the leading Platform for hosting industry with isolated data, dedicated resources and stable environment. CloudLinux improves the server stability by encapsulating each client in a secure, isolated environment. Additionally, CloudLinux includes CageFS - a virtualized file system, a set of tools to contain each user in its own 'cage'. Each customer has its own fully functional CageFS.



                    </SubHeading>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5">
                    <div className="content-img">
                        <img src={server2} alt="" />
                    </div>
                </div>
               

                
                
               

               
            </div>

            
        </div>
    </User>   


        <User>
        <div className="container">
            
            <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-5">
                    <div className="content-img">
                        <img src={server3} alt="" />
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7">
                <div className="demo-content  mt-5">
                        <Heading className='w-50 pt-5'>True 24/7/365 Support


                    </Heading>
                        <SubHeading>You take care of your business and we'll take care of all things server-related. We monitor our services 24/7/365 to make sure everything's running perfectly well. Should you have any concerns, we're always just a support ticket away -- and it doesn't matter whether it's a weekend or a holiday.



                    </SubHeading>
                    </div>
                </div>
               

                
                
               

               
            </div>

            
        </div>
    </User>   
    </>
  )
}
