import "./Loading.css";

export default function LoadingSpinner() {
  return (
    <div>
      <div className='lds-dual-ring'></div>
      <div className='loading'>Loading...</div>
    </div>
  );
}
