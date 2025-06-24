import { useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import Logo from "./Logo";
import NavigationList from "./NavigationList";

function Navigation() {
  const { isMobile, isDesktop } = useScreenSize();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center py-5 px-3">
      <Logo />

      {isDesktop && <NavigationList />}
      {isMobile && isOpen && (
        <svg
          onClick={() => setIsOpen((open) => !open)}
          width="40"
          height="17"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#00001A" fillRule="evenodd">
            <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
            <path d="M0 0h40v3H0z" />
          </g>
        </svg>
      )}
      {isMobile && !isOpen && (
        <div className="bg-filter">
          <aside className="mobile-nav ">
            <svg
              onClick={() => setIsOpen((open) => !open)}
              className="self-end"
              width="32"
              height="31"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#00001A" fillRule="evenodd">
                <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
                <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
              </g>
            </svg>
            <NavigationList className={"flex-col"} />
          </aside>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
