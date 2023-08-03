import { Route, Routes } from "react-router-dom";
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
import FXE_seo from "./module/fxe-seo";
import { FXE_menu_new } from "./pages/menu/new";
import { FXE_menu_list } from "./pages/menu/list";
import { FXE_setting_menu } from "./pages/setting/menu";


function App() {


  const route = "/";
  return (
    <Routes>

      <Route path={`${route}`} element={<FXE_dashboard_page />} />

      <Route path={`${route}/${FXE_seo(FXE_language("about").toLowerCase())}/${FXE_seo(FXE_language("new").toLowerCase())}`} element={<FXE_about_new />} />
      <Route path={`${route}/${FXE_seo(FXE_language("about").toLowerCase())}/${FXE_seo(FXE_language("list").toLowerCase())}`} element={<FXE_about_list />} />

      <Route path={`${route}/${FXE_seo(FXE_language("reservation").toLowerCase())}`} element={<FXE_reservation_page />} />

      <Route path={`${route}/${FXE_seo(FXE_language("product").toLowerCase())}/${FXE_seo(FXE_language("new").toLowerCase())}`} element={<FXE_product_new />} />
      <Route path={`${route}/${FXE_seo(FXE_language("product").toLowerCase())}/${FXE_seo(FXE_language("list").toLowerCase())}`} element={<FXE_product_list />} />

      <Route path={`${route}/${FXE_seo(FXE_language("seo").toLowerCase())}/${FXE_seo(FXE_language("new").toLowerCase())}`} element={<FXE_seo_new />} />
      <Route path={`${route}/${FXE_seo(FXE_language("seo").toLowerCase())}/${FXE_seo(FXE_language("list").toLowerCase())}`} element={<FXE_seo_list />} />

      <Route path={`${route}/${FXE_seo(FXE_language("slide").toLowerCase())}/${FXE_seo(FXE_language("new").toLowerCase())}`} element={<FXE_seo_new />} />
      <Route path={`${route}/${FXE_seo(FXE_language("slide").toLowerCase())}/${FXE_seo(FXE_language("list").toLowerCase())}`} element={<FXE_seo_list />} />

      <Route path={`${route}/${FXE_seo(FXE_language("advert").toLowerCase())}/${FXE_seo(FXE_language("new").toLowerCase())}`} element={<FXE_advert_new />} />
      <Route path={`${route}/${FXE_seo(FXE_language("advert").toLowerCase())}/${FXE_seo(FXE_language("list").toLowerCase())}`} element={<FXE_advert_list />} />

      <Route path={`${route}/${FXE_seo(FXE_language("service").toLowerCase())}/${FXE_seo(FXE_language("new").toLowerCase())}`} element={<FXE_service_new />} />
      <Route path={`${route}/${FXE_seo(FXE_language("service").toLowerCase())}/${FXE_seo(FXE_language("list").toLowerCase())}`} element={<FXE_service_list />} />

      <Route path={`${route}/${FXE_seo(FXE_language("setting").toLowerCase())}/${FXE_seo(FXE_language("authory").toLowerCase())}`} element={<FXE_setting_authory />} />
      <Route path={`${route}/${FXE_seo(FXE_language("setting").toLowerCase())}/${FXE_seo(FXE_language("email").toLowerCase())}`} element={<FXE_setting_email />} />
      <Route path={`${route}/${FXE_seo(FXE_language("setting").toLowerCase())}/${FXE_seo(FXE_language("menu").toLowerCase())}`} element={<FXE_setting_menu />} />

      <Route path={`${route}/${FXE_seo(FXE_language("blog").toLowerCase())}/${FXE_seo(FXE_language("new").toLowerCase())}`} element={<FXE_blog_new />} />
      <Route path={`${route}/${FXE_seo(FXE_language("blog").toLowerCase())}/${FXE_seo(FXE_language("list").toLowerCase())}`} element={<FXE_blog_list />} />

      <Route path={`${route}/${FXE_seo(FXE_language("document").toLowerCase())}/${FXE_seo(FXE_language("new").toLowerCase())}`} element={<FXE_blog_new />} />
      <Route path={`${route}/${FXE_seo(FXE_language("document").toLowerCase())}/${FXE_seo(FXE_language("list").toLowerCase())}`} element={<FXE_blog_list />} />

      <Route path={`${route}/${FXE_seo(FXE_language("menu").toLowerCase())}/${FXE_seo(FXE_language("new").toLowerCase())}`} element={<FXE_menu_new />} />
      <Route path={`${route}/${FXE_seo(FXE_language("menu").toLowerCase())}/${FXE_seo(FXE_language("list").toLowerCase())}`} element={<FXE_menu_list />} />

      <Route path={`${route}/${FXE_seo(FXE_language("login").toLowerCase())}/${FXE_seo(FXE_language("sign-in").toLowerCase())}`} element={<FXE_sign_in />} />
      <Route path={`${route}/${FXE_seo(FXE_language("login").toLowerCase())}/${FXE_seo(FXE_language("sign-up").toLowerCase())}`} element={<FXE_sign_up />} />


    </Routes>
  );
}

export default App;
