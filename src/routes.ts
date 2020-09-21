import  {AuthComponent}  from './authentification-redux-lib/src/web'
import { labRoutes } from './lab-ittyni/src/routes';
export const routes = {
    admin : {
        path : '/admin/:user/',
    },
    website : {
        path : '/website/*'       
    },
    auth : {
        path : '/website/auth/*',
        component : AuthComponent
    },

    lab : labRoutes
}