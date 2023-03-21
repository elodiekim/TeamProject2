import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTE_ARR } from "./Route";
import { Header, Footer } from "../components";

const RoutesList = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {ROUTE_ARR.map((route, index) => {
          return (
            <Route path={route.path} element={<route.element />} key={index} />
          );
        })}
      </Routes>
      <Footer />
    </Router>
  );
};

export default RoutesList;
