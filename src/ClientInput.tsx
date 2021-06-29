import { useAppCtx } from './AppCtx';

export const ClientInput = () => {
  const { userID, setUserID, apiKey, setApiKey, apiSecret, setApiSecret, loading } = useAppCtx();

  return (
    <div className="client-input">
      <div className="inputs">
        <input
          disabled={loading}
          value={apiKey}
          onInput={(e) => setApiKey(e.currentTarget.value.trim())}
          placeholder="Your API key"
        />
        <input
          disabled={loading}
          value={apiSecret}
          onInput={(e) => setApiSecret(e.currentTarget.value.trim())}
          placeholder="Your API Secret"
        />
        <input
          disabled={loading}
          value={userID}
          onInput={(e) => setUserID(e.currentTarget.value.trim())}
          placeholder="User ID"
        />
      </div>
    </div>
  );
};
