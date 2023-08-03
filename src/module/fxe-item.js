import { useState } from "react"

export function FXE_input({ id, name, title, type, value, placeholder, response, required, container }) {

    return (
        <div className={container.class}>
            <label htmlFor={id} className="form-label">{title}</label>
            <input id={id} name={name} type={type} className="form-control" placeholder={placeholder} value={value} onChange={(e) => { response(e.target.value) }} required={required} />
        </div>
    )
}



export function FXE_textarea({ id, name, title, type, value, placeholder, response, required, container }) {
    return (
        <div className={container.class}>
            <label htmlFor={id} className="form-label">{title}</label>
            <textarea id={id} name={name} type={type} className="form-control" placeholder={placeholder} value={value} onChange={(e) => { response(e.target.value) }} required={required}></textarea>
        </div>
    )
}



export function FXE_select({ data, selected, attribute, title, placeholder, response, required, container }) {
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
            return (
                <i className="ki-duotone ki-down fs-1 cursor-pointer" style={{ position: "relative", float: "right", marginTop: "-32px", marginRight: "10px" }}></i>
            )
        }
        else {
            return (
                <i
                    className="ki-duotone ki-cross-circle fs-1 cursor-pointer"
                    onClick={() => {
                        setSelectItem([{ [attribute[0]]: 0, [attribute[1]]: "" }]);
                    }}
                    style={{ position: "relative", float: "right", marginTop: "-32px", marginRight: "10px" }}
                >
                    <i className="path1"></i>
                    <i className="path2"></i>
                </i>
            )
        }

    }
    const Modal = () => {
        return data.map((d, x) => {
            return (
                <div
                    key={`fxe_list_${d[attribute[0]]}_${x}`}
                    className={`fxe_signle_select_item ${SelectItem[0][attribute[0]] === d[attribute[0]] && "active"}`}
                    onClick={() => { setSelectItem([{ [attribute[0]]: d[attribute[0]], [attribute[1]]: d[attribute[1]] }]); }}>
                    <div className="row">
                        <div className="col-lg-9 h-50px d-flex align-items-center justify-content-start">
                            {d[attribute[1]]}
                        </div>
                        {
                            SelectItem[0][attribute[0]] === d[attribute[0]] &&
                            <div className="col-lg-3 h-50px d-flex align-items-center justify-content-end">
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
    return (
        <div className={container.class}>
            <label className="form-label">{title}</label>
            <div className="fxe_signle_select_container">
                <div className="fxe_signle_select_input cursor-pointer" onClick={() => { Active === 0 ? setActive(1) : setActive(0) }}>
                    {SelectItem[0][attribute[1]] === "" ? <div className="text-gray-500">{placeholder}</div> : SelectItem[0][attribute[1]]}
                </div>
                <div className="fxe_signle_select_close">
                    {Input()}
                </div>
                <div className={`fxe_signle_select_modal ${Active === 1 ? "active" : ""}`}>
                    {Modal()}
                </div>
                {Active === 0 ? "" : <div className="fxe_signle_select_modal_overlay" onClick={() => { setActive(0) }}></div>}
            </div>
        </div >
    )
}