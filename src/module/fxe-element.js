import React, { useEffect, useRef, useState } from "react"
import { FXE_language } from "./fxe-language";





export function FXE_calendar() {
    const [DrawerOpen, setDrawerOpen] = useState(0);
    const [DrawerDate, setDrawerDate] = useState({ day: "", month: "", year: "" });
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
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
                                <div className="col-lg-12 h-100px d-flex justify-content-center align-items-center" onClick={() => { setDrawerDate({ day: date, month: months[currentMonth], year: currentYear }); setDrawerOpen(1) }} style={{ padding: "15px" }}>
                                    <i className="ki-duotone ki-gear fs-3hx cursor-pointer">
                                        <i className="path1"></i>
                                        <i className="path2"></i>
                                    </i>
                                </div>
                                <div className="col-lg-12 h-50px d-flex">
                                    <div className=" d-flex justify-content-center align-items-center" style={{ width: "100%", height: "50px", backgroundColor: "#efefef" }}>
                                        <i className="ki-duotone ki-gear fs-2 cursor-pointer">
                                            <i className="path1"></i>
                                            <i className="path2"></i>
                                        </i>
                                        12
                                    </div>
                                    <div className=" d-flex justify-content-center align-items-center" style={{ width: "100%", height: "50px", backgroundColor: "#efefef" }}>
                                        <i className="ki-duotone ki-gear fs-2 cursor-pointer">
                                            <i className="path1"></i>
                                            <i className="path2"></i>
                                        </i>
                                        12
                                    </div>
                                    <div className=" d-flex justify-content-center align-items-center" style={{ width: "100%", height: "50px", backgroundColor: "#efefef" }}>
                                        <i className="ki-duotone ki-gear fs-2 cursor-pointer">
                                            <i className="path1"></i>
                                            <i className="path2"></i>
                                        </i>
                                        12
                                    </div>
                                    <div className=" d-flex justify-content-center align-items-center" style={{ width: "100%", height: "50px", backgroundColor: "#efefef" }}>
                                        <i className="ki-duotone ki-gear fs-2 cursor-pointer">
                                            <i className="path1"></i>
                                            <i className="path2"></i>
                                        </i>
                                        12
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
        setCurrentMonth(parseInt(event.target.value));
    };
    const handleYearChange = (event) => {
        setCurrentYear(parseInt(event.target.value));
    };
    const renderMonthOptions = () => {
        return months.map((month, index) => (
            <option key={index} value={index}>
                {FXE_language(month)}

            </option>
        ));
    };
    const renderYearOptions = () => {
        const currentYear = new Date().getFullYear();
        const years = Array.from({ length: 10 }, (_, index) => currentYear - 5 + index);
        return years.map((year) => (
            <option key={year} value={year}>
                {year}
            </option>
        ));
    };

    return (
        <>




            <div className="row mb-2">
                <div className="col-lg-2 d-flex align-items-center">
                    <h1 id="monthAndYear" className="fw-bold fs-3">{FXE_language(months[currentMonth])}  {currentYear}</h1>
                </div>
                <div className="col-lg-6 d-flex justify-content-end">

                </div>
                <div className="col-lg-4 d-flex justify-content-end">
                    <button className="btn btn-info btn-sm ms-1 me-1 w-100px" onClick={handleTodayClick}>{FXE_language("Today")}</button>
                    <select className="form-select ms-1 me-1" value={currentMonth} onChange={handleMonthChange}>
                        {renderMonthOptions()}
                    </select>
                    <select className="form-select ms-1 me-1" value={currentYear} onChange={handleYearChange}>
                        {renderYearOptions()}
                    </select>
                    <button className="btn btn-primary btn-sm ms-1 me-1 w-100px" onClick={previous}>{FXE_language("Previous")}</button>
                    <button className="btn btn-primary btn-sm ms-1 w-100px" onClick={next}>{FXE_language("Next")}</button>
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

            {/* FXE_drawer ve diğer bileşenler */}
        </>
    );
};




export function FXE_drawer({ data, title, open, close, width, response, overflow }) {

    return (
        <>
            <div
                className={`bg-white drawer drawer-end ${open === 1 ? "drawer-on" : ""}`}
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

            {overflow === true && open === 1 ? <div className="drawer-overlay" onClick={() => { close(0) }} style={{ zIndex: 109 }}></div> : ""}

        </>

    )
}