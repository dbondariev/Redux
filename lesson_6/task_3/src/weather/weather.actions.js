import { getWeatherDatas } from "./weather.gateway";

export const CITY_DATA_RECEIVED = "CITY_DATA_RECEIVED";

export const cityDataReceived = cityData => ({
  type: CITY_DATA_RECEIVED,
  payload: { cityData },
});

export const getWeatherData = () =>
  function (dispatch) {
    getWeatherDatas().then(cityData => {
      dispatch(cityDataReceived(cityData));
    });
  };