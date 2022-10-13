import copyStorage from "./copyStorage";
const SLEEP_TIME = 1000;

let runFn = null

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
    window.localStorage.setItem('priceData', JSON.stringify(data, null, "  "))
    copyStorage.priceData = JSON.stringify(data, null, "  ")


    return sleep( data.amount % 2 == 0 ? dataService.replySuccess : dataService.replyFail);
  },
};
export default priceApi;
