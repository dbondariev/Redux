export const TOGGLE_OPTION = "OPTIONS/TOGGLE_OPTION";


const toggleOption = optionId => {
  return {
    type: TOGGLE_OPTION,
    payload: {
      optionId,
    },
  };
}

export default toggleOption;