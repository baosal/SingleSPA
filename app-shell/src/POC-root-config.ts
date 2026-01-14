import { registerApplication, start } from "single-spa";
import { UserManager, WebStorageStateStore } from 'oidc-client-ts';
import { userManager } from './oidc-config';
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import "./layout.css";
import microfrontendLayout from "./microfrontend-layout.html";
import dashboardView from "./dashboard-view.html";

const layoutHtml = microfrontendLayout.replace(
  /<dashboard-view><\/dashboard-view>/g,
  dashboardView
);

const routes = constructRoutes(layoutHtml);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return import(/* webpackIgnore: true */ name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

// applications.forEach(registerApplication);
applications.map(e => {
  // add custom props to app
  const app = { ...e, customProps: {
    oidcSetting: userManager,
    onSigninCallback: () => {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }};
  console.log(app);
  registerApplication(app);
})
layoutEngine.activate();
start();
