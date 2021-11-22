import "./CoverPage.css";

type Props = {
  title: string;
  thumbnail: string | undefined;
};

export const CoverPage = ({title, thumbnail}: Props) => {
  return (
    <div className='coverContainer'>
      <div>
        <img src={thumbnail} alt='Not available' className='coverImg' />
      </div>
      <div className='titleCover'>{title}</div>
    </div>
  );
};
