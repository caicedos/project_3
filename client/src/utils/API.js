import axios from "axios";

export default {


  getSavedProducts: function() {
    return axios.get("/api/products");
  },

  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },

  saveProduct: function(productData) {
    return axios.post("/api/products", productData);
  },
  
  

 getUsers: function() {
  return axios.get("/api/user");
},

getUser: function(id) {
  return axios.get("/api/user/" + id);
},

deleteUser: function(id) {
  return axios.delete("/api/user/" + id);
},

saveUser: function(userData) {
  return axios.post("/api/user", userData);
},
  


  getSavedCart: function() {
    return axios.get("/api/cart");
  },

  deleteCart: function(id) {
    return axios.delete("/api/cart/" + id);
  },

  saveCart: function(cartData) {
    return axios.post("/api/cart", cartData);
  }
};
