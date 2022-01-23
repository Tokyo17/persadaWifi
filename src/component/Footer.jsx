import contactImg from "./images/contact.png"
import address from "./images/address.png"
import "./style/footer.css"
import TypeAnimation from 'react-type-animation';


const Footer =()=>{
    return(
        <>
        <div className="d-flex justify-content-center">
            <div className="footer font-link" >
               
            <TypeAnimation
            cursor={true}
            sequence={[
            'Persada Wifi Mengucapkan : ',
            ' "Happy Browsing."',
            3000,
            ]}
            wrapper="h4"
            repeat={Infinity}
        />
       {/* </div> */}

                    {/* <p className="scada">Jl Raya Laren No. 1 Laren Lamongan</p> */}
                    
                
             </div>
        </div>
        </>
        
    )
}
export default Footer