import { useAppCtx } from './AppCtx';

export const ActionButton = () => {
  const { apiKey, apiSecret, userID, loading, generateData } = useAppCtx();

  if (!apiKey || !apiSecret || !userID) return null;

  return (
    <div className="action-button">
      <button disabled={loading} onClick={generateData}>
        Generate Random Date for this App
      </button>
    </div>
  );
};
