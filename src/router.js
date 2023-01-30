import { createBrowserRouter, Route, Link, createRoutesFromElements } from "react-router-dom";
import { Main } from "./features/Main";
import { Weather } from "./features/Weather";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Main />} >
            <Route path="pogoda" element={<Weather />} />
        </Route>
    )
);