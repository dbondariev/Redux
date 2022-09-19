import { CITY_DATA_RECEIVED } from "./weather.actions";

const initialData = {
  cityData: []
};

const weatherReducer = (state = initialData, action) => {
  switch (action.type) {
    case CITY_DATA_RECEIVED:
      return {
        ...state,
        cityData: action.payload.cityData,
      };
    default:
      return state;
  }
};

export default weatherReducer;
