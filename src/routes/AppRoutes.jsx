import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import CustomersPage from "./CustomersPage";
import PrivateRoute from "./PrivateRoutes";
const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/login"
                element={<LoginPage />}
            />
            <Route element={<PrivateRoute />}>
                <Route
                    path="/"
                    element={<HomePage />}
                />
                <Route
                    path="/logout"
                    element={<h1> logout </h1>}
                />
                <Route
                    path="/customers"
                    element={<CustomersPage />}
                />
            </Route>
            <Route
                path="*"
                element={<h1>404 ERROR</h1>}
            />
        </Routes>
    );
};

export default AppRoutes;
