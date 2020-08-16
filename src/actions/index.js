import potter from '../apis/potter-api';

const APIKEY = '$2a$10$ryosGBA9vJEsWP9/kFuFBua2NRdrouvIwcjXvc4sScXMGwkhplL4G';

export const fetchTerm = (term) => {
  return {
    type: 'FETCH_TERM',
    payload: term,
  };
};

export const fetchCharacters = () => async (dispatch) => {
  const response = await potter.get('/characters', {
    params: {
      key: APIKEY,
    }
  });
  dispatch({
    type: 'FETCH_CHARACTERS', payload: response.data,
  });
};

export const fetchActivePage = (pageNumber) => {
  return {
    type: "FETCH_ACTIVE_PAGE",
    payload: pageNumber,
  };
};

export const fetchActiveCharacter = (activeCharacter) => {
  return {
    type: "FETCH_ACTIVE_CHARACTER",
    payload: activeCharacter,
  };
};

