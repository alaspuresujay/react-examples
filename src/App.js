import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
const Calculator = React.lazy(() => import("./Projects/Calculator"));
const CarParking = React.lazy(() => import("./Projects/CarParking"));
const Home = React.lazy(() => import("./home"));
const Weather = React.lazy(() => import("./Projects/Weather"));
const Chessboard = React.lazy(() => import("./Projects/chessboard"));
const NestedComments = React.lazy(() => import("./Projects/nested-comments"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={"Loading ..."}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/parking" element={<CarParking />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/chessboard" element={<Chessboard />} />
          <Route path="/nested-comments" element={<NestedComments />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

// UI
//  select the car - small, medium, large
//  entry time
