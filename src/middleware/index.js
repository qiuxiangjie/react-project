/** *********
* action需要return两个:type,playload,bridge(用于要直接传到reducer，中间不变的，中转用，不是必须)
* playload为请求参数对象,三个参数(参数与老的保持一致):
*   type: 参数为get或者post等http动作
*   url: 请求的url,不包含domain及参数
*   param: 参数组
* 对应的store,接收: action.playload里的数据:
*   statusCode: 为0为请求成功,否则为业务失败，默认由BaseContainer用Toast显示非0的消息
*   message: 返回消息
*   data: 返回的数据
************/
import * as Types from './fetch.types'
import Fetch from './fetchdata'
let loadCount = 0
const isBrowser = process.browser
export default ({dispatch, getState}) => (next) => async (action) => {
  if (action.playload && action.playload.url && action.playload.type) {
    if (isBrowser) {
      dispatch({
        type: Types.SHOWLOADING,
        isShow: true,
        isShowNoWifi: false
      })
    }
    let {type, playload} = action
    try {
      let result = await Fetch(playload)
      /* 针对dms相关接口返回格式做处理 */
      if (result && result.response) {
        result = result.response
      }
      if (result && result.code === 0) {
        dispatch({
          type: type,
          playload: {
            data: result.data,
            message: result.message,
            code: result.code,
            pageSize: result.pageSize,
            curPage: result.curPage,
            totalPages: result.totalPages,
            total: result.total
          },
          bridge: action.bridge
        })
      } else {
        if (isBrowser) {
          dispatch({
            type: Types.SHOWERRORMESSAGE,
            errorMessage: result.message
          })
          dispatch({
            type: `${type}_FAIL`,
            playload: {
              message: result.message,
              code: result.code
            },
            bridge: action.bridge
          })
        }
      }
      // 分发给执行action的store,store根据返回值再做处理.
      if (isBrowser) {
        let showLoading = showLoadingStatus(false)
        dispatch({
          type: Types.SHOWLOADING,
          isShow: showLoading,
          isShowNoWifi: false
        })// loading隐藏-根据请求数
      }
      return result
    } catch (err) {
      console.log(`fetch catch:${err}`)
      if (isBrowser) {
        let showLoading = showLoadingStatus(false)
        dispatch({
          type: Types.REQUESTFAIL,
          query: action,
          isShow: showLoading
        })
      }
      return getState()
    }
    // return next(action);
  } else {
    return next(action)
  }
}
function showLoadingStatus (isShow) {
  if (isShow) {
    loadCount += loadCount
  } else {
    loadCount -= loadCount
  }
  if (loadCount > 0) {
    return true
  } else {
    loadCount = 0
    return false
  }
}


