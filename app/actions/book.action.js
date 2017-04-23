import fetch from 'isomorphic-fetch'
import { fetchData } from '../api/bookApi'

// 请求相关的Actions
export const RESET_BOOK_REQ = 'RESET_BOOK_REQ'
export function resetBookReq() {
  return {
    type: RESET_BOOK_REQ
  }
}
export const RECEIVE_BOOK_MESSAGE = 'RECEIVE_BOOK_MESSAGE'
export function receiveBookMessage(res) {
  return {
    type: RECEIVE_BOOK_MESSAGE,
    res
  }
}
export const BOOK_REQUEST = 'BOOK_REQUEST'
export function bookRequest(data) {
  return {
    type: BOOK_REQUEST,
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

export const RECEIVE_TYPES = 'RECEIVE_TYPES'
export function receiveTypes(json) {
  return {
    type: RECEIVE_TYPES,
    json
  }
}

export const fetchBookData = fetchData

// export const RECEIVE_ADDBOOK_RES = 'RECEIVE_ADDBOOK_RES'
// export function receiveAddbookRes(res) {
//   return {
//     type: RECEIVE_ADDBOOK_RES,
//     res
//   }
// }

// export const RECEIVE_BOOK_INFO = 'RECEIVE_BOOK_INFO'
// export function receiveBookInfo(res) {
//   return {
//     type: RECEIVE_BOOK_INFO,
//     res
//   }
// }
