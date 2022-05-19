import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";
import LayoutCard from "../layouts/LayoutCard";
/*Paginas basicas */
import NotFound from "../pages/NotFound/NotFound"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
/* Paginas del adinistrador */
import AdminHome from "../pages/Admin/Admin";
import AdminSignIn from "../pages/Admin/SignIn";
import Modulo1 from "../pages/Admin/Modulo1";
import Modulo2 from "../pages/Admin/Modulo2";
import Modulo3 from "../pages/Admin/Modulo3";
/* Arreglo de rutas disponibles para el administardor */

const routesAdmin = [
    {
        path: "/admin",
        layout: LayoutAdmin,
        component: AdminHome,
    },
    
    {
        path: "/admin/login",
        layout: LayoutAdmin,
        component: AdminSignIn,  
     },  
     /*{
        path: "/admin/modulo1",
        layout: LayoutAdmin,
        component: Modulo1,  
     },
     {
        path: "/admin/modulo2",
        layout: LayoutAdmin,
        component: Modulo2,  
     },
     {
        path: "/admin/modulo3",
        layout: LayoutAdmin,
        component: Modulo3,  
     },*/
     
];

const routesClient =[
    {
        path: "/",
        layout: LayoutBasic,
        component: Home, 

    },

    {
        path: "/contact",
        layout: LayoutBasic,
        component: Contact,
    },
    
];

const routesNotFound = [
    {
        path: "*",
        layout: LayoutBasic,
        component: NotFound,  
     }, 

];

const routes = [...routesAdmin, ...routesClient, ...routesNotFound];
export default routes;