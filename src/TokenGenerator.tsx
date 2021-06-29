import { useEffect, useState } from 'react';
import { signUserToken } from './utils';

import { useAppCtx } from './AppCtx';

export const TokenGenerator = () => {
  const { userID, apiSecret } = useAppCtx();

  const [jwt, setJwt] = useState('');

  useEffect(() => {
    if (!apiSecret || !userID) return;
    signUserToken(userID, apiSecret).then((token) => setJwt(token));
  }, [apiSecret, userID]);

  return (
    <div className="token-generator">
      {jwt && (
        <p>
          JWT Token for user <b>{userID}</b>:
        </p>
      )}
      <div className="container">
        {jwt ? (
          <pre>
            {jwt.split('.').map((item, i, a) => (
              <span key={i}>
                {item}
                {i < a.length - 1 ? '.' : ''}
              </span>
            ))}
          </pre>
        ) : (
          <p className="token-generator__warning">Please enter an API key, Secret and Stream User ID</p>
        )}
      </div>
    </div>
  );
};
