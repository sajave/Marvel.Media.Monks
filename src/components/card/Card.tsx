import {Image} from "../../constants/types";
import "./CardStyle.css";

type Props = {
  thumbnail: Image;
  name: string;
  description: string;
};

export function Card({thumbnail, name, description}: Props) {
  return (
    <div className='cardContainer'>
      <div className='thumbnailContainer'>
        <img
          className='thumbnail'
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt='Not available'
        />
      </div>
      <div className='redDivider'></div>
      <div className='nameTitle'>{name.toUpperCase()}</div>
    </div>
  );
}
