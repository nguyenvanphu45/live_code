import config from '../config';
import LoginPage from '../pages/Auth/Login';
import RegisterPage from '../pages/Auth/Register';
import HomePage from '../pages/HomePage';
import ChallengePage from '../pages/Challenge';
import AdminPage from '../pages/Admin';

const publicRoutes = [
    { path: config.login, component: LoginPage, layout: null },
    { path: config.register, component: RegisterPage, layout: null },
];

const privateRoutes = [
    { path: config.home, component: HomePage },
    { path: config.admin, component: AdminPage },
    { path: config.challenge, component: ChallengePage },
];

export { publicRoutes, privateRoutes };
