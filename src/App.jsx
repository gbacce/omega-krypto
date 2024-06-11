import React from 'react';
import "./styles.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import PrivacyPage from './pages/PrivacyPage';
import RansomwarePage from './pages/RansomwarePage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import LogInPage from './pages/LogInPage';
import RegistrationPage from './pages/RegistrationPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/solutions',
                element: <SolutionsPage />
            },
            {
                path: '/privacy',
                element: <PrivacyPage />
            },
            {
                path: '/ransomware',
                element: <RansomwarePage />
            },
            {
                path: '/krypto-insights',
                element: <ResourcesPage />
            },
            {
                path: '/contact',
                element: <ContactPage />
            },
            {
                path: '/login',
                element: <LogInPage />
            },
            {
                path: '/registration',
                element: <RegistrationPage />
            }
        ]
    }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
