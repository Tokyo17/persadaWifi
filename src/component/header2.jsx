import "./style/header2.css"
import ImgHeader2 from "./images/header2.jpg"


const Header2=()=>{
    return(
        < >
        <div id="about" className="luar">
            <div className="bg-w">
            <div className="header2">
                <div  className="image2 ">
                <img alt="ilustrasi user wifi" data-aos="zoom-in-down" data-aos-once="true" src={ImgHeader2} />
                </div>
                <div data-aos="zoom-in-up" data-aos-once="true" className="text2">
                    <h1 className=" font-link">Segera Nikmati Kelancaran Berinternet-ria  Tanpa Terkendala</h1>
                    <p className=" scada">Segera datang ke kantor pusat atau bisa melalui nomer telepon
                     untuk segera menikmati layanan terbaik dari kami.</p>                    
                
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Header2


















