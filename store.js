import {configureStore} from "@reduxjs/toolkit";
import basketReducer from "./features/basket/Basket";
import restaurantReducer from "./features/restaurant/restaurant";

export const store = configureStore({
	reducer:{
		basket:basketReducer,
		restaurant:restaurantReducer
	}
});
