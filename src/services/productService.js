import axios from "axios";

export default class ProductService {
  getProduct() {
    return axios.get("http://localhost:8080/api/products/getall");
  }

  getByProductName(productName) {
    return axios.get("http://localhost:8080/api/products/getbyproductname", {
      params: { productName },
    });
  }
}
