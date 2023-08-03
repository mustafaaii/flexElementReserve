import { FXE_calendar } from "../../module/fxe-element";
import { FXE_input, FXE_select, FXE_textarea } from "../../module/fxe-item";
import { FXE_language } from "../../module/fxe-language";
import { FXE_layout } from "../fxe_layout";

export function FXE_reservation_new() {



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
                        <div className="row" hidden>
                            <div className="col-lg-12">
                                <FXE_input
                                    id="fxe_input_1"
                                    name="fxe_input_1"
                                    title={FXE_language("reservation")}
                                    type="text"
                                    value=""
                                    placeholder="asdasd"
                                    response={(e) => { console.log(e) }}
                                    required=""
                                    container={{ class: "mb-10" }}
                                />
                            </div>

                            <div className="col-lg-12">
                                <FXE_textarea
                                    id="fxe_input_2"
                                    name="fxe_input_2"
                                    title="Title 2"
                                    type="text"
                                    value=""
                                    placeholder="asdasd"
                                    response={(e) => { console.log(e) }}
                                    required=""
                                    container={{ class: "mb-10" }}
                                />
                            </div>


                            <div className="col-lg-4">
                                <FXE_select
                                    data={[{ id: 1, value: "Value" }, { id: 2, value: "Value 1" }]}
                                    selected=""
                                    id=""
                                    attribute={["id", "value"]}
                                    name=""
                                    title="Title 3"
                                    placeholder="Placeholder"
                                    response=""
                                    required=""
                                    container={{ class: "mb-10" }}
                                />
                            </div>



                            <div className="col-lg-12">
                                <FXE_textarea
                                    id="fxe_input_2"
                                    name="fxe_input_2"
                                    title="Title 2"
                                    type="text"
                                    value=""
                                    placeholder="asdasd"
                                    response={(e) => { console.log(e) }}
                                    required=""
                                    container={{ class: "mb-10" }}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </FXE_layout>
    )
}