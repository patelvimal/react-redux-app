

// inspired by https://leanpub.com/redux-book

import { apiStart, apiEnd, apiError } from "./actions";
import api from '../../shared/apis';

const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);
  if (action.meta && action.meta.type !== 'API') return;

  const {url,method,data } = action.meta;
  dispatch(apiStart);
  
  api.request({
      url,
      method,
      data
    })
    .then(({ data }) => {
      dispatch({type: action.type,payload:data});
    })
    .catch(error => {
      dispatch(apiError);
      // dispatch(apiError(error));
      // dispatch(onFailure(error));

      // if (error.response && error.response.status === 403) {
      //   dispatch(accessDenied(window.location.pathname));
      // }
    })
    .finally(() => {
      dispatch(apiEnd);
    });
};

export default apiMiddleware;