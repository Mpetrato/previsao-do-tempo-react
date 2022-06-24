import { Routes, Route, useNavigate } from "react-router-dom"
import { CityForecast } from "../pages/CityForecast";
import { Home } from "../pages/Home"

export const AppRoutes = () => {
    
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/:city" element={<CityForecast />}/>

            <Route path="*" element={<Home />}/>
        </Routes>
    )
}