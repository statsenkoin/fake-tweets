export const localStorageService = {
  save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Local storage set error: ', error.message);
    }
  },

  load(key) {
    try {
      const data = localStorage.getItem(key);
      return data === null ? [] : JSON.parse(data);
    } catch (error) {
      console.error('Local storage get error: ', error.message);
    }
  },
};
