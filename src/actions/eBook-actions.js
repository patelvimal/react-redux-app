import apis from '../apis';
import { GET_BOOKS, DELETE_BOOK, SAVE_BOOK, GET_BOOK } from '../constants/action-type';

export const getBooks = () =>async dispatch=> {
    const respone = await apis.get('/books');
    dispatch({ type: GET_BOOKS, payload: respone.data });
}

export const getBookById = (id) =>async dispatch=> {
    const respone = await apis.get('/books/' + id);
    dispatch({ type: GET_BOOK, payload: respone.data });
}

export const saveBook = (bookInfo)=> async dispatch => {
    const respone = await apis.post('/books',bookInfo );
    dispatch({ type: SAVE_BOOK, payload: respone.data });
}

export const deleteBook = (id)=> async dispatch => {
    const respone = await apis.delete('/books/' + id);
    dispatch({ type: DELETE_BOOK, payload: respone.data });
}