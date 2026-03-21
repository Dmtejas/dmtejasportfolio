import { useRoutes } from "react-router-dom"
import App from "./App"
import LandingPage from "./pages/LandingPage";

const CustomRouter = () => {
    const customRoutes = useRoutes([
        {
            path: '/',
            element: <LandingPage />
        }
    ])

    return customRoutes;
}

export default CustomRouter;