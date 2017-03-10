import fetch from 'isomorphic-fetch'

export const ADD_BOOK = 'ADD_BOOK'
export function addBook(text) {
  return {
    type: ADD_BOOK,
    text
  }
}

// 请求相关的Actions
export const REQUEST_DATA = 'REQUEST_DATA'
export function requestData(data) {
  return {
    type: REQUEST_DATA,
    data
  }
}

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'
export function receiveBooks(json) {
  return {
    type: RECEIVE_BOOKS,
    json
  }
}

export const RECEIVE_ADDBOOK_RES = 'RECEIVE_ADDBOOK_RES'
export function receiveAddbookRes(res) {
  return {
    type: RECEIVE_ADDBOOK_RES,
    res
  }
}

export const RECEIVE_BOOK_INFO = 'RECEIVE_BOOK_INFO'
export function receiveBookInfo(res) {
  return {
    type: RECEIVE_BOOK_INFO,
    res
  }
}

export const fetchData = (type, options) => (dispatch) => {
    dispatch(requestData(type))
    switch (type) {
      case 'books':
        return fetch('/books')
          .then(response => response.json())
          .then(json =>
            dispatch(receiveBooks(json))
          )
      case 'getBookInfo':
        return fetch('https://api.douban.com/v2/book/isbn/' + options)
          .then(response => response.json())
          .then(json =>
            dispatch(receiveBookInfo(json))
          )
    // POST
      case 'addbook':
        return fetch('/admin/books/new', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(options)
         })
          .then(res =>
            dispatch(receiveAddbookRes(res))
          )
    }
}
