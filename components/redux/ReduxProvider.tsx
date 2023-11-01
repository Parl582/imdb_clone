"use client";
import React from "react";
import { Provider } from "react-redux";
import { persister, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";


const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
