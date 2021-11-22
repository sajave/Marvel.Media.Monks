// Request example:

// ts - a timestamp (or other long string which can change on a request-by-request basis)
// hash - a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey)
// For example, a user with a public key of "1234" and a private key of "abcd" could construct a valid call as follows:
// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
// (the hash value is the md5 digest of 1abcd1234)

import axios from "axios";
import {hashFunction} from "../utils/hashFunction";

const API_KEY_PUBLIC = process.env.REACT_APP_API_KEY_PUBLIC;
export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS";
export const SET_FILTER_SEARCH_BY = "SET_FILTER_SEARCH_BY";
export const GET_COMICS_BY_ID = "GET_COMICS_BY_ID";
export const GET_SERIES_BY_ID = "GET_SERIES_BY_ID";
export const GET_STORIES_BY_ID = "GET_STORIES_BY_ID";

export function getAllCharacters() {
  return async function (dispatch: any) {
    try {
      const hashObj = hashFunction();

      const allCharacters = await axios.get(
        `https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=50&ts=${hashObj.ts}&apikey=${API_KEY_PUBLIC}&hash=${hashObj.hash}`
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

export function setFilterSearchBy(filterBy: string) {
  return async function (dispatch: any) {
    try {
      dispatch({
        type: SET_FILTER_SEARCH_BY,
        payload: filterBy,
      });
    } catch (error) {
      console.log('Error in "setFilterSearchBy" action', error);
    }
  };
}

export function getComicsById(id: string) {
  return async function (dispatch: any) {
    try {
      const hashObj = hashFunction();

      const allComics = await axios.get(
        `https://gateway.marvel.com/v1/public/characters/${id}/comics?limit=5&ts=${hashObj.ts}&apikey=${API_KEY_PUBLIC}&hash=${hashObj.hash}`
      );
      dispatch({
        type: GET_COMICS_BY_ID,
        payload: allComics.data.data.results,
      });
    } catch (error) {
      console.log('Error in "getComicsById" action', error);
    }
  };
}

export function getSeriesById(id: string) {
  return async function (dispatch: any) {
    try {
      const hashObj = hashFunction();

      const allSeries = await axios.get(
        `https://gateway.marvel.com/v1/public/characters/${id}/series?limit=5&ts=${hashObj.ts}&apikey=${API_KEY_PUBLIC}&hash=${hashObj.hash}`
      );
      dispatch({
        type: GET_SERIES_BY_ID,
        payload: allSeries.data.data.results,
      });
    } catch (error) {
      console.log('Error in "getSeriesById" action', error);
    }
  };
}

export function getStoriesById(id: string) {
  return async function (dispatch: any) {
    try {
      const hashObj = hashFunction();

      const allStories = await axios.get(
        `https://gateway.marvel.com/v1/public/characters/${id}/stories?limit=5&ts=${hashObj.ts}&apikey=${API_KEY_PUBLIC}&hash=${hashObj.hash}`
      );
      dispatch({
        type: GET_STORIES_BY_ID,
        payload: allStories.data.data.results,
      });
    } catch (error) {
      console.log('Error in "getStoriesById" action', error);
    }
  };
}
