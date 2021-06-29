import React, { useState, Dispatch, SetStateAction, useContext, useCallback } from 'react';
import { dataGenerator } from './dataGenerator';

export type Logger = (log: string) => void;

export type AppCtxValue = {
  userID: string;
  setUserID: Dispatch<SetStateAction<string>>;
  apiKey: string;
  setApiKey: Dispatch<SetStateAction<string>>;
  apiSecret: string;
  setApiSecret: Dispatch<SetStateAction<string>>;
  logs: string[];
  generateData: () => void;
  loading: boolean;
};

const AppCtx = React.createContext<AppCtxValue | null>(null);

export const useAppCtx = () => useContext(AppCtx) as AppCtxValue;

export const AppCtxProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [userID, setUserID] = useState('');
  const [apiSecret, setApiSecret] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [logs, setLogs] = useState<string[]>([]);

  const generateData = useCallback(async () => {
    setLoading(true);

    const pushLog: Logger = (log: string) => setLogs((prevState) => [...prevState, log]);

    await dataGenerator(apiKey, apiSecret, userID, pushLog);

    setLoading(false);
  }, [apiKey, apiSecret, userID]);

  return (
    <AppCtx.Provider
      value={{
        userID,
        setUserID,
        apiSecret,
        setApiSecret,
        apiKey,
        setApiKey,
        logs,
        generateData,
        loading,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};
