import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppRoutes from './AppRoutes';
import Loader from './Components/Loader/Loader';
const LandingPage = lazy(() => import('./Pages/LandingPage/LandingPage'));
const SignUpPage = lazy(() => import('./Pages/SignUpPage/SignUpPage'));
const Error404 = lazy(() => import('./Pages/Error404Page/Error404'));



const App = () => {

    const { isAuthenticated } = useSelector((state) => state.internet);
    const {role} = useSelector((state)=>state.users) // import here role from redux store.
    if (!isAuthenticated) {
        return (
            <>
                <Suspense fallback={<Loader />}>
                    <LandingPage />
                </Suspense>
            </>
        )
    }

    console.log(role);
    return (
        <>
            <Suspense fallback={<Loader />}>
                {/* <Navbar /> */}
                <Routes>
                    {AppRoutes.map((route, index) => {
                        const CheckComponent =
                            route?.allowedRoles.includes(role)
                                ? route?.page
                                : window.location.pathname === '/' 
                                ? LandingPage 
                                : window.location.pathname.includes('signup')
                                    ? SignUpPage
                                    : Error404
                        return (
                            <Route
                                key={index}
                                path={route?.path}
                                element={<CheckComponent />} />
                        )
                    })}
                </Routes>
            </Suspense>
        </>
    );
};

export default App;