import { FXE_calendar } from "../../module/fxe-element";
import { FXE_layout } from "../fxe_layout";

export function FXE_reservation_page() {
    return (
        <FXE_layout>
            <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-md-5 mb-xl-12" >
                <div className="card card-flush" >
                    <div className="card-header pt-5">
                        <div className="card-title d-flex flex-column">
                            <span className="fs-2 fw-bold text-dark me-2">Project Title</span>
                            <span className="text-dark opacity-75 pt-1 fw-semibold fs-6">Project Detail Here</span>
                        </div>
                    </div>
                    <div className="card-body">
                        <FXE_calendar />
                    </div>
                </div>
            </div>
        </FXE_layout>
    )
}