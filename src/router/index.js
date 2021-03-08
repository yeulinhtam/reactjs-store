import { lazy } from 'react';
const HomePage = lazy(() => import('./../pages/HomePage'));
const ProductPage = lazy(() => import('./../pages/ProductPage'));
const CartPage = lazy(() => import('./../pages/CartPage'));
const LoginPage = lazy(() => import('./../pages/LoginPage'));
const RegisterPage = lazy(() => import('./../pages/RegisterPage'));
const UserPage = lazy(() => import('./../pages/UserPage'));
const CheckOutPage = lazy(() => import('./../pages/CheckOutPage'));
const SearchPage = lazy(() => import('./../pages/SearchPage'));

const Page = [

    {
        path: '/',
        exact: true,
        main: HomePage,
    },
    {
        path: '/login',
        exact: true,
        main: LoginPage
    },
    {
        path: '/user',
        exact: true,
        main: UserPage
    },
    {
        path: '/register',
        exact: true,
        main: RegisterPage
    },
    {
        path: '/product/:slug',
        exact: true,
        main: ProductPage,
    },
    {
        path: '/cart',
        exact: true,
        main: CartPage,
    },
    {
        path: '/checkout',
        exact: true,
        main: CheckOutPage
    },
    {
        path: '/search',
        exact: true,
        main: SearchPage
    },
    {
        path: '/products',
        exact: true,
        main: HomePage
    }
    // {
    //     path: '*',
    //     exact: true,
    //     main: NotFount
    // }
];
export default Page;