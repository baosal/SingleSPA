import { useMemo, useState } from "react";
import "./root.component.css";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Dashboard", href: "./dashboard" },
  { label: "Module 1", href: "./module-1" },
  { label: "Module 2", href: "./module-2" },
];

export default function Root(props) {
  const initialActive = useMemo(() => {
    const match = navItems.find((item) =>
      typeof window !== "undefined"
        ? window.location.pathname.includes(item.href.replace(/^\.\//, ""))
        : false
    );
    return match ? match.label : navItems[0].label;
  }, []);

  const [active, setActive] = useState(initialActive);

  return (
    <section className="module-root">
      <aside aria-label="Module navigation" className="module-sidebar">
        <div className="module-sidebarTitle">Side Bar Module</div>
        <nav>
          <ul className="module-nav">
            {navItems.map((item) => {
              const isActive = item.label === active;
              return (
                <li key={item.label} className="module-navItem">
                  <button
                    type="button"
                    className={`module-navButton ${
                      isActive
                        ? "module-navButton--active"
                        : "module-navButton--inactive"
                    }`}
                    onClick={() => {
                      setActive(item.label);
                      if (typeof window !== "undefined") {
                        window.history.pushState({}, "", item.href);
                      }
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </section>
  );
}
