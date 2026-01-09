import { registerApplication, start } from "single-spa";
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

applications.forEach(registerApplication);
layoutEngine.activate();
start();
