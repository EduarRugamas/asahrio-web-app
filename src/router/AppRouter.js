import { BrowserRouter,Switch, Route  } from "react-router-dom";
import ShopGridLeftSidebar from "../pages/shop-grid-left-sidebar";


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <ShopGridLeftSidebar />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
