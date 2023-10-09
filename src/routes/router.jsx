import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "../pages/layouts/DefaultLayout";

import { Ashe } from "../pages/Ashe";
import { Garen } from "../pages/Garen";
import { Jinx } from "../pages/Jinx";

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Jinx />} />
        <Route path="/ashe" element={<Ashe />} />
        <Route path="/garen" element={<Garen />} />
      </Route>
    </Routes>
  );
}
