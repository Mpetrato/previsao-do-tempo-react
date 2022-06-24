import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes/route"

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}