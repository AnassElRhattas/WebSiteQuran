import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Layout from '../layout/Layout';
import SolarImageProcessor from '../pages/SolarImageProcessor';

export const Router = createBrowserRouter ([
    {
        element: <Layout />,
        children: [
            {
                element: <Home />,
                path: '/'
            },
            {
                element: <SolarImageProcessor />,
                path: '/solar_image'
            },
            {
                element: <About />,
                path: '/about'
            }
        ]
    }
]);