export const Warning = () => {
  return (
    <div className="warning">
      <p>
        1. <b>Do not</b> use this tool for your <b>PRODUCTION</b> apps, use it to add random data to your development
        apps.
      </p>
      <p>2. API Secret and other data is only used in the browser and not recorded anywhere</p>
      <p>3. JWTs are credentials, which can grant access to resources. Be careful where you paste them!</p>
      <p>
        4. You can find your API Key and Secret in <a href="https://getstream.io/dashboard">Stream Dashboard</a>
      </p>
    </div>
  );
};
