import { FXE_layout } from "../fxe_layout";
import BlackTransactions from "../../assets/media/transactions/13.png"
import { Link } from "react-router-dom";
export function FXE_transactions() {



    return (
        <FXE_layout>
            <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-md-5 mb-xl-12">

                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 col-lg-10 col-xl-10 col-xxl-10 mb-md-5 mb-xl-8">
                        <div className="card card-flush" style={{ marginBottom: "200px" }}>


                            <div className="row">
                                <div className="col-12 d-flex justify-content-center">
                                    <img src={BlackTransactions} style={{ width: "300px", height: "auto" }} />
                                </div>
                            </div>
                            <div className="card-px text-center pt-15 pb-5">
                                <h2 className="fs-2x fw-bold mb-0">Firmanızı Oluşturmadınız !</h2>
                                <p className="text-gray-600 fs-6 fw-semibold py-7">
                                    Burada Restoran için masalar, Rent-a Car için araçlar , Eğitim için dersler ve  <br /> daha bir çok sektör için hizmetler Ekleyebilirsiniz.
                                    <br />
                                    <br />
                                    <Link to="/ayar/firma" className="btn btn-primary btn-sm">Firma oluştur</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FXE_layout>
    )
}