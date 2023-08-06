import { useState } from "react";
import { FXE_button, FXE_input, FXE_select, FXE_single_upload, FXE_textarea } from "../../module/fxe-item";
import { FXE_layout } from "../fxe_layout";

export function FXE_setting_company() {


    const [Steps0, setSteps0] = useState(0)
    const [Steps1, setSteps1] = useState(1)
    const [Steps2, setSteps2] = useState(1)
    const [Steps3, setSteps3] = useState(1)
    const [Steps4, setSteps4] = useState(1)


    const NextStep = (e) => {

        if (e === 0) {
            setSteps0(2)
            setSteps1(0)
        }

        if (e === 1) {
            setSteps1(2)
            setSteps2(0)
        }

        if (e === 2) {
            setSteps2(2)
            setSteps3(0)
        }


        if (e === 3) {
            setSteps3(2)
            setSteps4(0)
        }


    }


    const BackStep = (e) => {


        if (e === 1) {
            setSteps0(0)
            setSteps1(1)
        }

        if (e === 2) {
            setSteps1(0)
            setSteps2(1)
        }

        if (e === 3) {
            setSteps2(0)
            setSteps3(1)
        }

        if (e === 4) {
            setSteps3(0)
            setSteps4(1)
        }
    }


    return (
        <FXE_layout>
            <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-md-5 mb-xl-12">

                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 col-lg-10 col-xl-10 col-xxl-10 mb-md-5 mb-xl-8">
                        <div className="card card-flush" style={{ marginBottom: "200px" }}>

                            <div className="card-body">
                                <div className="row mt-10 mb-15 px-8">
                                    <div style={{ width: "10%" }}>
                                        <div className="p-3 bg-light-info border-radius-1">
                                            <i class="ki-duotone ki-briefcase text-info fs-6hx">
                                                <i class="path1"></i>
                                                <i class="path2"></i>
                                            </i>
                                        </div>
                                    </div>
                                    <div style={{ width: "90%" }}>
                                        <h2 className="fs-2x fw-bold mb-0 text-info mt-2">Firmanızı Oluşturun</h2>
                                        <p className="text-gray-400 fs-4 fw-semibold py-3">Firma bilgilerinizi girmelisiniz. Firma bilgileriniz, rezervasyon,  iletişim, randevu, menü, personel atamaları gibi <br />işlemelerde kullanılacaktır.</p>
                                    </div>
                                </div>
                                <div className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid between">

                                    <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
                                        <div className="stepper-nav ps-lg-10">
                                            <div className={`stepper-item ${Steps0 === 0 ? "current" : Steps0 === 1 ? "pendding" : "completed"}`}>
                                                <div className="stepper-wrapper">
                                                    <div className="stepper-icon w-40px h-40px">
                                                        <i className="ki-duotone ki-check stepper-check fs-2"></i>
                                                        <span className="stepper-number">1</span>
                                                    </div>
                                                    <div className="stepper-label">
                                                        <h3 className="stepper-title">Firma</h3>
                                                        <div className="stepper-desc">Firma Bilgileriniz</div>
                                                    </div>
                                                </div>
                                                <div className="stepper-line h-40px"></div>
                                            </div>
                                            <div className={`stepper-item ${Steps1 === 0 ? "current" : Steps1 === 1 ? "pending" : "completed"}`}>
                                                <div className="stepper-wrapper">
                                                    <div className="stepper-icon w-40px h-40px">
                                                        <i className="ki-duotone ki-check stepper-check fs-2"></i>
                                                        <span className="stepper-number">2</span>
                                                    </div>
                                                    <div className="stepper-label">
                                                        <h3 className="stepper-title">İletişim</h3>
                                                        <div className="stepper-desc">İletişim Bilgileriniz</div>
                                                    </div>
                                                </div>
                                                <div className="stepper-line h-40px"></div>
                                            </div>
                                            <div className={`stepper-item ${Steps2 === 0 ? "current" : Steps2 === 1 ? "pending" : "completed"}`}>
                                                <div className="stepper-wrapper">
                                                    <div className="stepper-icon w-40px h-40px">
                                                        <i className="ki-duotone ki-check stepper-check fs-2"></i>
                                                        <span className="stepper-number">3</span>
                                                    </div>
                                                    <div className="stepper-label">
                                                        <h3 className="stepper-title">Adres</h3>
                                                        <div className="stepper-desc">Adres Bilgileriniz</div>
                                                    </div>
                                                </div>
                                                <div className="stepper-line h-40px"></div>
                                            </div>
                                            <div className={`stepper-item ${Steps3 === 0 ? "current" : Steps3 === 1 ? "pending" : "completed"}`}>
                                                <div className="stepper-wrapper">
                                                    <div className="stepper-icon w-40px h-40px">
                                                        <i className="ki-duotone ki-check stepper-check fs-2"></i>
                                                        <span className="stepper-number">4</span>
                                                    </div>
                                                    <div className="stepper-label">
                                                        <h3 className="stepper-title">Sosyal Medya</h3>
                                                        <div className="stepper-desc">Sosyal Medya Bilgileriniz</div>
                                                    </div>
                                                </div>
                                                <div className="stepper-line h-40px"></div>
                                            </div>
                                            <div className={`stepper-item ${Steps4 === 0 ? "current" : Steps4 === 1 ? "pending" : "completed"}`}>
                                                <div className="stepper-wrapper">
                                                    <div className="stepper-icon w-40px h-40px">
                                                        <i className="ki-duotone ki-check stepper-check fs-2"></i>
                                                        <span className="stepper-number">5</span>
                                                    </div>
                                                    <div className="stepper-label">
                                                        <h3 className="stepper-title">İncele</h3>
                                                        <div className="stepper-desc">Bilgilerinizi Kontrol Edin</div>
                                                    </div>
                                                </div>
                                                <div className="stepper-line h-40px"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-row-fluid py-lg-0 px-lg-15">
                                        <div className="form fv-plugins-bootstrap5 fv-plugins-framework">
                                            <div data-kt-stepper-element="content" className={`${Steps0 === 0 ? "current" : Steps0 === 1 ? "pending" : "completed"}`}>
                                                <div className="w-100">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <FXE_select
                                                                data={[
                                                                    { id: 40823, company: "Sağlık" },
                                                                    { id: 40824, company: "Güzellik ve Spa" },
                                                                    { id: 40825, company: "Eğitim" },
                                                                    { id: 40826, company: "Restoran ve Yeme-İçme" },
                                                                    { id: 40827, company: "Spor ve Rekreasyon" },
                                                                    { id: 40828, company: "Profesyonel Hizmetler" },
                                                                    { id: 40829, company: "Rent a Car" },
                                                                    { id: 40830, company: "Hizmet İşlemleri" },
                                                                    { id: 40831, company: "Sosyal Hizmetler" },
                                                                    { id: 40832, company: "Seyahat ve Turizm" },
                                                                    { id: 40833, company: "Terapi Merkezleri" },
                                                                    { id: 40834, company: "Gelişim ve Eğitim" },
                                                                    { id: 40835, company: "Sanat ve Kültür" },
                                                                    { id: 40836, company: "Fotoğrafçılık" },
                                                                    { id: 40837, company: "İnşaat ve Mimarlık" },
                                                                    { id: 40838, company: "Konferans ve Seminer Organizasyonları" },
                                                                    { id: 40839, company: "Ev Bakım ve Onarım" },
                                                                    { id: 40840, company: "Eğlence ve Oyun" },
                                                                    { id: 40841, company: "Moda ve Giyim" },
                                                                    { id: 40842, company: "Evcil Hayvan Bakım" },
                                                                    { id: 40843, company: "Veteriner" },
                                                                ]}
                                                                selected={""}
                                                                attribute={["id", "company"]}
                                                                title={"Sector"}
                                                                placeholder={"Sector"}
                                                                response={(e) => { console.log(e) }}
                                                                required={true}
                                                                container={{ class: "mb-10" }}
                                                                searchPlaceholder={"Sektör Ara"}
                                                                disabled={false}
                                                                classname={"form-control-solid"}
                                                            />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Identity"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Company Name"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-10" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Yetkili Adı"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-10" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Yetkili Soyadı"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-10" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="d-flex flex-stack pt-10">
                                                            <div></div>
                                                            <div>
                                                                <FXE_button
                                                                    type={"button"}
                                                                    title={"Sonraki"}
                                                                    classname={"btn btn-primary"}
                                                                    icon={{ type: "class", class: { name: "ki-duotone ki-arrow-right fs-3 ms-2 me-0 fs-2", path: [1, 2], float: "right", }, html: <></> }}
                                                                    indicator={{ id: 2000, status: false, title: "Lütfen Bekleyiniz", second: 1 }}
                                                                    response={() => { NextStep(0) }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-kt-stepper-element="content" className={`${Steps1 === 0 ? "current" : Steps1 === 1 ? "pending" : "completed"}`}>
                                                <div className="w-100">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Phone"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-5" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="col-6">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Mobile"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-5" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="col-6">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Fax"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-5" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="d-flex flex-stack pt-10">
                                                            <div className="me-2">
                                                                <FXE_button
                                                                    type={"button"}
                                                                    title={"Geri"}
                                                                    classname={"btn btn-lg btn-light-primary me-3"}
                                                                    icon={{ type: "class", class: { name: "ki-duotone ki-arrow-left  fs-3 me-1", path: [1, 2], float: "left", }, html: <></> }}
                                                                    indicator={{ id: 1000, status: false, title: "Lütfen Bekleyiniz", second: 1 }}
                                                                    response={() => { BackStep(1) }}
                                                                />
                                                            </div>
                                                            <div>
                                                                <FXE_button
                                                                    type={"button"}
                                                                    title={"Sonraki"}
                                                                    classname={"btn btn-primary"}
                                                                    icon={{ type: "class", class: { name: "ki-duotone ki-arrow-right fs-3 ms-2 me-0 fs-2", path: [1, 2], float: "right", }, html: <></> }}
                                                                    indicator={{ id: 2000, status: false, title: "Lütfen Bekleyiniz", second: 1 }}
                                                                    response={() => { NextStep(1) }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-kt-stepper-element="content" className={`${Steps2 === 0 ? "current" : Steps2 === 1 ? "pending" : "completed"}`}>
                                                <div className="w-100">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <FXE_select
                                                                data={[]}
                                                                selected={""}
                                                                attribute={["id", "country"]}
                                                                title={"Country"}
                                                                placeholder={"Select an Value"}
                                                                response={(e) => { console.log(e) }}
                                                                required={true}
                                                                container={{ class: "mb-10" }}
                                                                searchPlaceholder={"Search Value"}
                                                                classname="form-control-solid"
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="col-6">
                                                            <FXE_select
                                                                data={[]}
                                                                selected={""}
                                                                attribute={["id", "country"]}
                                                                title={"Province"}
                                                                placeholder={"Select an Value"}
                                                                response={(e) => { console.log(e) }}
                                                                required={true}
                                                                container={{ class: "mb-10" }}
                                                                searchPlaceholder={"Search Value"}
                                                                classname="form-control-solid"
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="col-6">
                                                            <FXE_select
                                                                data={[]}
                                                                selected={""}
                                                                attribute={["id", "country"]}
                                                                title={"District"}
                                                                placeholder={"Select an Value"}
                                                                response={(e) => { console.log(e) }}
                                                                required={true}
                                                                container={{ class: "mb-10" }}
                                                                searchPlaceholder={"Search Value"}
                                                                classname="form-control-solid"
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="col-12">
                                                            <FXE_textarea
                                                                type={"text"}
                                                                title={"Adres"}
                                                                placeholder={`Adres`}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-5" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="d-flex flex-stack pt-10">
                                                            <div className="me-2">
                                                                <FXE_button
                                                                    type={"button"}
                                                                    title={"Geri"}
                                                                    classname={"btn btn-lg btn-light-primary me-3"}
                                                                    icon={{ type: "class", class: { name: "ki-duotone ki-arrow-left  fs-3 me-1", path: [1, 2], float: "left", }, html: <></> }}
                                                                    indicator={{ id: 1000, status: false, title: "Lütfen Bekleyiniz", second: 1 }}
                                                                    response={() => { BackStep(2) }}
                                                                />
                                                            </div>
                                                            <div>
                                                                <FXE_button
                                                                    type={"button"}
                                                                    title={"Sonraki"}
                                                                    classname={"btn btn-primary"}
                                                                    icon={{ type: "class", class: { name: "ki-duotone ki-arrow-right fs-3 ms-2 me-0 fs-2", path: [1, 2], float: "right", }, html: <></> }}
                                                                    indicator={{ id: 2000, status: false, title: "Lütfen Bekleyiniz", second: 1 }}
                                                                    response={() => { NextStep(2) }}
                                                                />

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-kt-stepper-element="content" className={`${Steps3 === 0 ? "current" : Steps3 === 1 ? "pending" : "completed"}`}>
                                                <div className="w-100">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Facebook"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-10" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="col-6">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Instagram"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-10" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="col-6">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Linkedin"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-10" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="col-6">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Web Site"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-10" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="d-flex flex-stack pt-10">
                                                            <div className="me-2">
                                                                <FXE_button
                                                                    type={"button"}
                                                                    title={"Geri"}
                                                                    classname={"btn btn-lg btn-light-primary me-3"}
                                                                    icon={{ type: "class", class: { name: "ki-duotone ki-arrow-left  fs-3 me-1", path: [1, 2], float: "left", }, html: <></> }}
                                                                    indicator={{ id: 1000, status: false, title: "Lütfen Bekleyiniz", second: 1 }}
                                                                    response={() => { BackStep(3) }}
                                                                />
                                                            </div>
                                                            <div>
                                                                <FXE_button
                                                                    type={"button"}
                                                                    title={"Sonraki"}
                                                                    classname={"btn btn-primary"}
                                                                    icon={{ type: "class", class: { name: "ki-duotone ki-arrow-right fs-3 ms-2 me-0 fs-2", path: [1, 2], float: "right", }, html: <></> }}
                                                                    indicator={{ id: 2000, status: false, title: "Lütfen Bekleyiniz", second: 1 }}
                                                                    response={() => { NextStep(3) }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-kt-stepper-element="content" className={`${Steps4 === 0 ? "current" : Steps4 === 1 ? "pending" : "completed"}`}>
                                                <div className="w-100">
                                                    <div className="row">

                                                        <div className="col-lg-12 mb-5">
                                                            <div style={{ width: "90%" }}>
                                                                <h2 className="fs-1x fw-bold mb-0 text-info">Firma</h2>
                                                                <p className="text-gray-400 fs-4 fw-semibold py-1"> randevu, menü, personel atamaları gibi</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Sector"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-5" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Identity"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-5" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Company Name"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-5" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Yetkili Adı"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-5" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Yetkili Soyadı"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-5" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>


                                                        <div className="col-lg-12 mt-5 mb-5">
                                                            <div style={{ width: "90%" }}>
                                                                <h2 className="fs-1x fw-bold mb-0 text-info">İletişim</h2>
                                                                <p className="text-gray-400 fs-4 fw-semibold py-1"> randevu, menü, personel atamaları gibi</p>
                                                            </div>
                                                        </div>



                                                        <div className="col-lg-6">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Phone"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-10" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Mobile"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-10" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Fax"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-10" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>



                                                        <div className="col-lg-12 mt-5 mb-5">
                                                            <div style={{ width: "90%" }}>
                                                                <h2 className="fs-1x fw-bold mb-0 text-info">Adres</h2>
                                                                <p className="text-gray-400 fs-4 fw-semibold py-1"> randevu, menü, personel atamaları gibi</p>
                                                            </div>
                                                        </div>


                                                        <div className="col-lg-12">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Country"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-10" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Province"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-10" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"District"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-10" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="col-12">
                                                            <FXE_textarea
                                                                type={"text"}
                                                                title={"Adres"}
                                                                placeholder={`Adres`}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-5" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>


                                                        <div className="col-lg-12 mt-5 mb-5">
                                                            <div style={{ width: "90%" }}>
                                                                <h2 className="fs-1x fw-bold mb-0 text-info">Sosyal Medya</h2>
                                                                <p className="text-gray-400 fs-4 fw-semibold py-1"> randevu, menü, personel atamaları gibi</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Facebook"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-10" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Instagram"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-10" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Linkedin"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-10" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <FXE_input
                                                                type={"text"}
                                                                title={"Web Site"}
                                                                placeholder={``}
                                                                value={""}
                                                                response={(e) => { }}
                                                                container={{ class: "mb-10" }}
                                                                classname="form-control-solid"
                                                                required={true}
                                                                disabled={false}
                                                            />
                                                        </div>

                                                    </div>

                                                    <div className="d-flex flex-stack pt-10">
                                                        <div className="me-2">
                                                            <FXE_button
                                                                type={"button"}
                                                                title={"Geri"}
                                                                classname={"btn btn-lg btn-light-primary me-3"}
                                                                icon={{ type: "class", class: { name: "ki-duotone ki-arrow-left  fs-3 me-1", path: [1, 2], float: "left", }, html: <></> }}
                                                                indicator={{ id: 1000, status: false, title: "Lütfen Bekleyiniz", second: 1 }}
                                                                response={() => { BackStep(4) }}
                                                            />
                                                        </div>
                                                        <div>
                                                            <FXE_button
                                                                type={"button"}
                                                                title={"Save"}
                                                                classname={"btn btn-primary"}
                                                                icon={{ type: "class", class: { name: "ki-duotone ki-arrow-right fs-3 ms-1 me-0", path: [1, 2], float: "right", }, html: <></> }}
                                                                indicator={{ id: 3000, status: true, title: "Lütfen Bekleyiniz", second: 1 }}
                                                                response={() => { }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>





















                                <div className="row" hidden >
                                    <div className="col-lg-3">
                                        <FXE_single_upload
                                            selected={null}
                                            response={() => { }}
                                            container={{ class: "mb-5" }}
                                            placeholder={
                                                <div className="text-center" style={{ lineHeight: "15px" }}>
                                                    Select Your <br />Company Logo
                                                </div>}
                                        />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </FXE_layout>
    )
}