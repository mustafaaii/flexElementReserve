import { Route, Routes } from "react-router-dom";
import { FXE_route } from "./module/fxe-route";
import { useEffect } from "react";
import FXE_seo from "./module/fxe-seo";


import { FXE_about_new } from "./pages/about/new";
import { FXE_about_list } from "./pages/about/list";
import { FXE_dashboard_page } from "./pages/dashboard/page";
import { FXE_reservation_page } from "./pages/reservation/page";
import { FXE_language } from "./module/fxe-language";
import { FXE_product_new } from "./pages/product/new";
import { FXE_product_list } from "./pages/product/list";
import { FXE_seo_new } from "./pages/seo/new";
import { FXE_seo_list } from "./pages/seo/list";
import { FXE_slide_new } from "./pages/slide/new";
import { FXE_slide_list } from "./pages/slide/list";
import { FXE_advert_new } from "./pages/advert/new";
import { FXE_advert_list } from "./pages/advert/list";
import { FXE_service_new } from "./pages/service/new";
import { FXE_service_list } from "./pages/service/list";
import { FXE_setting_authory } from "./pages/setting/authory";
import { FXE_setting_email } from "./pages/setting/email";
import { FXE_sign_in } from "./pages/login/sign_in";
import { FXE_sign_up } from "./pages/login/sign_up";
import { FXE_blog_new } from "./pages/blog/new";
import { FXE_blog_list } from "./pages/blog/list";
import { FXE_menu_new } from "./pages/menu/new";
import { FXE_menu_list } from "./pages/menu/list";
import { FXE_setting_menu } from "./pages/setting/menu";
import { FXE_setting_company } from "./pages/setting/company";
import { FXE_create_company } from "./pages/create/create";
import { FXE_transactions } from "./pages/transactions/page";


function App() {

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
  return (
    <Routes>

      <Route path={`${FXE_route()}`} element={<FXE_dashboard_page />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("about"))}/${FXE_seo(FXE_language("new"))}`} element={<FXE_about_new />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("about"))}/${FXE_seo(FXE_language("list"))}`} element={<FXE_about_list />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("reservation"))}`} element={<FXE_reservation_page />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("product"))}/${FXE_seo(FXE_language("new"))}`} element={<FXE_product_new />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("product"))}/${FXE_seo(FXE_language("list"))}`} element={<FXE_product_list />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("seo"))}/${FXE_seo(FXE_language("new"))}`} element={<FXE_seo_new />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("seo"))}/${FXE_seo(FXE_language("list"))}`} element={<FXE_seo_list />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("slide"))}/${FXE_seo(FXE_language("new"))}`} element={<FXE_seo_new />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("slide"))}/${FXE_seo(FXE_language("list"))}`} element={<FXE_seo_list />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("advert"))}/${FXE_seo(FXE_language("new"))}`} element={<FXE_advert_new />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("advert"))}/${FXE_seo(FXE_language("list"))}`} element={<FXE_advert_list />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("service"))}/${FXE_seo(FXE_language("new"))}`} element={<FXE_service_new />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("service"))}/${FXE_seo(FXE_language("list"))}`} element={<FXE_service_list />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("setting"))}/${FXE_seo(FXE_language("authory"))}`} element={<FXE_setting_authory />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("setting"))}/${FXE_seo(FXE_language("email"))}`} element={<FXE_setting_email />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("setting"))}/${FXE_seo(FXE_language("menu"))}`} element={<FXE_setting_menu />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("setting"))}/${FXE_seo(FXE_language("company"))}`} element={<FXE_setting_company />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("blog"))}/${FXE_seo(FXE_language("new"))}`} element={<FXE_blog_new />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("blog"))}/${FXE_seo(FXE_language("list"))}`} element={<FXE_blog_list />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("document"))}/${FXE_seo(FXE_language("new"))}`} element={<FXE_blog_new />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("document"))}/${FXE_seo(FXE_language("list"))}`} element={<FXE_blog_list />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("menu"))}/${FXE_seo(FXE_language("new"))}`} element={<FXE_menu_new />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("menu"))}/${FXE_seo(FXE_language("list"))}`} element={<FXE_menu_list />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("login"))}/${FXE_seo(FXE_language("sign-in"))}`} element={<FXE_sign_in />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("login"))}/${FXE_seo(FXE_language("sign-up"))}`} element={<FXE_sign_up />} />
      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("create"))}/${FXE_seo(FXE_language("company"))}`} element={<FXE_create_company />} />

      <Route path={`${FXE_route()}/${FXE_seo(FXE_language("transactions"))}`} element={<FXE_transactions />} />
    </Routes>
  );
}
export default App;
