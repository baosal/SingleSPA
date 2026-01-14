import { useMemo, useState } from "react";
import "./root.component.css";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React from "react";
import { AuthProvider } from "react-oidc-context";
import { BrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { ProtectedApp } from "./components/ProtectedApp";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Module 1", href: "/module-1" },
  { label: "Form Js", href: "/form-js" },
  { label: "User info (React)", href: "/user-info" },
];

export default function Root({ name, oidcSetting, onSigninCallback }) {
  console.log("app " + name + " mounted");
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
    <React.StrictMode>
      <BrowserRouter basename="/">
        <AuthProvider
          userManager={oidcSetting}
          onSigninCallback={onSigninCallback}
        >
          <QueryClientProvider client={new QueryClient()}>
            <Layout>
              <ProtectedApp>
                <section className="module-root">
                  <aside
                    aria-label="Module navigation"
                    className="module-sidebar"
                  >
                    <div className="module-sidebarTitle">Side Bar (React)</div>
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
              </ProtectedApp>
            </Layout>
          </QueryClientProvider>
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
