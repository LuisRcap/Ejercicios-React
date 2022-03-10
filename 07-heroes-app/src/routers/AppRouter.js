import PrivateRoute from './PrivateRoute';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={
                        <PublicRoute>
                            <LoginScreen />
                        </PublicRoute>
                    }
                />
                {/* <Route path="/login" element={<LoginScreen />} /> */}

                <Route path="/*" element={
                        <PrivateRoute>
                            <DashboardRoutes/>
                        </PrivateRoute>
                    } 
                />

                {/* <Route path='/*' element={<DashboardRoutes />} /> */}
            </Routes>
        </Router>
    );
};

export default AppRouter;
