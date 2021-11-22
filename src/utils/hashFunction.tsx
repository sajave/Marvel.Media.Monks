import md5 from "md5";

const API_KEY_PUBLIC = process.env.REACT_APP_API_KEY_PUBLIC;
const API_KEY_PRIVATE = process.env.REACT_APP_API_KEY_PRIVATE;
const ts = new Date().toISOString();

export function hashFunction() {
  const hashObj = {
    hash: md5(`${ts}${API_KEY_PRIVATE}${API_KEY_PUBLIC}`),
    ts: ts,
  };
  return hashObj;
}
