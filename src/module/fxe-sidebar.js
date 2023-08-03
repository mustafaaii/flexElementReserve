import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { FXE_language } from "./fxe-language";
import FXE_seo from "./fxe-seo";

export function FXE_sidebar() {


    const route = "";
    const [Active, setActive] = useState(0)

    useEffect(() => {
        document.body.removeAttribute("style")
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
        document.body.setAttribute("data-bs-theme", "light")
    }, []);


    const Menu = [
        {
            id: 0,
            title: FXE_language("dashboard"),
            path: `${route}`,
            icon: <>
                <i className="ki-duotone ki-check-square fs-2">
                    <i className="path1"></i>
                    <i className="path2"></i>
                </i>
            </>,
            subs: []
        },
        {
            id: 2,
            title: FXE_language("reservation"),
            path: `${route}/${FXE_language("reservation")}`,
            icon: <>
                <i className="ki-duotone ki-check-square fs-2">
                    <i className="path1"></i>
                    <i className="path2"></i>
                </i>
            </>,
            subs: []
        },
        {
            id: 11,
            title: FXE_language("menus"),
            path: FXE_language("menus"),
            icon: <>
                <i className="ki-duotone ki-directbox-default fs-2">
                    <i className="path1"></i>
                    <i className="path2"></i>
                    <i className="path3"></i>
                    <i className="path4"></i>
                </i>
            </>,
            subs: [
                {
                    id: 111,
                    title: FXE_language("new"),
                    path: `${route}/${FXE_seo(FXE_language("menu").toLowerCase())}/${FXE_language("new").toLowerCase()}`,
                },
                {
                    id: 112,
                    title: FXE_language("list"),
                    path: `${route}/${FXE_seo(FXE_language("menu").toLowerCase())}/${FXE_language("list").toLowerCase()}`,
                },
            ]
        },
        {
            id: 3,
            title: FXE_language("product"),
            path: FXE_language("product"),
            icon: <>
                <i className="ki-duotone ki-directbox-default fs-2">
                    <i className="path1"></i>
                    <i className="path2"></i>
                    <i className="path3"></i>
                    <i className="path4"></i>
                </i>
            </>,
            subs: [
                {
                    id: 31,
                    title: FXE_language("new"),
                    path: `${route}/${FXE_seo(FXE_language("product").toLowerCase())}/${FXE_language("new").toLowerCase()}`,
                },
                {
                    id: 32,
                    title: FXE_language("list"),
                    path: `${route}/${FXE_seo(FXE_language("product").toLowerCase())}/${FXE_language("list").toLowerCase()}`,
                },
            ]
        },
        {
            id: 4,
            title: FXE_language("seo"),
            path: FXE_language("seo"),
            icon: <>
                <i className="ki-duotone ki-directbox-default fs-2">
                    <i className="path1"></i>
                    <i className="path2"></i>
                    <i className="path3"></i>
                    <i className="path4"></i>
                </i>
            </>,
            subs: [
                {
                    id: 41,
                    title: FXE_language("new"),
                    path: `${route}/${FXE_seo(FXE_language("seo").toLowerCase())}/${FXE_language("new").toLowerCase()}`,
                },
                {
                    id: 42,
                    title: FXE_language("list"),
                    path: `${route}/${FXE_seo(FXE_language("seo").toLowerCase())}/${FXE_language("list").toLowerCase()}`,
                },
            ]
        },
        {
            id: 5,
            title: FXE_language("slide"),
            path: FXE_language("slide"),
            icon: <>
                <i className="ki-duotone ki-directbox-default fs-2">
                    <i className="path1"></i>
                    <i className="path2"></i>
                    <i className="path3"></i>
                    <i className="path4"></i>
                </i>
            </>,
            subs: [
                {
                    id: 51,
                    title: FXE_language("new"),
                    path: `${route}/${FXE_seo(FXE_language("slide").toLowerCase())}/${FXE_language("new").toLowerCase()}`,
                },
                {
                    id: 52,
                    title: FXE_language("list"),
                    path: `${route}/${FXE_seo(FXE_language("slide").toLowerCase())}/${FXE_language("list").toLowerCase()}`,
                },
            ]
        },
        {
            id: 6,
            title: FXE_language("advert"),
            path: FXE_language("advert"),
            icon: <>
                <i className="ki-duotone ki-directbox-default fs-2">
                    <i className="path1"></i>
                    <i className="path2"></i>
                    <i className="path3"></i>
                    <i className="path4"></i>
                </i>
            </>,
            subs: [
                {
                    id: 61,
                    title: FXE_language("new"),
                    path: `${route}/${FXE_seo(FXE_language("advert").toLowerCase())}/${FXE_language("new").toLowerCase()}`,
                },
                {
                    id: 62,
                    title: FXE_language("list"),
                    path: `${route}/${FXE_seo(FXE_language("advert").toLowerCase())}/${FXE_language("list").toLowerCase()}`,
                },
            ]
        },
        {
            id: 7,
            title: FXE_language("services"),
            path: FXE_language("services"),
            icon: <>
                <i className="ki-duotone ki-directbox-default fs-2">
                    <i className="path1"></i>
                    <i className="path2"></i>
                    <i className="path3"></i>
                    <i className="path4"></i>
                </i>
            </>,
            subs: [
                {
                    id: 71,
                    title: FXE_language("new"),
                    path: `${route}/${FXE_seo(FXE_language("service").toLowerCase())}/${FXE_language("new").toLowerCase()}`,
                },
                {
                    id: 72,
                    title: FXE_language("list"),
                    path: `${route}/${FXE_seo(FXE_language("service").toLowerCase())}/${FXE_language("list").toLowerCase()}`,
                },
            ]
        },
        {
            id: 8,
            title: FXE_language("settings"),
            path: FXE_language("settings"),
            icon: <>
                <i className="ki-duotone ki-directbox-default fs-2">
                    <i className="path1"></i>
                    <i className="path2"></i>
                    <i className="path3"></i>
                    <i className="path4"></i>
                </i>
            </>,
            subs: [
                {
                    id: 81,
                    title: FXE_language("authory"),
                    path: `${route}/${FXE_seo(FXE_language("setting").toLowerCase())}/${FXE_seo(FXE_language("authory").toLowerCase())}`,
                },
                {
                    id: 82,
                    title: FXE_language("email"),
                    path: `${route}/${FXE_seo(FXE_language("setting").toLowerCase())}/${FXE_seo(FXE_language("email").toLowerCase())}`,
                },
                {
                    id: 83,
                    title: FXE_language("menu"),
                    path: `${route}/${FXE_seo(FXE_language("setting").toLowerCase())}/${FXE_seo(FXE_language("menu").toLowerCase())}`,
                },
            ]
        },
        {
            id: 9,
            title: FXE_language("blog"),
            path: FXE_language("blog"),
            icon: <>
                <i className="ki-duotone ki-directbox-default fs-2">
                    <i className="path1"></i>
                    <i className="path2"></i>
                    <i className="path3"></i>
                    <i className="path4"></i>
                </i>
            </>,
            subs: [
                {
                    id: 91,
                    title: FXE_language("new"),
                    path: `${route}/${FXE_seo(FXE_language("blog").toLowerCase())}/${FXE_language("new").toLowerCase()}`,
                },
                {
                    id: 92,
                    title: FXE_language("list"),
                    path: `${route}/${FXE_seo(FXE_language("blog").toLowerCase())}/${FXE_language("list").toLowerCase()}`,
                },
            ]
        },
        {
            id: 10,
            title: FXE_language("documents"),
            path: FXE_language("documents"),
            icon: <>
                <i className="ki-duotone ki-directbox-default fs-2">
                    <i className="path1"></i>
                    <i className="path2"></i>
                    <i className="path3"></i>
                    <i className="path4"></i>
                </i>
            </>,
            subs: [
                {
                    id: 101,
                    title: FXE_language("new"),
                    path: `${route}/${FXE_seo(FXE_language("document").toLowerCase())}/${FXE_language("new").toLowerCase()}`,
                },
                {
                    id: 102,
                    title: FXE_language("list"),
                    path: `${route}/${FXE_seo(FXE_language("document").toLowerCase())}/${FXE_language("list").toLowerCase()}`,
                },
            ]
        },
    ]

    const ActiveUrl = (path) => {
        const result = Menu.find((item) => { return (item.path === path) })
        if (result !== undefined) {
            const s = result.subs.find((item) => { return (item.path === window.location.pathname) })
            if (s !== undefined) {
                return s.path
            }
        }
    }

    return (
        <>
            <div className="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="225px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
                <div className="app-sidebar-logo px-6">
                    <Link to="">
                        <img alt="Logo" src="assets/media/logos/default-dark.svg" className="h-25px app-sidebar-logo-default" />
                        <img alt="Logo" src="assets/media/logos/default-small.svg" className="h-20px app-sidebar-logo-minimize" />
                    </Link>
                    <div className="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary body-bg h-30px w-30px position-absolute top-50 start-100 translate-middle rotate" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="app-sidebar-minimize">
                        <i className="ki-duotone ki-double-left fs-2 rotate-180">
                            <span className="path1"></span>
                            <span className="path2"></span>
                        </i>
                    </div>
                </div>
                <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
                    <div className="app-sidebar-wrapper hover-scroll-overlay-y my-5" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer" data-kt-scroll-wrappers="#kt_app_sidebar_menu" data-kt-scroll-offset="5px" data-kt-scroll-save-state="true">
                        <div className="menu menu-column menu-rounded menu-sub-indention px-3" data-kt-menu="true" data-kt-menu-expand="false">
                            {
                                Menu.map((m, i) => {
                                    return (
                                        m.subs.length === 0 ?
                                            <div key={`sidebar_${m.id}_list_${i}`} className="menu-item">
                                                <Link className={`menu-link ${window.location.pathname === m.path ? "active" : ""}`} to={m.path.toLowerCase()}>
                                                    <span className="menu-icon">{m.icon}</span>
                                                    <span className="menu-title">{m.title}</span>
                                                </Link>
                                            </div>
                                            :
                                            <div key={`sidebarsub_${m.id}_list_${i}`} className={`menu-item menu-accordion  ${Active === m.id || ActiveUrl(m.path) === window.location.pathname ? "show here" : ""}`} onClick={() => { !Active ? setActive(m.id) : setActive(0) }}>
                                                <span className={`menu-link`}>
                                                    <span className="menu-icon">{m.icon}</span>
                                                    <span className="menu-title">{m.title}</span>
                                                    <span className="menu-arrow"></span>
                                                </span>
                                                <div className={`menu-sub menu-sub-accordion ${Active === m.id || ActiveUrl(m.path) === window.location.pathname ? "show" : ""}`}>
                                                    {
                                                        m.subs.map((s, n) => {
                                                            return (
                                                                <div key={`sidebarsub_${s.id}_list_${n}`} className={`menu-item`}>
                                                                    <Link className={`menu-link ${ActiveUrl(m.path) === s.path ? "active" : ""}`} to={s.path.toLowerCase()}>
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot"></span>
                                                                        </span>
                                                                        <span className="menu-title">{s.title}</span>
                                                                    </Link>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                    )
                                })


                            }















                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}