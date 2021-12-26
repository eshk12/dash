import App from "../App";
import Dashboard from "../pages/AuthPages/Dashboard";
import {LoginPage} from "../pages/NonAuthPages/LoginPage";

export const userRoutes = [
    {path: "/", exact: true, component: <Dashboard />},
    {path: "/dashboard", exact: true, component: <Dashboard />},
    {path: "/login", exact: true, component: <LoginPage />},
];