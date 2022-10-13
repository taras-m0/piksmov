import copyStorage from "./copyStorage";
const SLEEP_TIME = 1000;


function sleep(fn) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fn());
    }, SLEEP_TIME);
  });
}

const dataService = {
  replySuccess() {
    return {success: true}
  },

  replyFail() {
    return {success: false}
  },
};

const priceApi = {
  save(data) {
    if(data.qty % 2 == 0){
      window.localStorage.setItem('priceData', JSON.stringify(data, null, "  "))
      copyStorage.priceData = JSON.stringify(data, null, "  ")
      return sleep(  dataService.replySuccess );

    }else {
      return sleep( dataService.replyFail);
    }
  },
};
export default priceApi;
