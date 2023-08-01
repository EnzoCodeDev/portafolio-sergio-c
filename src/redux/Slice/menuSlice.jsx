import { createSlice, current } from "@reduxjs/toolkit";
// import { menuParametrizacion } from "../../components/menu/menuOption";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menuState: false,
    menuOption: [],
  },
  reducers: {
    //Abrir y cerrar menu
    eventoMenuOpen: (state, action) => {
      state["menuState"] = action["payload"] || !current(state)["menuState"];
    },
    //Cambiar menu
    eventoMenuChange: (state, action) => {
      state["menuOption"] = action["payload"];
    },
    //Abrir y cerrar Submenus
    eventoSubMenu: (state, accion) => {
      state["menuOption"][accion["payload"]]["stateSubmenu"] =
        !current(state)["menuOption"][accion["payload"]]["stateSubmenu"];
    },
  },
});

// Action creators are generated for each case reducer function
export const { eventoMenuOpen, eventoMenuChange, eventoSubMenu } =
  menuSlice.actions;

export default menuSlice.reducer;
