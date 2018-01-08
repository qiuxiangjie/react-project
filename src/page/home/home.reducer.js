let initData = {
  list: {},
  test: 0
}
export default (state = initData, action) => {
  switch (action.type) {
    case 'HOME_FETCHINDEX': {
      return {
        ...state,
        list: action.playload.data || {}
      }
    }
    case 'HOME_TEST': {
      return {
        ...state,
        test: action.playload.state
      }
    }
    default: return state
  }
}
