import "./style/nav.css"
import "./style/header.css"
import ImgHeader from "./images/header.jpeg"
import logo from "./images/logo.png"
import Card from "./Card.jsx"
import Header2 from "./header2"
import Contact from "./Contact"
import Footer from "./Footer"
import ScrollSpy from "react-ui-scrollspy";
import TypeAnimation from 'react-type-animation';

const Home=()=>{
    const Produk=()=>{
        document.getElementById("produk").scrollIntoView(true);
      }
     const Kontak=()=>{
        document.getElementById("contact").scrollIntoView(true);
      }

    return(
        
        <div >

            <nav className="copy-disabled sticky-top shadow-basic navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img alt="logo " src={logo}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <a data-to-scrollspy-id="home" className="nav-link " aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a data-to-scrollspy-id="produk" onClick={Produk} className="nav-link" >Product</a>
                    </li>
                    <li className=" nav-item">
                    <a data-to-scrollspy-id="about" className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                    <a data-to-scrollspy-id="contact" onClick={Kontak} className="nav-link" >Contact</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        {/* ================[HEADER]=================== */}
        <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
        <div id="home" className="bg">
            <div className="bg-w">
            <div className="header">
                <div data-aos="zoom-out-down" data-aos-once="true"  className="text ">
                    <h1 className="font-link">Cepat & Stabil Bebas Browsing  Tanpa Pusing</h1>
                    <p className="scada">Persada Wifi memberikan anda pengalaman  berselancar menggunakan internet dengan nyaman</p>
                   <div onClick={Produk} className="button">
                     <h5 className="copy-disabled">Read More</h5>
                   </div>                   
                </div>
                <div className="image">
                    <img alt="logo persada wifi" data-aos="zoom-in-down"  data-aos-once="true" src={ImgHeader} />
                </div>
            </div>
            </div>

            
        </div>
   
            <Card />
            
            <Header2/>
            <Contact/>
          
            </ScrollSpy>
         <Footer/>
        


        </div>
    )
}

export default Home


















