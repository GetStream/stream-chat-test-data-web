import { useAppCtx } from './AppCtx';

export const Logs = () => {
  const { logs } = useAppCtx();

  return (
    <div className="logs">
      {logs.map((log, i) => (
        <p key={i}>{log}</p>
      ))}
    </div>
  );
};
