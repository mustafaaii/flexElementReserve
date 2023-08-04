
import "../assets/css/style.bundle.css";
import "../assets/plugins/global/plugins.bundle.css";
import { ToastContainer } from "react-toastify";
import { FXE_header } from "../module/fxe-header";
import { FXE_sidebar } from "../module/fxe-sidebar";
import { FXE_toolbar } from "../module/fxe-toolbar";

export function FXE_layout({ children }) {
    return (
        <div className="d-flex flex-column flex-root app-root">
            <div className="app-page flex-column flex-column-fluid">
                <FXE_header />
                <div className="app-wrapper flex-column flex-row-fluid">
                    <FXE_sidebar />
                    <div className="app-main flex-column flex-row-fluid">
                        <div className="d-flex flex-column flex-column-fluid">
                            <FXE_toolbar />
                            <div className="app-content flex-column-fluid">
                                <div className="app-container container-fluid">
                                    <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}