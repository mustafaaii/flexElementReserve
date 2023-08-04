import { useEffect, useState } from "react"
import { FXE_button, FXE_input, FXE_select, FXE_single_upload, FXE_text_editor, FXE_textarea } from "../../module/fxe-item"
import CreateSection1 from "../../assets/media/create/1.png"
import CompanyBg from "../../assets/media/create/bg4.jpg"

import axios from "axios"
export function FXE_create_company() {


    const [CountryData, setCountryData] = useState([])
    const [CompanyName, setCompanyName] = useState("")

    const [Step, setStep] = useState(0)
    const GetData = () => {
        axios.get("https://restcountries.com/v3.1/all").then((data) => { setCountryData(data) })
    }
    const Country = () => {
        var l = [];
        (CountryData.data || []).map((d, x) => {
            if (d.altSpellings[1] !== undefined) return (
                l[x] = { id: d.area, country: d.altSpellings[1], flags: d.flags.png }
            )
        })
        return l;
    }
    useEffect(() => {
        GetData()
    }, [])



    useEffect(() => {
        document.body.setAttribute("data-kt-app-layout", "dark-sidebar")
        document.body.setAttribute("data-kt-app-header-fixed", "true")
        document.body.setAttribute("data-kt-app-sidebar-enabled", "true")
        document.body.setAttribute("data-kt-app-sidebar-fixed", "true")
        document.body.setAttribute("data-kt-app-sidebar-hoverable", "true")
        document.body.setAttribute("data-kt-app-sidebar-push-header", "true")
        document.body.setAttribute("data-kt-app-sidebar-push-toolbar", "true")
        document.body.setAttribute("data-kt-app-sidebar-push-footer", "true")
        document.body.setAttribute("data-kt-app-toolbar-enabled", "true")
        document.body.setAttribute("class", "app-default")
        document.body.setAttribute("style", `background-image:url(${CompanyBg})`)
    }, [])






    return (
        <>
            <div className="d-flex flex-column flex-root">
                <div className="d-flex flex-column flex-column-fluid flex-lg-row">
                    <div className="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
                        <div className="d-flex flex-center flex-lg-start flex-column">
                            <a href="" className="mb-7">
                                <img alt="Logo" src="assets/media/logos/custom-3.svg" />
                            </a>
                            <h2 className="text-white fw-normal m-0">Branding tools designed for your business</h2>
                        </div>
                    </div>
                    <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20" style={{ height: "900px" }}>
                        <div className="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-800px p-20">
                            <div className="text-center mb-11">
                                <h1 className="text-dark fw-bolder mb-3">Firma Oluştur</h1>
                                <div className="text-gray-500 fw-semibold fs-6">Your Social Campaigns</div>
                            </div>
                            <div className="d-flex flex-center flex-column flex-column-fluid">
                                <div className="form w-100" hidden={Step === 0 ? false : true}>
                                    <div className="row mb-8">
                                        <div className="col-12">
                                          
                                        </div>
                                        <div className="col-4">
                                            <FXE_input
                                                type={"text"}
                                                title={""}
                                                placeholder={`Identity`}
                                                value={""}
                                                response={(e) => { }}
                                                container={{ class: "mb-10" }}
                                            />
                                        </div>
                                        <div className="col-8">
                                            <FXE_input
                                                type={"text"}
                                                title={""}
                                                placeholder={`Company Name`}
                                                value={""}
                                                response={(e) => { }}
                                                container={{ class: "mb-10" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-grid mb-10">
                                        <div className="row">
                                            <div className="col-lg-12 d-flex justify-content-end">
                                                <FXE_button
                                                    type={"button"}
                                                    title={"Sonraki"}
                                                    classname={"btn btn-primary"}
                                                    indicator={{
                                                        status: false,
                                                        title: "Indicator Message",
                                                        second: 1
                                                    }}
                                                    response={() => { setStep(Step + 1) }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form w-100" hidden={Step === 1 ? false : true}>


                                    <div className="row mb-8">
                                        <div className="col-6">
                                            <FXE_input
                                                type={"text"}
                                                title={""}
                                                placeholder={`Phone`}
                                                value={""}
                                                response={(e) => { }}
                                                container={{ class: "mb-5" }}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <FXE_input
                                                type={"text"}
                                                title={""}
                                                placeholder={`Mobile`}
                                                value={""}
                                                response={(e) => { }}
                                                container={{ class: "mb-5" }}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <FXE_input
                                                type={"text"}
                                                title={""}
                                                placeholder={`Fax`}
                                                value={""}
                                                response={(e) => { }}
                                                container={{ class: "mb-5" }}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <FXE_textarea
                                                type={"text"}
                                                title={""}
                                                placeholder={`Adres`}
                                                value={""}
                                                response={(e) => { }}
                                                container={{ class: "mb-5" }}
                                            />
                                        </div>
                                    </div>


                                    <div className="d-grid mb-10">
                                        <div className="row">
                                            <div className="col-lg-6 d-flex justify-content-start">
                                                <FXE_button
                                                    type={"button"}
                                                    title={"Önceki"}
                                                    classname={"btn btn-secondary"}
                                                    indicator={{
                                                        status: false,
                                                        title: "Indicator Message",
                                                        second: 1
                                                    }}
                                                    response={() => { setStep(Step - 1) }}
                                                />
                                            </div>
                                            <div className="col-lg-6 d-flex justify-content-end">
                                                <FXE_button
                                                    type={"button"}
                                                    title={"Sonraki"}
                                                    classname={"btn btn-primary"}
                                                    indicator={{
                                                        status: false,
                                                        title: "Indicator Message",
                                                        second: 1
                                                    }}
                                                    response={() => { setStep(Step + 1) }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form w-100" hidden={Step === 2 ? false : true}>


                                    <div className="row mb-8">
                                     
                                    </div>


                                    <div className="d-grid mb-10">
                                        <div className="row">
                                            <div className="col-lg-6 d-flex justify-content-start">
                                                <FXE_button
                                                    type={"button"}
                                                    title={"Önceki"}
                                                    classname={"btn btn-secondary"}
                                                    indicator={{
                                                        status: false,
                                                        title: "Indicator Message",
                                                        second: 1
                                                    }}
                                                    response={() => { setStep(Step - 1) }}
                                                />
                                            </div>
                                            <div className="col-lg-6 d-flex justify-content-end">
                                                <FXE_button
                                                    type={"button"}
                                                    title={"Sonraki"}
                                                    classname={"btn btn-primary"}
                                                    indicator={{
                                                        status: false,
                                                        title: "Indicator Message",
                                                        second: 1
                                                    }}
                                                    response={() => { setStep(Step + 1) }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form w-100" hidden={Step === 3 ? false : true}>

                                    <div className="row mb-8">

                                        <div className="col-12">
                                            <FXE_input
                                                type={"text"}
                                                title={""}
                                                placeholder={`Username`}
                                                value={""}
                                                response={(e) => { }}
                                                container={{ class: "mb-5" }}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <FXE_input
                                                type={"text"}
                                                title={""}
                                                placeholder={`Password`}
                                                value={""}
                                                response={(e) => { }}
                                                container={{ class: "mb-5" }}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <FXE_input
                                                type={"text"}
                                                title={""}
                                                placeholder={`Re Password`}
                                                value={""}
                                                response={(e) => { }}
                                                container={{ class: "mb-5" }}
                                            />
                                        </div>
                                    </div>


                                    <div className="d-grid mb-10">
                                        <div className="row">
                                            <div className="col-lg-6 d-flex justify-content-start">
                                                <FXE_button
                                                    type={"button"}
                                                    title={"Önceki"}
                                                    classname={"btn btn-secondary"}
                                                    indicator={{
                                                        status: false,
                                                        title: "Indicator Message",
                                                        second: 1
                                                    }}
                                                    response={() => { setStep(Step - 1) }}
                                                />
                                            </div>
                                            <div className="col-lg-6 d-flex justify-content-end">
                                                <FXE_button
                                                    type={"button"}
                                                    title={"Save"}
                                                    classname={"btn btn-primary"}
                                                    indicator={{
                                                        status: false,
                                                        title: "Indicator Message",
                                                        second: 1
                                                    }}
                                                    response={() => { }}
                                                />
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="d-flex flex-stack px-lg-10">
                                <div className="me-0">
                                    <button className="btn btn-flex btn-link btn-color-gray-700 btn-active-color-primary rotate fs-base" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" data-kt-menu-offset="0px, 0px">
                                        <img data-kt-element="current-lang-flag" className="w-20px h-20px rounded me-3" src="assets/media/flags/united-states.svg" alt="" />
                                        <span data-kt-element="current-lang-name" className="me-1">English</span>
                                        <i className="ki-duotone ki-down fs-5 text-muted rotate-180 m-0"></i>
                                    </button>
                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-4 fs-7" data-kt-menu="true" id="kt_auth_lang_menu">

                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link d-flex px-5" data-kt-lang="English">
                                                <span className="symbol symbol-20px me-4">
                                                    <img data-kt-element="lang-flag" className="rounded-1" src="assets/media/flags/united-states.svg" alt="" />
                                                </span>
                                                <span data-kt-element="lang-name">English</span>
                                            </a>
                                        </div>


                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link d-flex px-5" data-kt-lang="Spanish">
                                                <span className="symbol symbol-20px me-4">
                                                    <img data-kt-element="lang-flag" className="rounded-1" src="assets/media/flags/spain.svg" alt="" />
                                                </span>
                                                <span data-kt-element="lang-name">Spanish</span>
                                            </a>
                                        </div>


                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link d-flex px-5" data-kt-lang="German">
                                                <span className="symbol symbol-20px me-4">
                                                    <img data-kt-element="lang-flag" className="rounded-1" src="assets/media/flags/germany.svg" alt="" />
                                                </span>
                                                <span data-kt-element="lang-name">German</span>
                                            </a>
                                        </div>


                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link d-flex px-5" data-kt-lang="Japanese">
                                                <span className="symbol symbol-20px me-4">
                                                    <img data-kt-element="lang-flag" className="rounded-1" src="assets/media/flags/japan.svg" alt="" />
                                                </span>
                                                <span data-kt-element="lang-name">Japanese</span>
                                            </a>
                                        </div>


                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link d-flex px-5" data-kt-lang="French">
                                                <span className="symbol symbol-20px me-4">
                                                    <img data-kt-element="lang-flag" className="rounded-1" src="assets/media/flags/france.svg" alt="" />
                                                </span>
                                                <span data-kt-element="lang-name">French</span>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                                <div className="d-flex fw-semibold text-primary fs-base gap-5">
                                    <a href="../../demo1/dist/pages/team.html" target="_blank">Terms</a>
                                    <a href="../../demo1/dist/pages/pricing/column.html" target="_blank">Plans</a>
                                    <a href="../../demo1/dist/pages/contact.html" target="_blank">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


