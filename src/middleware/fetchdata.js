
export default async (args) => {
  let params = args.type.toUpperCase() === 'GET' ? null : args.param
  let url = args.type.toUpperCase() === 'GET' ? makeUrl(args) : args.url
  let requestUrl = '/' + url
  let bngUserAgent = {
    appVersion: '1.0.0',
    buildVersion: '',
    networkStatus: '',
    adfa: '',
    channel: 'h5',
    mobelName: '',
    osVersion: '',
    reOsVersion: '',
    deviceType: 'web'
      // accessToken: loginToken
  }

  return fetch(requestUrl, {
    credentials: 'include',
    method: args.type.toUpperCase(),
    follow: 1,
    timeout: 10000,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'bngUserAgent': JSON.stringify(bngUserAgent)
    },

    body: params ? JSON.stringify(params) : null
  }).then((response) => response.json())
}

function makeUrl (UrlParam) {
  let url = UrlParam.url
  let param = UrlParam.param

  if (param) {
    url = !url.includes('?') && url + '?'
    for (let key of Object.keys(param)) {
      url = url + key + '=' + param[key] + '&'
    }
    if (url.endsWith('&')) {
      url = url.substring(0, url.length - 1)
    }
  }
  return url
}
