export const loadState = () => {
  try {
    const serializedState = JSON.parse(localStorage.getItem("salty_state"));
    return serializedState === null ? undefined : serializedState;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("salty_state", serializedState);
  } catch (err) {
    console.log(err);
  }
};
