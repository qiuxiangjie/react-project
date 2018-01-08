let getHomeData = (cityId) => {
  return {
    type: 'HOME_FETCHINDEX',
    playload: {
      type: 'get',
      url: '/user-app-service/apis/product/get-main-page-info',
      param: {
        cityId: cityId
      }
    }
  }
};
let setTestVal = (state) => {
  return {
    type: 'HOME_TEST',
    playload: {
      state
    }
  }
};

module.exports = {getHomeData, setTestVal};
