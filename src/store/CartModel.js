import products from "../../api/products";
import ProductsListModel from "./ProductsListModel";
import ProductModel from "./ProductModel"

class CartModel {
  productAmounts = {}

  addProduct(id, amount){
    this.productAmounts[id] = (this.productAmounts[id] ?? 0) + amount

    this.productAmounts = { ...this.productAmounts }
  }

  /** @return {Array<ProductModel} */
  getListProducts(){
    return Object.keys(this.productAmounts)
      .filter((product_id) => (ProductsListModel.some(({id}) => (id === product_id))))
      .map((product_id) => ({
        id: product_id,
        ...ProductsListModel.find(({id}) => (id === product_id)),
        amount: this.productAmounts[product_id]
    }))
  }

  getFullPrice(){
    return this.getListProducts().reduce((result, {amount, price}) => (result + amount * price), 0)
  }
}

const cart = new CartModel()
export default cart