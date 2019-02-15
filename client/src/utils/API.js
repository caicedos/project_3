import axios from "axios";

export default {
  // Gets books from the Google API

  // getBooks: function(q) {
  //   return axios.get("/api/google", { params: { q: "title:" + q } });
  // },



  // Gets all saved books
  getSavedProducts: function() {
    return axios.get("/api/products");
  },
  // Deletes the saved book with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Deletes the saved book with the given id
  // addCartProduct: function(id) {
  //   return axios.get("/api/products/" + id);
  // },
  // Saves an book to the database
  saveProduct: function(productData) {
    return axios.post("/api/products", productData);
  },






// cart stuff


  // Gets all saved cart
  getSavedCart: function() {
    return axios.get("/api/cart");
  },
  // Deletes the saved book with the given id
  deleteCart: function(id) {
    return axios.delete("/api/cart/" + id);
  },
  // Deletes the saved book with the given id
  // addCartProduct: function(id) {
  //   return axios.get("/api/cart/" + id);
  // },
  // Saves an book to the database
  saveCart: function(cartData) {
    return axios.post("/api/cart", cartData);
  }
};
