import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';

export const store = configureStore({
  reducer: { contactsState: contactReducer },
});

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['filter'],
// };
// const persistedReducer = persistReducer(persistConfig, contactReducer);

// export const store = configureStore({
//   reducer: { contacts: persistedReducer },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
