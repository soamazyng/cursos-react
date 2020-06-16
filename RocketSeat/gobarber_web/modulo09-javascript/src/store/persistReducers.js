// esta variável pega o padrão do storage
// na web ele pega o localstorage
// no react native ele pega o storage banco sqlite
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
export default (reducers) => {
  const persistedRedicer = persistReducer(
    {
      key: 'gobarber',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persistedRedicer;
};
