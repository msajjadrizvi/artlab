import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Assessment from "./Assessment";
import Soon from "./Soon";

function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/Assessment" element={<Assessment />} />
					<Route exact path="/Soon" element={<Soon/>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;