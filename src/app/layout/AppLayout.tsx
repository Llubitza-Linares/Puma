import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import { Outlet, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavBar from "./NavBar";


const listMenu = [
  { name: "Home", icon: <ShoppingCartIcon/>, to: "home" },
  { name: "Inca Llojeta Norte", icon: <DirectionsBusIcon />, to: "incaNorte" },
  { name: "Inca Llojeta Sur", icon: <DirectionsBusIcon />, to: "incaSur" },
  { name: "Chasquipampa", icon: <DirectionsBusIcon />, to: "chasquipampa" },
  { name: "Villa Salome", icon: <DirectionsBusIcon />, to: "villaSalome" },
  { name: "Integradora", icon: <DirectionsBusIcon />, to: "integradora" },
  { name: "Caja Ferroviaria", icon: <DirectionsBusIcon />, to: "cajaFerroviaria" },
  { name: "Achumani", icon: <DirectionsBusIcon />, to: "achumani" },
  { name: "Irpavi II Norte", icon: <DirectionsBusIcon />, to: "irpaviNorte" },
  { name: "Irpavi II Sur", icon: <DirectionsBusIcon />, to: "irpaviSur" },
  { name: "La Portada", icon: <DirectionsBusIcon />, to: "laPortada" },
  { name: "Buscar", icon: <DirectionsBusIcon />, to: "form" },
];

export default function TemporaryDrawer() {
  const [toggle, setToggle] = React.useState(false);
 const navigate = useNavigate();
 

  const goTo = (url) => {
   navigate(url);
  };
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setToggle(open);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {listMenu.map((menuItem, index) => (
          <ListItem key={menuItem.name} disablePadding>
            <ListItemButton onClick={() => goTo(menuItem.to)}>
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <ListItemText primary={menuItem.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <NavBar toggle={toggleDrawer} />
      <Drawer anchor={"left"} open={toggle} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
      <main>
        <Grid sx={{ m:10}} >
          <Outlet/>
        </Grid>
      </main>
    </div>
  );
}