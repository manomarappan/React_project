import BarchartComponent from "../../pages/dashboardpage/Chartspage/barchart";
import Loginpage from "../../pages/loginpages/Loginpage";

let routeslogin=[{
    path:"/login",
    element:<Loginpage/>
},{
    path:"/charts",
    element:<BarchartComponent/>
}]
export {routeslogin}