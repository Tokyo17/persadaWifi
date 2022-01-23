import "./style/card.css"
import five from "./images/50.png"
import two from "./images/25.png"
import full from "./images/100.png"
import ScrollSpy from "react-ui-scrollspy";

const Card=()=>{
    return(
        <>
           {/* <ScrollSpy scrollThrottle={100} useBoxMethod={false}> */}
        <div id="produk" className="list-card">
            <div  className="title">
                <h4 className="font-link">Pilihan Paket Persada Wifi</h4>
            </div>
         </div>

            <div id="produk"  className="card-content">
                <div data-aos="flip-left" data-aos-once="true" className="crd">
                <h5 >Paket Up To 7MB</h5>
                    <img alt="gambar speed 7mb" src={two} />
                    <div className="paketan">
                        <h5>7</h5>
                        <h5>mbps</h5>
                    </div>
                    <p className="ket">Cocok digunakan untuk 3-5 prangkat sekaligus</p>
                    <div className="harga">
                        <div className="in">
                            <p>Rp.</p>
                        <h5>150.000</h5>
                        <p>/Bln</p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-out" data-aos-once="true" className="crd">
                    <h5>Paket Up To 10MB</h5>
                    <img alt="gambar speed 10mb" src={five} />
                    <div className="paketan">
                        <h5>10</h5>
                        <h5>mbps</h5>
                    </div>
                    <p className="ket">Cocok digunakan untuk 5-7 prangkat sekaligus</p>
                    <div className="harga">
                        <div className="in">
                            <p>Rp.</p>
                        <h5>250.000</h5>
                        <p>/Bln</p>
                        </div>
                    </div>
                 </div>
                <div data-aos="flip-right" data-aos-once="true" className="crd">
                <h5>Paket Up To 20MB</h5>
                    <img alt="gambar speed 20mb" src={full} />
                    <div className="paketan">
                        <h5>20</h5>
                        <h5>mbps</h5>
                    </div>
                    <p className="ket">Cocok digunakan untuk 10-12 prangkat sekaligus</p>
                    <div className="harga">
                        <div className="in">
                            <p>Rp.</p>
                        <h5>350.000</h5>
                        <p>/Bln</p>
                        </div>
                    </div>
                </div>
                    
            </div>

        {/* </ScrollSpy> */}
        </>

    )
}
export default Card