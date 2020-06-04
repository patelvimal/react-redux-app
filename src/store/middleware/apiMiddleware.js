

// inspired by https://leanpub.com/redux-book

import { apiStart, apiEnd, apiError } from "./actions";
import api from '../../shared/apis';

const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);
  if(action.api == undefined) return;
  //if (action.meta && action.meta.type !== 'API') return;

  const {url,method,data } = action.api;
  dispatch(apiStart);
  
  api.request({
      url,
      method,
      data
    })
    .then(({ data }) => {
      setTimeout(()=>{
        dispatch({type: action.type,payload:data});
      },3000)
      
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
      setTimeout(()=>{
        dispatch(apiEnd);
      },3000)
      
    });
};

export default apiMiddleware;