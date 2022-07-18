import api from '../../api/products'
import ProductModel from "./ProductModel";

/** @type {Array<ProductModel>} */
const ProductsListModel = []

export default ProductsListModel

/**
 * @param product {ProductModel}
 */
export function updateProduct(product){
  const index = ProductsListModel.findIndex(({id}) => (id === product.id));
  if(index >= 0){
    ProductsListModel.splice(index, 1, product)
  }else{
    ProductsListModel.push(product)
  }
}

export async function loadProducts() {
  const productsList = await api.getProductsList();
  productsList.map((product) => { updateProduct(product); });
  return productsList;
}