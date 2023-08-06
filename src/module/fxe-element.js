import React, { useEffect, useRef, useState } from "react"
import { FXE_language } from "./fxe-language";
import { FXE_input, FXE_select, FXE_text_editor } from "./fxe-item";
import TableIcon from "../assets/media/icon/table.svg"




export function FXE_calendar() {

    const [Toggle, setToggle] = useState(0)
    const [ReservationOpen, setReservationOpen] = useState(0);
    const [AppointmentOpen, setAppointmentOpen] = useState(0);
    const [TableOpen, setTableOpen] = useState(0);

    const [DrawerDate, setDrawerDate] = useState({ day: "", month: "", year: "" });
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const handleTodayClick = () => {
        const today = new Date();
        setCurrentMonth(today.getMonth());
        setCurrentYear(today.getFullYear());
    };
    const next = () => {
        setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear);
        setCurrentMonth((currentMonth + 1) % 12);
    };
    const previous = () => {
        setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear);
        setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
    };
    const daysInMonth = (iMonth, iYear) => {
        return 32 - new Date(iYear, iMonth, 32).getDate();
    };
    const getDaysOfWeek = () => {
        const startDayIndex = 1;
        return days.slice(startDayIndex).concat(days.slice(0, startDayIndex));
    };
    const showCalendar = (month, year) => {
        const firstDay = new Date(year, month, 1).getDay();
        const daysOfWeek = getDaysOfWeek();
        const calendarBody = Array.from({ length: 6 }, (_, rowIndex) => {
            const row = Array.from({ length: 7 }, (_, columnIndex) => {
                const dayIndex = rowIndex * 7 + columnIndex;
                const date = dayIndex - firstDay + 1;

                if (rowIndex === 0 && columnIndex < firstDay) {
                    return (
                        <td key={`empty-${columnIndex}`} className="test"></td>
                    );
                } else if (date > daysInMonth(month, year)) {
                    return null;
                } else {
                    return (

                        <td key={date} className={today.getDate() === date && year === today.getFullYear() && month === today.getMonth() ? "test" : "test"}>
                            <div className="row">
                                <div className="col-lg-12 h-25px">
                                    <div className="row">
                                        <div className="col-lg-3 d-flex justify-content-start">
                                            <div className="w-25px h-25px d-flex align-items-center justify-content-center" style={{ backgroundColor: `${today.getDate() === date && year === today.getFullYear() && month === today.getMonth() ? "#009ef7" : "#887"}`, color: "#fff" }}>
                                                {date}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 h-100px d-flex justify-content-center align-items-center" onClick={() => { setDrawerDate({ day: date, month: currentMonth, year: currentYear }); setReservationOpen(2000) }} style={{ padding: "15px" }}>
                                    <i className="ki-duotone ki-devices fs-3hx cursor-pointer">
                                        <i className="path1"></i>
                                        <i className="path2"></i>
                                        <i className="path3"></i>
                                        <i className="path4"></i>
                                        <i className="path5"></i>
                                    </i>
                                    {
                                        AllReservation(date, currentMonth + 1, currentYear) > 0 &&
                                        <div className="d-flex align-items-center justify-content-center shadow-sm fs-7" style={{ position: "absolute", backgroundColor: "#7239ea", color: "#fff", height: "24px", width: "24px", borderRadius: "50%", marginLeft: "35px", marginTop: "-35px" }}>
                                            {AllReservation(date, currentMonth + 1, currentYear)}
                                        </div>
                                    }

                                </div>

                            </div>
                            <div className="row" hidden>
                                <div className="d-flex">
                                    <div className="d-flex" style={{ border: "solid 1px #e9e9e9", width: "50%", backgroundColor: "#fcfcfc" }}>
                                        <span className="fw-semibold fs-7 ms-2 text-gray-500 h-30px d-flex align-items-center justify-content-center" style={{ width: "50%" }}>Aktif</span>
                                        <span className="fw-bold fs-5 ms-2 text-gray-700 h-30px d-flex align-items-center justify-content-end me-2" style={{ width: "50%" }}>{ActiveReservation(date, currentMonth + 1, currentYear)}</span>
                                    </div>
                                    <div className="d-flex" style={{ border: "solid 1px #e9e9e9", width: "50%", backgroundColor: "#fcfcfc" }}>
                                        <span className="fw-semibold fs-7 ms-2 text-gray-500 h-30px d-flex align-items-center justify-content-center" style={{ width: "50%" }}>Bekleyen</span>
                                        <span className="fw-bold fs-5 ms-2 text-gray-700 h-30px d-flex align-items-center justify-content-end me-2" style={{ width: "50%" }}>{WaitingReservation(date, currentMonth + 1, currentYear)}</span>
                                    </div>
                                </div>
                            </div>
                        </td>
                    );
                }
            });
            return <tr key={rowIndex}>{row}</tr>;
        });
        return calendarBody;
    };
    const handleMonthChange = (event) => {
        setCurrentMonth(parseInt(event));
    };
    const handleYearChange = (event) => {
        setCurrentYear(parseInt(event));
    };
    const renderMonthOptions = () => {
        var l = [];
        const r = months.map((month, index) => { return (l[index] = { id: (index), value: FXE_language(month) }) });
        return r;
    };
    const renderYearOptions = () => {
        const currentYear = new Date().getFullYear();
        const years = Array.from({ length: 10 }, (_, index) => currentYear - 5 + index);
        var l = [];
        const r = years.map((year, index) => { return (l[index] = { id: year, value: year }) });
        return r;
    };
    const data = [
        {
            id: 0,
            days: 3,
            mount: 8,
            year: 2023,
            persons: 3,
            child: 2,
            table: 2,
            time: "12:44",
            title: "Title Here 1",
            username: "Mustafa",
            surname: "Işık",
            description: <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </>,
            status: 1
        },
        {
            id: 1,
            days: 3,
            mount: 8,
            year: 2023,
            persons: 5,
            child: 1,
            table: 4,
            time: "12:44",
            title: "Title Here 1",
            username: "Mehmet",
            surname: "Kara",
            description: <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </>,
            status: 2
        },
        {
            id: 2,
            days: 12,
            mount: 8,
            year: 2023,
            persons: 5,
            child: 1,
            table: 4,
            time: "12:44",
            title: "Title Here 1",
            username: "Mehmet",
            surname: "Kara",
            description: <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </>,
            status: 2
        },
        {
            id: 3,
            days: 12,
            mount: 8,
            year: 2023,
            persons: 5,
            child: 1,
            table: 4,
            time: "12:44",
            title: "Title Here 1",
            username: "Mehmet",
            surname: "Kara",
            description: <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </>,
            status: 2
        },
        {
            id: 4,
            days: 12,
            mount: 8,
            year: 2023,
            persons: 5,
            child: 1,
            table: 4,
            time: "12:44",
            title: "Title Here 1",
            username: "Mehmet",
            surname: "Kara",
            description: <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </>,
            status: 2
        },
    ]
    const AllReservation = (d, m, y) => {
        const r = data.filter((f) => { return (parseInt(f.days) === d && parseInt(f.mount) === m && parseInt(f.year) === y) })
        if (r === undefined) {
            return 0;
        }
        else {
            return r.length
        }
    }
    const ActiveReservation = (d, m, y) => {
        const r = data.filter((f) => { return (parseInt(f.days) === d && parseInt(f.mount) === m && parseInt(f.year) === y) && f.status === 1 })
        if (r === undefined) {
            return 0;
        }
        else {
            return r.length
        }
    }
    const WaitingReservation = (d, m, y) => {
        const r = data.filter((f) => { return (parseInt(f.days) === d && parseInt(f.mount) === m && parseInt(f.year) === y) && f.status === 2 })
        if (r === undefined) {
            return 0;
        }
        else {
            return r.length
        }
    }
    const calenderList = (d, m, y) => {
        const Status = (e) => {
            if (e === 0) {
                return "text-danger"
            }
            if (e === 1) {
                return "text-success"
            }

            if (e === 2) {
                return "text-warning"
            }
        }
        const f = data.filter((f) => { return (parseInt(f.days) === d && parseInt(f.mount) === m && parseInt(f.year) === y) })
        if (f.length === 0) {
            return <>
                <div className="d-flex align-items-end justify-content-center " style={{ width: "100%", height: "50%" }}>
                    <i className="ki-duotone ki-dropbox fs-4hx">
                        <i className="path1"></i>
                        <i className="path2"></i>
                        <i className="path3"></i>
                        <i className="path4"></i>
                        <i className="path5"></i>
                    </i>
                </div>
                <div className="d-flex align-items-start justify-content-center " style={{ width: "100%", height: "50%" }}>
                    <span className="fw-semibold fs-4 mt-4 text-gray-500">Bu Tarihte Randevunuz Yok</span>
                </div>
            </>;
        }
        else {
            const r = f.map((d, x) => {
                return (
                    <div key={`reservation_${d.id}_list_${x}`} className="col-lg-12">
                        <div className="card-header cursor-pointer" onClick={() => { Toggle === (x + 1) ? setToggle(0) : setToggle(x + 1) }} style={{ minHeight: "40px", backgroundColor: `#f2f2f266`, display: "block", paddingLeft: "20px", color: "#a1a5b7", border: "solid 1px #e7e7e7", borderRadius: "0px" }}>
                            <div className="row">
                                <div className="col-lg-5 h-40px d-flex align-items-center justify-content-start">
                                    <i className="ki-duotone ki-user-square fs-2 me-1">
                                        <i className="path1"></i>
                                        <i className="path2"></i>
                                        <i className="path3"></i>
                                    </i>
                                    <span className="fs-4 fw-semibold mt-1">{d.username} {d.surname}</span>
                                </div>
                                <div className="col-lg-3 h-40px d-flex align-items-center justify-content-end">
                                    <i className="ki-duotone ki-time fs-2 me-1">
                                        <i className="path1"></i>
                                        <i className="path2"></i>
                                    </i>
                                    <div className="fs-6 fw-semibold"> {d.time}</div>
                                </div>
                                <div className="col-lg-3 h-40px d-flex align-items-center justify-content-end">
                                    <i className="ki-duotone ki-calendar-tick fs-2 me-1">
                                        <i className="path1"></i>
                                        <i className="path2"></i>
                                        <i className="path3"></i>
                                        <i className="path4"></i>
                                        <i className="path5"></i>
                                        <i className="path6"></i>
                                    </i>
                                    <div className="fs-6 fw-semibold">{d.days} {FXE_language(months[d.mount] === undefined ? "" : months[d.mount])} {d.year}</div>
                                </div>
                                <div className="col-lg-1 h-40px d-flex align-items-center justify-content-end">
                                    <i className={`ki-duotone ki-check-circle fs-2hx ${Status(d.status)} me-1`} style={{ position: "relative", right: "-22px" }}>
                                        <i className="path1"></i>
                                        <i className="path2"></i>
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div className="card border mb-2" style={{ height: `${Toggle === (x + 1) ? "auto" : "0px"}`, overflow: `${Toggle === (x + 1) ? "" : "auto"}`, visibility: `${Toggle === (x + 1) ? "visible" : "hidden"}`, borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="card-title align-items-start border p-5" style={{ borderRadius: "10px", boxShadow: "0px 0px 6px 2px #cccccca1" }}>
                                            <div className="text-gray-500 fw-semibold fs-5 d-flex align-items-center justify-content-center">
                                                <i className="ki-duotone ki-profile-user fs-2hx">
                                                    <i className="path1"></i>
                                                    <i className="path2"></i>
                                                    <i className="path3"></i>
                                                    <i className="path4"></i>
                                                </i>
                                            </div>
                                            <div className="text-gray-500 fw-bold fs-1 d-flex align-items-center justify-content-center">{d.table}</div>
                                            <div className="card-label fw-semibold text-gray-500 fs-6 d-flex align-items-center justify-content-center">Masa Numarası</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="card-title align-items-start border p-5" style={{ borderRadius: "10px", boxShadow: "0px 0px 6px 2px #cccccca1" }}>
                                            <div className="text-gray-500 fw-semibold fs-5 d-flex align-items-center justify-content-center">
                                                <i className="ki-duotone ki-profile-user fs-2hx">
                                                    <i className="path1"></i>
                                                    <i className="path2"></i>
                                                    <i className="path3"></i>
                                                    <i className="path4"></i>
                                                </i>
                                            </div>
                                            <div className="text-gray-500 fw-semibold fs-1 d-flex align-items-center justify-content-center">{d.child}</div>
                                            <div className="card-label fw-semibold text-gray-500 fs-6 d-flex align-items-center justify-content-center">Çocuk Sayısı</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="card-title align-items-start border p-5" style={{ borderRadius: "10px", boxShadow: "0px 0px 6px 2px #cccccca1" }}>
                                            <div className="text-gray-500 fw-semibold fs-5 d-flex align-items-center justify-content-center">
                                                <i className="ki-duotone ki-profile-user fs-2hx">
                                                    <i className="path1"></i>
                                                    <i className="path2"></i>
                                                    <i className="path3"></i>
                                                    <i className="path4"></i>
                                                </i>
                                            </div>
                                            <div className="text-gray-500 fw-semibold fs-1 d-flex align-items-center justify-content-center">{d.persons}</div>
                                            <div className="card-label fw-semibold text-gray-500 fs-6 d-flex align-items-center justify-content-center">Kişi Sayısı</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-10">
                                        <div className="fs-6 fw-semibold text-gray-500">{d.title}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mt-2">
                                        <div className="fs-6 fw-semibold">{d.description}</div>
                                    </div>
                                </div>
                            </div>
                            {
                                d.status === 1 &&
                                <div className="card-footer cursor-pointer" style={{ height: "50px", backgroundColor: `#fff`, display: "block", padding: "0 2.25rem" }}>
                                    <div className="row">
                                        <div className="col-lg-12 h-50px d-flex align-items-center justify-content-end">
                                            <button className="btn btn-danger btn-sm ms-1">{FXE_language("Pasive")}</button>
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                d.status === 2 &&
                                <div className="card-footer cursor-pointer" style={{ height: "50px", backgroundColor: `#fff`, display: "block", padding: "0 2.25rem" }}>
                                    <div className="row">
                                        <div className="col-lg-12 h-50px d-flex align-items-center justify-content-end">
                                            <button className="btn btn-success btn-sm ms-1 me-1">{FXE_language("Approve")}</button>
                                        </div>
                                    </div>
                                </div>
                            }


                        </div>
                    </div>
                )
            })

            return <div className="row">
                <div className="col-lg-12">
                    <FXE_input title={""} placeholder={`${FXE_language("appointment")} ${FXE_language("search")} ...`} value={""} response={(e) => { console.log(e) }} container={{ class: "mb-5" }} />
                </div>
                {r}
            </div>
        }




    }

    return (
        <>
            <div className="row mb-2">
                <div className="col-lg-2 d-flex align-items-center">
                    <h1 id="monthAndYear" className="fw-bold fs-3">{FXE_language(months[currentMonth])}  {currentYear}</h1>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-1">
                    <button className="btn btn-primary btn-sm ms-1 me-1" style={{ height: "43.56px", width: "100%" }} onClick={() => { setAppointmentOpen(3000) }}>
                        <i className="ki-duotone ki-plus fs-2"></i>{FXE_language("New")}
                    </button>
                </div>
                <div className="col-lg-1">
                    <button className="btn btn-info btn-sm ms-1 me-1 w-100px" style={{ height: "43.56px" }} onClick={handleTodayClick}>
                        <i className="ki-duotone ki-calendar fs-2">
                            <i className="path1"></i>
                            <i className="path2"></i>
                        </i>
                        {FXE_language("Today")}
                    </button>
                </div>
                <div className="col-lg-2">
                    <FXE_select
                        data={renderMonthOptions()}
                        selected={""}
                        attribute={["id", "value"]}
                        title={""}
                        placeholder={"Sector"}
                        response={(e) => { handleMonthChange(e.id); console.log(e.id) }}
                        required={true}
                        container={{ class: "" }}
                        searchPlaceholder={"Sektör Ara"}
                        disabled={false}
                        classname={"form-control"}
                    />
                </div>
                <div className="col-lg-2">
                    <FXE_select
                        data={renderYearOptions()}
                        selected={""}
                        attribute={["id", "value"]}
                        title={""}
                        placeholder={"Sector"}
                        response={(e) => { handleYearChange(e.id) }}
                        required={true}
                        container={{ class: "" }}
                        searchPlaceholder={"Sektör Ara"}
                        disabled={false}
                        classname={"form-control"}
                    />
                </div>
                <div className="col-lg-2 d-flex justify-content-end">
                    <button className="btn btn-primary btn-sm ms-1 me-1" style={{ height: "43.56px" }} onClick={previous}>
                        <i className="ki-duotone ki-to-left fs-2"></i>
                        {FXE_language("Previous")}
                    </button>
                    <button className="btn btn-primary btn-sm ms-1 me-1" style={{ height: "43.56px" }} onClick={next}>
                        {FXE_language("Next")}
                        <i className="ki-duotone ki-to-right fs-2"></i>
                    </button>
                </div>
                <div className="col-lg-12 mt-2">
                    <table style={{ width: "100%" }}>
                        <thead>
                            <tr>
                                {days.map((day, index) => (<th key={index} className="test2">{FXE_language(day)} </th>))}
                            </tr>
                        </thead>
                        <tbody id="calendar-body">
                            {showCalendar(currentMonth, currentYear)}
                        </tbody>
                    </table>
                </div>
            </div>
            <FXE_drawer
                prompt={2000}
                width={600}
                title={DrawerDate.day + " " + FXE_language(months[DrawerDate.month] === undefined ? "" : months[DrawerDate.month]) + " " + DrawerDate.year + " " + FXE_language("Appointments")}
                open={ReservationOpen}
                close={(e) => { setReservationOpen(e) }}
                data={calenderList(DrawerDate.day, DrawerDate.month + 1, DrawerDate.year)}
                overflow={true}
            />

            <FXE_drawer
                prompt={3000}
                width={600}
                title={FXE_language("New") + " " + FXE_language("Appointment")}
                open={AppointmentOpen}
                close={(e) => { setAppointmentOpen(e) }}
                data={
                    <div className="row">
                        <div className="col-lg-9">
                            <FXE_input type={"text"} title={"Randevu Başlığı"} placeholder={`Randevu Başlığı`} value={""} response={(e) => { console.log(e) }} container={{ class: "mb-5" }} />
                        </div>
                        <div className="col-lg-3">
                            <div className="mb-8"></div>
                            <button className="btn btn-primary" style={{ width: "100%" }} onClick={() => { setTableOpen(4000) }}>Masa Seç</button>
                        </div>
                        <div className="col-lg-6">
                            <FXE_select
                                data={[{ id: 1, value: "Evet" }, { id: 2, value: "Hayır" }]}
                                selected={""}
                                attribute={["id", "value"]}
                                title={"Çocuk Var mı ?"}
                                placeholder={"Çocuk Durumunu Seçiniz"}
                                response={(e) => { console.log(e) }}
                                required={false}
                                container={{ class: "mb-5" }}
                            />
                        </div>
                        <div className="col-lg-6">
                            <FXE_input type={"number"} title={"Çocuk Sayısı"} placeholder={`Çocuk Sayısı`} value={""} response={(e) => { console.log(e) }} container={{ class: "mb-5" }} />
                        </div>
                        <div className="col-lg-12">
                            <FXE_input type={"number"} title={"Kişi Sayısı"} placeholder={`Kişi Sayısı`} value={""} response={(e) => { console.log(e) }} container={{ class: "mb-5" }} />
                        </div>
                        <div className="col-lg-12">
                            <FXE_text_editor title={"Randevu Açıklaması"} response={(e) => { console.log(e) }} container={{ class: "mb-5" }} />
                        </div>

                    </div>
                }
                overflow={true}
            />





            <FXE_drawer
                prompt={4000}
                width={1100}
                title={"Masa Seç"}
                open={TableOpen}
                close={(e) => { setTableOpen(e) }}
                data={
                    <>
                        <div className="row">

                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35].map((d, x) => {
                                    return (
                                        <div className="col-lg-2 mb-5">
                                            <div

                                                className="cursor-pointer"
                                                style={{
                                                    backgroundColor: "#ffffff",
                                                    border: "solid 1px #f5f5f5",
                                                    height: "150px",
                                                    width: "100%",
                                                    backgroundImage: `url(${TableIcon})`,
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundPosition: "center",
                                                }}>
                                                <div className="row">
                                                    <div className="col-lg-12 d-flex h-75px align-items-start">
                                                        <div className="fw-semibold"></div>
                                                    </div>
                                                    <div className="col-lg-12 d-flex h-75px align-items-end">
                                                        <div
                                                            className="fw-semibold"
                                                            style={{
                                                                backgroundColor: "#f4f4f4",
                                                                height: "25px",
                                                                width: "100%",
                                                                display: "flex",
                                                                textAlign: "center",
                                                                justifyContent: "center",
                                                                borderBottomRightRadius: "5px",
                                                                border: "solid 1px #f5f5f5",
                                                            }}>
                                                            Masa {d}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </>
                }
                overflow={true}
            />
        </>
    );
};
export function FXE_drawer({ data, title, open, close, width, overflow, prompt }) {

    return (
        <>

            <div
                className={`bg-white drawer drawer-end ${open === prompt ? "drawer-on" : ""}`}
                data-kt-drawer="true"
                data-kt-drawer-activate="true"
                data-kt-drawer-toggle="#kt_drawer_example_basic_button"
                data-kt-drawer-close="#kt_drawer_example_basic_close"
                data-kt-drawer-width="500px"
                style={{ width: `${width}px` }}
            >
                <div className="card w-100 rounded-0">
                    <div className="card-header pe-5">
                        <div className="card-title">
                            <div className="d-flex justify-content-center flex-column me-3">
                                <a href="#" className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 lh-1">{title}</a>
                            </div>
                        </div>
                        <div className="card-toolbar">
                            <div className="btn btn-sm btn-icon btn-active-light-primary">
                                <i className="ki-duotone ki-cross fs-2 cursor-pointer" onClick={() => { close(0) }}>
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </div>
                        </div>
                    </div>
                    <div className="card-body hover-scroll-overlay-y">
                        {data}
                    </div>
                </div>
            </div>

            {overflow === true && open === prompt ? <div className="drawer-overlay" onClick={() => { close(0) }} style={{ zIndex: 109 }}></div> : ""}

        </>

    )
}