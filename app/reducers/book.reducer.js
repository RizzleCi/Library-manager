import { RESET_BOOK_REQ, RECEIVE_BOOK_MESSAGE, BOOK_REQUEST, RECEIVE_BOOKS, FILTER_BOOK, RECEIVE_SEARCHRES, RESET_SEARCH} from '../actions/book.action'

const initialState = {
  resCode: '',
  message: '',
  loadingData: false,
  type: '',
  data: null,
  filtedata: null,
  searchRes: null
}

export default function book (state = initialState, action) {
  switch (action.type) {
      case "RESET_BOOK_REQ":
        return Object.assign({}, state, {
          resCode: '',
          message: '',
          filtedata: null,
          searchRes: null
        })
      case "RECEIVE_BOOK_MESSAGE":
        return Object.assign({}, state, {
          resCode: action.res.code || '',
          message: action.res.message || ''
        })
      case "BOOK_REQUEST":
        return Object.assign({}, state, {
          loadingData: true
        })
      case "RECEIVE_BOOKS":
        const data = action.json
        if (data) {
          data.map((item) => Object.assign(item, {key: item._id}))
        }
        return Object.assign({}, state, {
          loadingData: false,
          data: data
        })
      case "FILTER_BOOK":
        if (action.text.join('') === 'all') {
          return Object.assign({}, state, {
            type: '',
            filtedata: null
          })
        } else {
          const filtedata = state.data.filter((item) => {
            return item.type.join('') === action.text.join('')
          })
          return Object.assign({}, state, {
            type: action.text,
            filtedata: filtedata
          })
        }
      case "RECEIVE_SEARCHRES":
        if (typeof(action.res.length) === 'number') {
          return Object.assign({}, state, {
            filtedata: action.res,
            loadingData: false
          })
        }
        return Object.assign({}, state, {
          searchRes: action.res,
          loadingData: false
        })
      case "RESET_SEARCH":
        return Object.assign({}, state, {
          searchRes: null
        })
    default:
      return state
  }
}
