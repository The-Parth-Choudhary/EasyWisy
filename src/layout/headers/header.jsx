import useSticky from "@/hooks/use-sticky";
import Link from "next/link";
import React, {useState} from "react";
import NavMenu from "./nav-menu";
import Sidebar from "./sidebar";


const HeaderThree = () => {
  const {sticky} = useSticky()
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header className="header__transparent">
        <div className="header__area">
          <div
            className={`main-header third-header header-xy-spacing ${sticky ? "header-sticky" : ""}`}
            id="header-sticky"
          >
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xxl-3 col-xl-3 col-lg-5 col-md-6 col-6">
                  <div className="logo-area d-flex align-items-center">
                    <div className="logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logo.png" alt="logo" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-9 col-xl-9 col-lg-7 col-md-6 col-6 d-flex align-items-center justify-content-end">
                  <div className="main-menu main-menu-black d-flex justify-content-end">
                    <nav id="mobile-menu" className="d-none d-xl-block">
                      <NavMenu />
                    </nav>
                  </div>
                  <div className="header-right d-flex align-items-center">
                    <div className="header-meta header-meta-white">
                      <ul>
                        <li>
                          <Link href="/sign-in" className="d-none d-md-block">
                            <i className="fi fi-rr-user"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cart" className="d-none d-md-block">
                            <i className="	 fi fi-rr-shopping-bag"></i>
                          </Link>
                        </li>
                        <li>
                          <a href="#" onClick={() => setIsActive(true)} className="tp-menu-toggle d-xl-none">
                            <i className="icon_ul"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default HeaderThree;
