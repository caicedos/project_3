import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
// import Form from "../components/Form";
// import Book from "../components/Book";
// import Footer from "../components/Footer";
import API from "../utils/API";
// import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Home extends Component {
  state = {
    products: [],
    
  };


  componentDidMount() {
    this.getSavedProducts();
  }

  getSavedProducts = () => {
    API.getSavedProducts()
      .then(res =>
        this.setState({
          products: res.data
        })
      )
      .catch(err => console.log(err));
  };

//   handleProductAdd = id => {
//     API.addCartProduct(id).then(res =>
//       this.setState({
//         cartProducts: [res.data]
//       })
//     )
//     .catch(err => console.log(err));
// };

handleProductAdd = id => {
  const product = this.state.products.find(product => product._id === id);

  API.saveCart({
    _id: product._id,
    name: product.name,
    pictureUrl: product.pictureUrl,
    price: product.price,
  })
  // add some function that makes the add button dissapear
  // also add a flash that says added to cart
  // .then(() => this.getBooks());
};



  render() {
    return (
      <div className="container">
        {this.state.products.length ? (
                <div className="card-deck mt-5">
                  {this.state.products.map(product => (
                    <Card
                      key={product._id}
                      name={product.name}
                      pictureUrl={product.pictureUrl}
                      price={product.price}
                   
                      Button={() => (
                        <button
                          onClick={() => this.handleProductAdd(product._id)}
                          className="btn btn-sm btn-danger ml-2 mt-auto"
                        >
                          Add
                        </button>
                      )}
                    />
                  ))}
                </div>
              ) : (
                <h2 className="text-center">Loading</h2>
              )}
      </div>
    );
  }
}

export default Home;


