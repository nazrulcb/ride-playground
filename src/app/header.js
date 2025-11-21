import { useEffect, useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import React from 'react';
import Link from 'next/link';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

function header() {

//const token = localStorage.getItem("token");

const router = useRouter();
const [token, setToken] = useState();


const[isLogin, setIsLogin] = useState(false);
const [scrolled, setScrolled] = useState(false);
const [open, setOpen] = useState(false);



console.log("Token: ", token);


  const pathname = usePathname();

  // Hide footer on these routes
  const noFooterRoutes = ["/", "/class-schedule"];
  const hideFooter = noFooterRoutes.includes(pathname);




  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
  };

   window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

    
  }, []);


  useLayoutEffect(() => {
    const savedToken = localStorage.getItem("token");
    setToken(savedToken);

    // redirect if token exists
    if (savedToken) {
      router.push("/account-details");
    }
  }, [setToken]);

  return (
    <>

        <section className={`
          ${hideFooter === true ? "header_inner_main" : "main_header"}
          ${scrolled === true ? "sticky_header" : ""}
          `}>
          <div className='header_inner'>
            <div className='header_lrft'>
             <div className='head_logo'>
                <div className="toogle_button" onClick={() => setOpen(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 3V5H3V3H12ZM16 19V21H3V19H16ZM22 11V13H3V11H22Z"></path>
                  </svg>
                </div>
                <Link href={'/'}><img src='../images/logo.png' alt='Logo' /></Link>
             </div>
             <div className={open === true ? "main_menu open_menu" : "main_menu"}>
              <div className="close_menu"  onClick={() => setOpen(false)}><img src="../images/cls_mnu.png" alt="img" /></div>
              <ul>
                <li><Link onClick={() => setOpen(false)} href={'/'}>HOME</Link></li>
                <li><Link onClick={() => setOpen(false)} href={'/class-schedule'}>CLASS SCHEDULE</Link></li>
                <li><Link onClick={() => setOpen(false)} href={'/about'}>ABOUT US</Link></li>
                <li><Link onClick={() => setOpen(false)} href={'/trainings'}>TRAININGS</Link></li>
                <li><Link onClick={() => setOpen(false)} href={'/blog'}>BLOG</Link></li>
              </ul>
             </div>
            </div>

             <div className='right_button'>
                <div className='account_option_area'>

                  {token ? (
                  
                   <div className='header_profile'>
                    <Link href={'/account-details'}>
                        <img src='../images/profile.png' alt='Key' />
                        <div className='head_prof_name'>
                           <h3>Rohit</h3>
                           <p>Many variations</p>
                        </div>
                    </Link>
                  </div>
                  
                   ) : (
                  
                  <div className={token ? "login_reg_lnk login_hide" : "login_reg_lnk"}>
                    <Link href={'/login'}><img src='../images/lock.png' alt='Key' /> Login / Register</Link>
                  </div>
                  
                  
                  )}


                </div>
                <div className='membrship_btn'>
                   <Link href={'/subscription'}>MEMBERSHIP <span><img src='../images/rarw.png' alt='Arrow' /></span></Link>
                </div>
                
             </div>
          </div>
      </section>
    </>
  )
}

export default header
