import "./CoverPage.css";

type Props = {
  title: string;
  thumbnail: string | undefined;
  classNameContainer: string;
  classNameImg: string;
};

export const CoverPage = ({
  title,
  thumbnail,
  classNameContainer,
  classNameImg,
}: Props) => {
  return (
    <div className={classNameContainer}>
      <div className={classNameImg}>
        <img src={thumbnail} alt='Not available' className='coverImg' />
      </div>
      <div className='titleCover'>{title}</div>
    </div>
  );
};
