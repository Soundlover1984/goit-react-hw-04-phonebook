import { useState, useEffect } from "react";
import Notiflix from "notiflix";


export const useLocalStorage = (key, defaultValue) => {
    const dataFromStorage=JSON.parse(window.localStorage.getItem(key));

    const [state, setState] = useState(
        () => {
                if (dataFromStorage && dataFromStorage.length === 0) {
                  Notiflix.Notify.info(`No ${key} in your list yet`);
                }
                return dataFromStorage ?? defaultValue;
              }
    );
 
    useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];

}









