import mic from '../assets/mic.png';
import setting from '../assets/settings.png';
import forward from '../assets/right.png';
import back from '../assets/left-arrow.png';
import eqicon from '../assets/earthquake.png';
import mag from '../assets/siren.png';
import pin from '../assets/pin.png';
import '../styles/icons.css';

export const MicIcon = () => (
  <img className="mic-img" src={mic} alt="microphone" />
);

export const SettingIcon = () => (
  <img className="set-img" src={setting} alt="settings" />
);

export const ForwardIcon = () => (
  <img className="for-img" src={forward} alt="forward" />
);

export const BackwardIcon = () => (
  <img className="bac-img" src={back} alt="goBack" />
);

export const LogoIcon = () => (
  <img className="eq-img" src={eqicon} alt="earthquake" />
);

export const SirenIcon = () => (
  <img className="sir-img" src={mag} alt="siren" />
);

export const PinIcon = () => (
  <img className="pin-img" src={pin} alt="map" />
);

export const WarningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 war-img"
  >
    <path
      fillRule="evenodd"
      d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4
      3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
      clipRule="evenodd"
    />
  </svg>
);

export const GetIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    className="w-6 h-6 get-img"
  >
    <path
      fillRule="evenodd"
      d="M9.75 6.75h-3a3 3 0 00-3 3v7.5a3 3 0 003 3h7.5a3 3 0 003-3v-7.5a3 3 0 00-3-3h-3V1.5a.75.75 0
      00-1.5 0v5.25zm0 0h1.5v5.69l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0
      111.06-1.06l1.72 1.72V6.75z"
      clipRule="evenodd"
    />
    <path
      d="M7.151 21.75a2.999 2.999 0 002.599 1.5h7.5a3 3 0
      003-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 01-4.5 4.5H7.151z"
    />
  </svg>
);
