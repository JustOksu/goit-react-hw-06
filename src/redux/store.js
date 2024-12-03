import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

const contactsPersistConfig = {
  key: "contacts",
  storage,
};

const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export const persistor = persistStore(store);
