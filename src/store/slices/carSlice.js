import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        serchTerm: '',
        cars: []
    },
    reducers: {
        changeSearchTerm(state, action){
            state.searchTerm = action.payload
        },
        addCar(state, action){
            //  Assumption:
            //  action.payload = {name: 'ab', cost: 140}
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost.action,
                id: nanoid() // gives random id
            });
        },
        removeCar(state, action){
            //  Assumption: 
            // action.payload === the id of the car we want to remove
            const updated = state.cars.filter((cars)=>{
                return cars.id !== action.payload
            });
            state.cars = updated;
        },
    },

});
export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions;

export const carsReducer = carsSlice.reducer;