import contactImg from "./images/contact.png"
import address from "./images/address.png"
import wave from "./images/wave.svg"
import "./style/contact.css"

const Contact =()=>{
    return(
        <>
            <div id="contact" className="flex">
                <div className="address">
                    <div data-aos="zoom-in-down" data-aos-once="true" className="bingkai">
                    <img alt="gambar address" src={address}/>
                    <h4>PT. Persada Data Multimedia</h4>
                    <p className="scada">Jl Raya Laren No. 1 Laren Lamongan</p>
                    </div> 
                </div>
                <div data-aos="zoom-in-down" data-aos-once="true" className="contact">
                    <a href="https://wa.me/6281249919175" target="_blank">
                    <img alt="gambar contact"  data-aos-once="true" src={contactImg} />
                    </a>
                    <p>Clcik Here</p>
                </div>
            </div>

             {/* <div className="flex-center">
                 <div className="footer"></div>
             </div> */}
             <div className="bawah">
                
             </div>
        </>
        
    )
}
export default Contact