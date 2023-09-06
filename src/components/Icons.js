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
