import { FXE_button, FXE_input, FXE_select, FXE_single_upload, FXE_textarea } from "../../module/fxe-item";
import { FXE_layout } from "../fxe_layout";

export function FXE_setting_company() {







    return (
        <FXE_layout>
            <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-md-5 mb-xl-12">

                <div className="row d-flex justify-content-center">
                    <div className="col-md-8 col-lg-8 col-xl-8 col-xxl-8 mb-md-5 mb-xl-8">
                        <div className="card card-flush" style={{ marginBottom: "200px" }}>
                            <div className="card-header pt-5">
                                <div className="card-title d-flex flex-column">
                                    <span className="fs-2 fw-bold text-dark me-2">Firma Oluştur</span>
                                    <span className="text-dark opacity-75 pt-1 fw-semibold fs-6">
                                        Firma bilgilerinizi girmelisiniz. Firma bilgileriniz, rezervasyon, iletişim, randevu, menü, personel atamaları gibi işlemelerde kullanılacaktır.
                                    </span>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
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
                                    <div className="col-lg-9">
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
                                                    title={""}
                                                    placeholder={"Sector"}
                                                    response={(e) => { console.log(e) }}
                                                    required={false}
                                                    container={{ class: "mb-10" }}
                                                    searchPlaceholder={"Sektör Ara"}
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <FXE_input
                                                    type={"text"}
                                                    title={""}
                                                    placeholder={`Identity`}
                                                    value={""}
                                                    response={(e) => { }}
                                                    container={{ class: "mb-10" }}
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <FXE_input
                                                    type={"text"}
                                                    title={""}
                                                    placeholder={`Company Name`}
                                                    value={""}
                                                    response={(e) => { }}
                                                    container={{ class: "mb-10" }}
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <FXE_input
                                                    type={"text"}
                                                    title={""}
                                                    placeholder={`Şirket Yetkili Adı`}
                                                    value={""}
                                                    response={(e) => { }}
                                                    container={{ class: "mb-10" }}
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <FXE_input
                                                    type={"text"}
                                                    title={""}
                                                    placeholder={`Şirket Yetkili Soyadı`}
                                                    value={""}
                                                    response={(e) => { }}
                                                    container={{ class: "mb-10" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
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
                                    <div className="col-4">
                                        <FXE_select
                                            data={[]}
                                            selected={""}
                                            attribute={["id", "country"]}
                                            title={""}
                                            placeholder={"Country"}
                                            response={(e) => { console.log(e) }}
                                            required={false}
                                            container={{ class: "mb-5" }}
                                            searchPlaceholder={"Search Value"}
                                        />
                                    </div>
                                    <div className="col-4">
                                        <FXE_select
                                            data={[]}
                                            selected={""}
                                            attribute={["id", "country"]}
                                            title={""}
                                            placeholder={"Province"}
                                            response={(e) => { console.log(e) }}
                                            required={false}
                                            container={{ class: "mb-5" }}
                                            searchPlaceholder={"Search Value"}
                                        />
                                    </div>
                                    <div className="col-4">
                                        <FXE_select
                                            data={[]}
                                            selected={""}
                                            attribute={["id", "country"]}
                                            title={""}
                                            placeholder={"District"}
                                            response={(e) => { console.log(e) }}
                                            required={false}
                                            container={{ class: "mb-5" }}
                                            searchPlaceholder={"Search Value"}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <FXE_input
                                            type={"text"}
                                            title={""}
                                            placeholder={`Facebook`}
                                            value={""}
                                            response={(e) => { }}
                                            container={{ class: "mb-5" }}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <FXE_input
                                            type={"text"}
                                            title={""}
                                            placeholder={`Instagram`}
                                            value={""}
                                            response={(e) => { }}
                                            container={{ class: "mb-5" }}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <FXE_input
                                            type={"text"}
                                            title={""}
                                            placeholder={`Linkedin`}
                                            value={""}
                                            response={(e) => { }}
                                            container={{ class: "mb-5" }}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <FXE_input
                                            type={"text"}
                                            title={""}
                                            placeholder={`Web Site`}
                                            value={""}
                                            response={(e) => { }}
                                            container={{ class: "mb-5" }}
                                        />
                                    </div>
                                    <div className="col-lg-12 d-flex justify-content-end">
                                        <FXE_button
                                            type={"button"}
                                            title={"Kaydet"}
                                            classname={"btn btn-primary btn-sm"}
                                            icon={{
                                                type: "class",
                                                class: {
                                                    name: "ki-duotone ki-disk fs-2 me-1",
                                                    path: [1, 2]
                                                },
                                                html: <></>
                                            }}
                                            indicator={{
                                                status: true,
                                                title: "Lütfen Bekleyiniz",
                                                second: 1
                                            }}
                                            response={() => { }}
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