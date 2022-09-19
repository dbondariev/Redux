export const SETLANGUAGE = "SETLANGUAGE";

export const setLanguage = language => ({
  type: SETLANGUAGE,
  payload: {
    language,
  },
});
