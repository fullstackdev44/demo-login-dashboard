// utils/storage.js

// Save data to localStorage
export const saveToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  // Get data from localStorage
  export const getFromStorage = (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };
  
  // Remove data from localStorage
  export const removeFromStorage = (key) => {
    localStorage.removeItem(key);
  };
  
  // Clear all localStorage data
  export const clearStorage = () => {
    localStorage.clear();
  };
  