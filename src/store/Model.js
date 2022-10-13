import api from "../../api/price";

class Model {
  _price = ''
  get price(){ return this._price }
  set price(val){
    this._price = parseInt(val.toString())
    this.calcAmount()
    setTimeout(() => {
      this.addLog(`change price: ${val}`)
    })
  }

  _qty = ''
  get qty(){ return this._qty }
  set qty(val){
    this._qty = parseInt( val.toString() )
    this.calcAmount()
    setTimeout(() => {
      this.addLog(`change qty: ${val}`)
    })
  }

  _amount = ''
  get amount(){ return this._amount }
  set amount(val){
    this._amount = parseInt( val.toString() )
    this._qty = 1
    this._price = parseInt( val.toString() )
    setTimeout(() => {
      this.addLog(`change amount: ${val}`)
    })
  }

  calcAmount(){
    this._amount = this.price * this.qty
  }

  nonce = 0
  incrNonce(){ this.nonce++ }

  log = []
  addLog(message){ this.log.unshift(message) }

  __sending = false
  send(data){
    if(this.__sending){
      return Promise.reject(new Error('double send'))
    }

    this.__sending = true
    this.incrNonce()
    return api.save({
      price: this.price,
      qty:  this.qty,
      amount: this.amount,
      nonce: this.nonce
    }).then((reply) => {
      this.addLog({
        reply, storage: window.localStorage.priceData
      })
      this.__sending = false
    }).catch((err) => {
      this.__sending = false
      this.addLog({
        err, storage: window.localStorage.priceData
      })
      return Promise.reject(err)
    })
  }
}

export default new Model()
