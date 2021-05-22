import Dashboard from "../domain/dashboard/dashboard";
import LandingPage from "../domain/homePage/landingPage";

const routes = [

    {
        path: "/",
        title: "home",
        component : LandingPage
    },
    {
        path: "/dashboard",
        title: "dashboard",
        component : Dashboard

    }
];

export default routes;