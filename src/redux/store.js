import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const filtersPersistConfig = {
  key: "filters",
  storage,
  whitelist: ["items"],
};

const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

const persistedFiltersReducer = persistReducer(
  filtersPersistConfig,
  filtersReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: persistedFiltersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
