import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useRef, useState } from "react"
import { FXE_unique } from './fxe-unique';

export function FXE_input({ id, name, title, type, value, placeholder, response, required, container, style }) {
    return (
        <div className={container.class}  >
            {title === "" || title === null || title === undefined ? "" : <label htmlFor={id} className="form-label">{title}</label>}
            <input id={id} name={name} type={type} className="form-control" style={style} placeholder={placeholder} value={value} onChange={(e) => { response(e.target.value) }} required={required} />
        </div>
    )
}
export function FXE_textarea({ id, name, title, type, value, placeholder, response, required, container }) {
    return (
        <div className={container.class}>
            {title === "" || title === null || title === undefined ? "" : <label htmlFor={id} className="form-label">{title}</label>}
            <textarea id={id} name={name} type={type} className="form-control" placeholder={placeholder} value={value} onChange={(e) => { response(e.target.value) }} required={required}></textarea>
        </div>
    )
}
export function FXE_text_editor({ id, title, value, response, container }) {
    return (
        <div className={container.class}>
            <label htmlFor={id} className="form-label">{title}</label>
            <CKEditor
                editor={ClassicEditor}
                data={value}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    response(data)
                }}
            />
        </div>
    )
}
export function FXE_select({ data, selected, attribute, title, placeholder, container, searchPlaceholder }) {

    const [Search, setSearch] = useState("")
    const [SelectItem, setSelectItem] = useState(selected === null || selected === undefined || selected === "" ?
        [{
            [attribute[0]]: 0,
            [attribute[1]]: ""
        }]
        :
        [{
            [attribute[0]]: selected[0][attribute[0]],
            [attribute[1]]: selected[0][attribute[1]]
        }]
    )
    const [Active, setActive] = useState(0)
    const Input = () => {
        if (SelectItem[0][attribute[1]] === "") {
            return (<i className="ki-duotone ki-down fs-1 cursor-pointer" style={{ position: "relative", float: "right", marginTop: "-32px", marginRight: "10px" }}></i>)
        }
        else {
            return (
                <i className="ki-duotone ki-cross-circle fs-1 cursor-pointer" onClick={() => { setSelectItem([{ [attribute[0]]: 0, [attribute[1]]: "" }]); }}
                    style={{ position: "relative", float: "right", marginTop: "-32px", marginRight: "10px" }}>
                    <i className="path1"></i>
                    <i className="path2"></i>
                </i>
            )
        }

    }
    const Modal = (e) => {
        if (data.length === 0) {
            return <>
                <div style={{ height: "120px", display: "flex", alignItems: "end", justifyContent: "center" }}>
                    <i className="ki-duotone ki-abstract-26 fs-3hx">
                        <i className="path1"></i>
                        <i className="path2"></i>
                    </i>
                </div>
                <div style={{ height: "120px", display: "flex", alignItems: "start", justifyContent: "center" }}>
                    <span className='fw-semibold fs-6 text-gray-600'>Data Gönderilmedi</span>
                </div>
            </>
        }
        else {
            var r = "";
            if (e.length > 0) {
                r = data.filter(d => { return (d[attribute[1]].toLowerCase().includes(e.toLowerCase())) })
            }
            else {
                r = data;
            }
            return r.map((d, x) => {
                return (
                    <div key={`fxe_list_${d[attribute[0]]}_${x}`}
                        className={`fxe_signle_select_item ${SelectItem[0][attribute[0]] === d[attribute[0]] && "active"}`}
                        onClick={() => { setSelectItem([{ [attribute[0]]: d[attribute[0]], [attribute[1]]: d[attribute[1]] }]); setActive(0); setSearch("") }}>
                        <div className="row">
                            <div className="col-lg-10 h-40px d-flex align-items-center justify-content-start">
                                {d[attribute[1]]}
                            </div>
                            {
                                SelectItem[0][attribute[0]] === d[attribute[0]] &&
                                <div className="col-lg-2 h-40px d-flex align-items-center justify-content-end">
                                    <i className="ki-duotone ki-check-circle fs-1 me-5">
                                        <i className="path1"></i>
                                        <i className="path2"></i>
                                    </i>
                                </div>
                            }
                        </div>
                    </div>
                )
            })
        }
    }
    return (
        <div className={container.class}>
            {title === "" || title === null || title === undefined ? "" : <label className="form-label">{title}</label>}
            <div className="fxe_signle_select_container">
                <div className="fxe_signle_select_input cursor-pointer" onClick={() => { Active === 1 ? setActive(0) : setActive(1) }}>
                    {SelectItem[0][attribute[1]] === "" ? <div className="text-gray-500">{placeholder}</div> : SelectItem[0][attribute[1]]}
                </div>
                <div className="fxe_signle_select_close">
                    {Input()}
                </div>
                <div className={`fxe_signle_select_modal shadow-sm ${Active === 1 ? "active" : ""}`} style={{ height: "350px" }}>
                    <div className='h-50px'>
                        <FXE_input
                            type={"text"}
                            title={""}
                            placeholder={searchPlaceholder}
                            value={Search}
                            response={(e) => { setSearch(e) }}
                            container={{ class: "mb-0 mt-0" }}
                            style={{ paddingLeft: "30px" }}
                        />
                        <i className="ki-duotone ki-magnifier fs-2" style={{ position: "relative", top: "-30px", left: "10px" }}>
                            <i className="path1"></i>
                            <i className="path2"></i>
                        </i>
                    </div>
                    <div className='p-3' style={{ height: "280px", overflowY: "auto", overflowX: "hidden", border: "solid 1px var(--bs-gray-300)", borderRadius: "5px" }}>
                        {Modal(Search)}
                    </div>
                </div>
                {Active === 1 ? <div className="fxe_signle_select_modal_overlay" onClick={() => { setActive(0) }}></div> : ""}
            </div>
        </div >
    )
}
export function FXE_single_upload({ selected, response, container, placeholder }) {
    const file = useRef();
    const [image, setImage] = useState(selected === null || selected === undefined ? { id: 0, image: "" } : { id: selected.id, image: selected.image })
    const [Active, setActive] = useState(0)
    const SelectedImage = (e) => {
        const [file] = e.target.files
        if (file) {
            var Id = FXE_unique();
            var Image = URL.createObjectURL(file);
            setImage({ id: Id, image: Image })
            response({ id: Id, image: Image, file: file })
        }
    }
    const Drop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0]
        var Id = FXE_unique();
        var Image = URL.createObjectURL(file);
        setImage({ id: Id, image: Image })
        response({ id: Id, image: Image, file: file })
        setActive(0)
    }
    const DragOver = (e) => {
        e.preventDefault();
    }
    const DragEnter = () => {
        setActive(1)
    }
    return (
        <>
            <div className={container.class}>
                <div className={`signle-upload-container cursor-pointer ${Active === 1 ? "active" : ""}`} onDragOver={DragOver} onDrop={Drop} onDragEnter={DragEnter}>
                    <div className="signle-upload-item"
                        style={{
                            backgroundImage: `url(${image.id !== 0 ? image.image : selected === null || selected === undefined ? "" : selected.image})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}>
                        {
                            parseInt(image.id) === 0 ?
                                <>
                                    <div className="h-90px d-flex align-items-end justify-content-center">
                                        <div className="row signle-item-menu shadow-sm border">
                                            <div className="col-12 text-center d-flex align-items-center justify-content-center" onClick={() => { file.current.click(); }}>
                                                <i className="ki-duotone ki-exit-up fs-1">
                                                    <i className="path1"></i>
                                                    <i className="path2"></i>
                                                </i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-20px d-flex align-items-start justify-content-center"></div>
                                    <div className="h-90px d-flex align-items-start justify-content-center">
                                        <span className='fw-semibold text-gray-500 fs-5'>{placeholder}</span>
                                    </div>
                                </>
                                :
                                <div className="h-200px d-flex align-items-center justify-content-center">
                                    <div className="row signle-item-menu shadow-sm border">
                                        <div className="col-12 text-center d-flex align-items-center justify-content-center" onClick={() => { file.current.value = ""; setImage({ id: 0, image: "" }) }}>
                                            <i className="ki-duotone ki-cross-circle fs-1">
                                                <i className="path1"></i>
                                                <i className="path2"></i>
                                            </i>
                                        </div>
                                    </div>
                                    <div className="row signle-item-menu shadow-sm border">
                                        <div className="col-12 text-center d-flex align-items-center justify-content-center" onClick={() => { file.current.click() }}>
                                            <i className="ki-duotone ki-arrows-circle fs-1">
                                                <i className="path1"></i>
                                                <i className="path2"></i>
                                            </i>
                                        </div>
                                    </div>
                                </div>

                        }
                    </div>
                    <input type="file" onChange={(e) => { SelectedImage(e) }} ref={file} hidden />
                </div >
            </div>
        </>
    )
}
export function FXE_button({ title, type, classname, indicator, response, icon }) {
    const [count, setCount] = useState(indicator.second);
    const [isCountdownComplete, setIsCountdownComplete] = useState(false);
    const startCountdown = () => {
        if (!isCountdownComplete) {
            setCount(10);
            setIsCountdownComplete(false);
            const timer = setInterval(() => {
                setCount((prevCount) => {
                    if (prevCount > 1) {
                        setIsCountdownComplete(true);
                        return prevCount - 1;
                    } else {
                        response()
                        setIsCountdownComplete(false);
                        clearInterval(timer);
                        return 0;
                    }
                });
            }, 1000);
        }
    };
    return (
        <>
            <button onClick={() => { indicator.status === true ? startCountdown() : response() }} type={type} className={classname} data-kt-indicator={indicator.status === true ? `${isCountdownComplete === true ? count > 0 ? "on" : "off" : "off"}` : "off"}>
                <span className="indicator-label">
                    <div className='d-flex align-items-center h-20px'>
                        {
                            icon.type === "class" ?
                                <i className={icon.class.name}>
                                    {icon.class.path.map((d, x) => { return (<i className={`path${d}`}></i>) })}
                                </i>
                                :
                                icon.html
                        }
                        {title}
                    </div>
                </span>
                {
                    indicator.status === true ?
                        <span className="indicator-progress">
                            {indicator.title} <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                        :
                        ""
                }
            </button>
        </>

    )


}