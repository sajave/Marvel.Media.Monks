import {useHistory, useParams} from "react-router";
import "./NavBarStyle.css";

export function NavBar() {
  const history = useHistory();
  const {id} = useParams<{id?: string}>();

  return (
    <header className='navbar'>
      {id ? (
        <div className='Title' onClick={() => history.push("/")}>
          BACK
        </div>
      ) : (
        <div className='Title'>CHARACTERS</div>
      )}
      <div className='logoContainer'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg'
          alt='MARVEL'
          className='Logo'
        />
      </div>
    </header>
  );
}
