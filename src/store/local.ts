
export const loadState = (key: string = "state") => {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null){
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    return undefined;
  }
}

export const saveState = (state: unknown, key: string = "state") => {
  try {
    let serializedData = JSON.stringify(state)
    localStorage.setItem(key, serializedData)
  } catch (error) {}
}