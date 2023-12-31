import { NavLink } from "react-router-dom";
import { FaBars, FaHome } from "react-icons/fa";
import { MdOutlineEventAvailable, MdNotificationsActive } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SideBarMenu";
import pazo from "../assets/images/pazo.png";
import SwitchToggle from "./SwitchToggle";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/Notification",
    name: "Notification",
    icon: <MdNotificationsActive />,
  },
  {
    path: "/Events",
    name: "Events",
    icon: <MdOutlineEventAvailable />,
  },
  {
    path: "/Settings",
    name: "Settings",
    icon: <FiSettings />,
  },
];

const SideBar = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  <img src={pazo} alt="" />
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
          <div className="down_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="toggle"
                >
                <SwitchToggle isOn={isOn} onClick={() => setIsOn(!isOn)} />
                </motion.h1>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
