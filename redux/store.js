import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";
// import { createContext, useContext } from "react";
// import CommonStore from "./commonStore";
// import MapStore from "./mapStore";

// interface store {
//   commonStore: CommonStore;
//   mapStore: MapStore;
// }

// export const store: Store = {
//   commonStore: new CommonStore(),
//   mapStore: new MapStore(),
// };

// export const StoreContext = createContext(store);

// export const useStore = () => {
//   return useContext(StoreContext);
// };

export const store= configureStore({
    reducer:{
        nav:navReducer,
    },
});