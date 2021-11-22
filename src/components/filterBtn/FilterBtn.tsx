import {useDispatch} from "react-redux";
import {setFilterSearchBy} from "../../actions";

import "./filterBtn.css";

type Props = {
  id: string;
  styleTheme: string;
};

export function FilterBtn({id, styleTheme}: Props) {
  const dispatch = useDispatch();

  return (
    <div className='btnContainer'>
      <button
        id={id}
        className={styleTheme}
        onClick={(e: any) => {
          dispatch(setFilterSearchBy(e.target.id));
        }}
      >
        {id.toUpperCase()}
      </button>
    </div>
  );
}
