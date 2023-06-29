
import { Navigate, Route, Routes } from "react-router-dom";

import { useStore } from "../../context/ContextProvider";
import TemporaryDrawer from "../layout/AppLayout";
import Incallojeta1 from "../components/IncaLlojNorte";
import Incallojeta2 from "../components/IncaLlojSur";
import Chasquipampa from "../components/Chasquipampa";
import Achumani from "../components/Achumani";
import VillaSalome from "../components/VillaSalome";
import Integradora from "../components/Integradora";
import CajaFerroviaria from "../components/CajaFerroviaria";
import IrpaviNorte from "../components/IrpaviNorte";
import IrpaviSur from "../components/IrpaviSur";
import LaPortada from "../components/LaPortada";

export const AppRoutes = () => {
  const { auth } = useStore();
  return (
  <Routes>
    <Route path="/" element={
    <TemporaryDrawer
    />}>
    <Route path="" >
       
      <Route 
      path="incaNorte" element={<Incallojeta1/>} /> 
       <Route 
      path="incaSur" element={<Incallojeta2/>} /> 
       <Route 
      path="chasquipampa" element={<Chasquipampa/>} /> 
       <Route 
      path="achumani" element={<Achumani/>} /> 
       <Route 
      path="villaSalome" element={<VillaSalome/>} /> 
       <Route 
      path="integradora" element={<Integradora/>} /> 
       <Route 
      path="cajaFerroviaria" element={<CajaFerroviaria/>} /> 
      <Route 
      path="irpaviNorte" element={<IrpaviNorte/>} /> 
      <Route 
      path="irpaviSur" element={<IrpaviSur/>} />
      <Route 
      path="laPortada" element={<LaPortada/>} />  
      </Route>
      </Route>
      
      
  </Routes>
  )
};

