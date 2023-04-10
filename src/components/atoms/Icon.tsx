import { IconProps } from "../../app/models/icon";

const Icon = ({ icon ,className}: IconProps) => {
  return <span className={`material-icons-outlined ${className}`}>{icon}</span>;
};

export default Icon;
