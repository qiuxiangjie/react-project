import * as Types from './fetch.types'
const initialState = {
  isShowNoWifi: false,
  isShowLoad: false,
  errorMessage: null,
  playload: {}// 保存查询,方便重试
}
export default (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOWLOADING: {
      return {
        ...state,
        isShowLoad: action.isShow,
        isShowNoWifi: action.isShowNoWifi || state.isShowNoWifi
      }
    }
    case Types.REQUESTFAIL: {
      return {
        ...state,
        isShowLoad: action.isShow,
        isShowNoWifi: true,
        playload: action.query
      }
    }
    case Types.SHOWERRORMESSAGE: {
      return {
        ...state,
        errorMessage: action.errorMessage
      }
    }
    default: return state
  }
}
