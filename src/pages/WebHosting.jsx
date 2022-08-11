import { FormControlLabel } from '@mui/material';
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import bgImage from "../images/bgimg.webp"
import './home.css'
import Switch from '@mui/material/Switch';
import pr1 from "../images/pr1.png";
import pr2 from "../images/pr2.png";
import pr3 from "../images/pr3.png";
import pr4 from "../images/pr4.png";
import premiumImage from "../images/pr5.jpg";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import au1 from "../images/au1.png";
import au2 from "../images/au2.png";
import au3 from "../images/au3.png";
import sp1 from "../images/sp1.png";
import sp2 from "../images/sp2.png";
import sp3 from "../images/sp3.png";
import sp4 from "../images/sp4.png";

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
    color: ${({theme})=>theme.myText};
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



export const WebHosting = () => {

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
                          <h2>Blazing Fast Web Hosting </h2>    
                                 <p>Choose a fine-tuned and secure Web Hosting Services solution!
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
                <Heading >Find the Hosting Plan that's Right for Your Business</Heading>
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

                <Heading>Starter</Heading>
                    <SubHeading>The plan is ideal to get started or who has basic website with minimal resource.

                    </SubHeading>
                    <CoponCode>Coupon: RarHostLove
                    </CoponCode> 
                    <PriceTable className=""> {yearly ? <p>TK2400/ <span className='text-14'>Yr</span></p> :

                    <p>TK245/ <span className='text-14'>mo</span></p>}
                    </PriceTable>
                    <CoponCode> {yearly ? <p> Annually</p> : <p>monthly</p> }</CoponCode>
                    <div className="regular-price d-flex c-border">
                    <p className="d-flex">Regular <span>{yearly ? <p className="text-overline"> TK3,000 /yr</p> : <p className="text-overline">TK327 /Mo</p>}</span></p>
                    <p className="discount-price ">
                        30%
                    </p>
                    </div>

                    <div className="package">
                        <PackageTitle> GET THE BASICS </PackageTitle>
                        <PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">5 
</strong>GB SSD Storage</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">250 
</strong> GB Bandwidth
</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">2 
</strong>Websites</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">FREE 
</strong> SSL Certificates
</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">LiteSpeed
</strong> with LSCache
</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">Website
</strong> Toolkit
</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">Advanced
</strong>  Features

</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">Security
</strong>  Shield

</PackageData>
                    </div>
                    <Link to="/" className="started-btn">Get Started</Link>
                    </Table>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                
                <Table>

                <Heading>Standard</Heading>
                    <SubHeading>The plan is ideal for small business owners or who want to host multiple websites.



                    </SubHeading>
                    <CoponCode>Coupon: RarHostLove
                    </CoponCode> 
                    <PriceTable className=""> {yearly ? <p>TK4,500/ <span className='text-14'>Yr</span></p> :

                    <p>TK489/ <span className='text-14'>mo</span></p>}
                    </PriceTable>
                    <CoponCode> {yearly ? <p> Annually</p> : <p>monthly</p> }</CoponCode>
                    <div className="regular-price d-flex c-border">
                    <p className="d-flex">Regular <span>{yearly ? <p className="text-overline"> TK6,000 /yr</p> : <p className="text-overline">TK652 /Mo</p>}</span></p>
                    <p className="discount-price ">
                        30%
                    </p>
                    </div>

                    <div className="package">
                        <PackageTitle> EVERYTHING IN STARTER, PLUS
 </PackageTitle>
                        <PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">10 
</strong>GB SSD Storage</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">500 
</strong> GB Bandwidth
</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">5 
</strong>Websites</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">FREE 
</strong> SSL Certificates
</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">LiteSpeed
</strong> with LSCache
</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">Website
</strong> Toolkit
</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">Advanced
</strong>  Features

</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">Security
</strong>  Shield

</PackageData>
                    </div>
                    <Link to="/" className="started-btn">Get Started</Link>
                    </Table>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                
                <Table>

                <Heading>Advanced</Heading>
                    <SubHeading>Ideal for moderate traffic and who is looking more power and enhanced performance.


                    </SubHeading>
                    <CoponCode>Coupon: RarHostLove
                    </CoponCode> 
                    <PriceTable className=""> {yearly ? <p>TK7,500/ <span className='text-14'>Yr</span></p> :

                    <p>TK796/ <span className='text-14'>mo</span></p>}
                    </PriceTable>
                    <CoponCode> {yearly ? <p> Annually</p> : <p>monthly</p> }</CoponCode>
                    <div className="regular-price d-flex c-border">
                    <p className="d-flex">Regular <span>{yearly ? <p className="text-overline"> TK10,000  /yr</p> : <p className="text-overline">TK1062 /Mo</p>}</span></p>
                    <p className="discount-price ">
                        30%
                    </p>
                    </div>

                    <div className="package">
                        <PackageTitle> GET THE BASICS </PackageTitle>
                        <PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">5 
</strong>GB SSD Storage</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">250 
</strong> GB Bandwidth
</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">2 
</strong>Websites</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">FREE 
</strong> SSL Certificates
</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">LiteSpeed
</strong> with LSCache
</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">Website
</strong> Toolkit
</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">Advanced
</strong>  Features

</PackageData>
<PackageData > <span><i class="fa-solid fa-check"></i></span>
                         <strong className="p-bold">Security
</strong>  Shield

</PackageData>
                    </div>
                    <Link to="/" className="started-btn">Get Started</Link>
                    </Table>
                </div>
              
            </div>
        </div>
    </TableSection>

 {/* end pricing table section */}

  {/* server  section */}

  <ServerSection>

  <div className="container">
    <div className="server">
    <div className="row">
        <div className="col-xl-4 col-lg-5 col-md-5">
            <div className="server-content">
                <Heading>CloudLinux <strong>Lightweight Virtual Environment (LVE)</strong>
</Heading>
        <SubHeading>The CloudLinux OS Lightweight Virtualized Environment is a kernel-level technology that isolates each tenant into their own environment and provides them with the amount of resources (CPU, IO, memory, processes, etc.) that can be used – specific to each individual customer

        </SubHeading>
            </div>
        </div>
        <div className="col-xl-8 col-lg-7 col-md-7">
        <table>
    <thead>
      <tr>
        <th> CloudLinux LVE Limits	 </th>
        <th> Starter</th>
        <th> Standard</th>
        <th> Advanced</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>  CPU Cores <Tooltip title="The max number of CPU cores allocated to each account.">
            <Button>
            <i class="fa-solid fa-gear"></i></Button>
</Tooltip>
 </th>
        <td> 1 CPU Core	 </td>
        <td> 1 CPU Core		 </td>
        <td>  2 CPU Core	 </td>
      </tr>
      <tr>
        <th> RAM 
        CPU Cores <Tooltip title="(RAM) is the actual memory allocated for your account.">
            <Button>
            <i class="fa-solid fa-gear"></i></Button>
</Tooltip>
             </th>
        <td> 700 MB	</td>
        <td> 1 GB </td>
        <td> 2 GB</td>
      </tr>
      <tr>
        <th> Disk I/O
            
        <Tooltip title="Any task which makes use of the servers disk drive (such as reading or writing to the server) will consume I/O.">
            <Button>
            <i class="fa-solid fa-gear"></i></Button>
</Tooltip>  </th>
        <td> 20 Mbps I/O	</td>
        <td> 20 Mbps I/O	 </td>
        <td>50 Mbps I/O</td>
      </tr>
      <tr>
        <th> Concurrent Connections 
        <Tooltip title="The max number of concurrent connections to Apache (Litespeed) and dynamic scripts such as SSH or cron jobs running simultaneously.">
            <Button>
            <i class="fa-solid fa-gear"></i></Button>
</Tooltip> 
             </th>
        <td> 20 EP	</td>
        <td> 20 EP	</td>
        <td> 50 EP	</td>
      </tr>
      <tr>
        <th> Max. Number Of Processes 
        <Tooltip title="The total number of active processes allowed on each account. These include all services such as Apache (Litespeed), PHP processes, SMTP/IMAP/Sendmail, Cronjobs etc.">
            <Button>
            <i class="fa-solid fa-gear"></i></Button>
</Tooltip> 
             </th>
        <td> 100 nPROC	 </td>
        <td> 100 nPROC	</td>
        <td> 100 nPROC </td>
      </tr>
    </tbody>
  </table>
        </div>
    </div>
    </div>
  </div>

  </ServerSection>
    {/* premium speed section */}
 {/* user area */}

 <User>
        <div className="container">
            <div className="row">
                <div className="col">
                <UserContent>Premium Speed. Guaranteed.

        </UserContent>
        <UserP className='mb-4'> Accelerate your website's loading time with our incredible technology stack.



                </UserP>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-7 col-lg-7 col-md-7">
                    <div className="content-img">
                        <img src={premiumImage} alt="" />
                    </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5">
                <div className="demo-content mb-3 d-flex ">
                    <div className="demo-img w-50">
                        <img src={pr1}className='' alt="" />
                    </div>
                    <div className="demo-content c-border ">
                        <Heading className='w-50'>LiteSpeed Web Server & LSCache</Heading>
                        <SubHeading>Web Hosting with LiteSpeed Web Server experience creates a captive audience of satisfied users and higher search engine rankings. Our Web Hosting blended with litespeed web server, PHP 7.4 for better Speed.



                    </SubHeading>
                    </div>
                </div>

                <div className="demo-content mb-3 d-flex ">
                    <div className="demo-img w-50">
                        <img src={pr2}className='' alt="" />
                    </div>
                    <div className="demo-content c-border ">
                        <Heading className='w-50'>Stable & Secure Cloud Technology

                </Heading>
                        <SubHeading>We use Cloudlinux for making the server secure, stable. It improves the server stability by encapsulating each client in a secure, isolated environment

                    </SubHeading>
                    </div>
                </div>
                <div className="demo-content mb-3 d-flex  ">
                    <div className="demo-img w-50 ">
                        <img src={pr3}className='' alt="" />
                    </div>
                    <div className="demo-content c-border">
                        <Heading className='w-50'>High Performance SSD Servers
                    </Heading>
                        <SubHeading>We use Enterprise SSD Storage for high performance. SSDs provide for a 1000x increase in input/output operations as compared to regular drives.

                    </SubHeading>
                    </div>
                </div>
                <div className="demo-content mb-3 d-flex ">
                    <div className="demo-img w-50">
                        <img src={pr4}className='' alt="" />
                    </div>
                    <div className="demo-content ">
                        <Heading className='w-50'>Quic-HTTP/3
                    </Heading>
                        <SubHeading>HTTP/3 with Quic reduces latency and speeds up website delivery due to improved parallelization.

                    </SubHeading>
                    </div>
                </div>

                </div>
            </div>

            
        </div>
    </User>      

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

        {/* powerful service :) */}

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
                        <img className=" " src={au1} alt="" />
                        <Heading className="text-left mb-3 mt-3">Script Installer
</Heading>
                        <SubHeading className="text-left p-1"> With our one click installer tool, you can create any type of website: blog, forum, ecommerce site, and so much more! No more thinking for databases,downloading and uploading script files on your own, and other technical work.

                </SubHeading>
                    </Box>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4">
                    <Box className="p-2">
                        <img className="" src={au2} alt="" />
                        <Heading className="text-left mb-3 mt-3"> Automated Backups</Heading>
                        <SubHeading className="text-left">No more manual backups, that's all taken care of automatically. And you're in full control of when your daily backups take place. Restore a clean version of your website – or recover a single file or folder – with just one click.

                </SubHeading>
                    </Box>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4">
                    <Box className="p-2">
                        <img className="" src={au3} alt="" />
                        <Heading className="text-left mb-3 mt-3"> Free Migration</Heading>
                        <SubHeading className="text-left">Transfer your website to us worry-free with the help of our migration experts. Or, enjoy free automated migrations with our easy-to-use Migration Tool. You can migrate your WordPress site by Just a click!

                </SubHeading>
                    </Box>
                </div>
            </div>
         
        </div>
    </Service>

    {/* make rar host */}

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
    </>
  )
}
