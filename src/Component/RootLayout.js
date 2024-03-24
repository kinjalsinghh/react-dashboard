import NavBarPanel from "./NavBarPanel"
import { Outlet } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../Store/Store"
function RootLayout(){
    return(
        <>
        <Provider store={store}>
         <NavBarPanel/>
         <main>
            <Outlet/>
         </main>
         </Provider>
        </>
       
    )
}
export default RootLayout