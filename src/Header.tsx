const StreamLogo = () => {
  return (
    <svg width="56px" height="28px" viewBox="0 0 56 28" version="1.1">
      <g id="-Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="cabin" transform="translate(-492.000000, -3355.000000)" fill="#fff">
          <g id="Group-7" transform="translate(335.000000, 1811.000000)">
            <g id="1" transform="translate(0.000000, 1544.000000)">
              <path d="M193.58575,9.00237203 L211.498767,7.73129794 C212.681159,7.64740929 213.425629,8.98122481 212.734326,9.94503396 L200.203427,27.4162807 C199.940673,27.7826458 199.517581,28 199.066925,28 L170.966389,28 C170.516433,28 170.093901,27.783346 169.830867,27.4176811 L157.266669,9.94643444 C156.573687,8.98276533 157.318157,7.6471292 158.501529,7.73129794 L176.35998,9.00251208 L183.987538,0.466736985 C184.546484,-0.158716616 185.525865,-0.155075373 186.080195,0.474719712 L193.58575,9.00237203 Z M197.337059,25.2299991 L185.711668,20.8810939 L185.711668,25.2299991 L197.337059,25.2299991 Z M184.312552,25.2299991 L184.312552,20.8810939 L172.687161,25.2299991 L184.312552,25.2299991 Z M182.97108,19.842214 L171.093289,24.2803297 L162.354973,12.1219374 L182.97108,19.842214 Z M187.028935,19.842214 L198.906727,24.2803297 L207.645043,12.1219374 L187.028935,19.842214 Z M184.323745,18.8274274 L184.323745,4.19410994 L174.611925,15.1679777 L184.323745,18.8274274 Z M185.711668,18.8274274 L185.711668,4.19593056 L195.423629,15.1679777 L185.711668,18.8274274 Z M171.763885,14.1564122 L173.998412,11.6431139 L163.081533,10.8599664 L171.763885,14.1564122 Z M198.154842,14.1564122 L195.920455,11.6431139 L206.837333,10.8599664 L198.154842,14.1564122 Z"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <StreamLogo />
        <h1>Stream</h1>
      </div>
    </div>
  );
};
