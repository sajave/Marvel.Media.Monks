// Request example:

// ts - a timestamp (or other long string which can change on a request-by-request basis)
// hash - a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey)
// For example, a user with a public key of "1234" and a private key of "abcd" could construct a valid call as follows:
// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
// (the hash value is the md5 digest of 1abcd1234)

import axios from "axios";

export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS";

export function getAllCharacters() {
  return async function (dispatch: any) {
    try {
      const allCharacters = await axios.get(
        "https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=50&ts=1&apikey=7a33e5d7cd2f2dc74e72da066dbdbb08&hash=e8efe55ad6cab76d07ca902b473516e4"
      );
      dispatch({
        type: GET_ALL_CHARACTERS,
        payload: allCharacters.data.data.results,
      });
    } catch (error) {
      console.log('Error in "getAllCharacters" action', error);
    }
  };
}
