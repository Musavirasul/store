'use client';

// Redux
import { Provider } from 'react-redux';

// Store
import { store, persistor } from '@/store/store';

// Persist
import { PersistGate } from 'redux-persist/integration/react';

// Types
interface IReduxProviderProps {
  children: React.ReactNode;
}

// --------------------------------|| REDUX PROVIDER - UTILS ||---------------------------------------------------------

export default function ReduxProvider({ children }: IReduxProviderProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
