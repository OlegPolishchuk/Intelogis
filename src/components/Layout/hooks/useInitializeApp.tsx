import { useEffect } from 'react';
import { mapActions } from 'store/reducers';
import { useAppDispatch } from 'store/store';

export const useInitializeApp = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coordinates = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          dispatch(mapActions.setUserCoordinated({ coordinates }));
        },
        (error) => {
          console.error('Ошибка получения геолокации:', error.message);
        },
      );
    } else {
      console.error('Геолокация не поддерживается вашим браузером.');
    }
  }, []);
};
