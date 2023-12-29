import SomethingOtherComponent from "../../../conifg/services";
import DoSomething from "../../../conifg/utils";
import BarchartComponent from "../../pages/dashboardpage/Chartspage/barchart";
import Loginpage from "../../pages/loginpages/Loginpage";

let routeslogin=[{
    path:"/login",
    element:<Loginpage/>
},{
    path:"/doSomething",
    element:<DoSomething/>
},{
    path:"/SomethingOtherComponent",
    element:<SomethingOtherComponent/>
},{
    path:"/charts",
    element:<BarchartComponent/>
}]
export {routeslogin}