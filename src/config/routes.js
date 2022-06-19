import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

/*Paginas basicas */
import NotFound from "../pages/NotFound/NotFound"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
/* Paginas del adinistrador */
import AdminHome from "../pages/Admin/Admin";
import AdminSignIn from "../pages/Admin/SignIn";
import AdminUsers from "../pages/Admin/Users"

/* Arreglo de rutas disponibles para el administardor */

const routesAdmin = [
    {
        path: "/admin/*",
        layout: LayoutAdmin,
        component: AdminHome,
    },
    
    {
        path: "/admin/login/*",
        layout: LayoutAdmin,
        component: AdminSignIn,  
     },  

     {
        path: "/admin/users",
        layout: LayoutAdmin,
        component: AdminUsers,  
     },  
     
     
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