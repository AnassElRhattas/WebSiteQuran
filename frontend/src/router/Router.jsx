import {createBrowserRouter} from 'react-router-dom';
import Home from'../pages/home';
import About from'../pages/About';
import Layout from '../layout/Layout';

export const Router = createBrowserRouter ([
    {
        element: <Layout />,
        children: [
            {
                element: <Home />,
                path: '/'
            },
            {
                element: <About />,
                path: '/about'
            }
        ]
    }
 
]);