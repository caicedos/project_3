import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
// import Form from "../components/Form";
// import Book from "../components/Book";
// import Footer from "../components/Footer";
import API from "../utils/API";
// import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Cart extends Component {
  state = {
    cartProducts: []
  };



  componentDidMount() {
    this.getSavedCart();
  }

  getSavedCart = () => {
    API.getSavedCart()
      .then(res =>
        this.setState({
          cartProducts: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleCartDelete = id => {
    API.deleteCart(id).then(res => this.getSavedCart());
  };


  render() {
    const {cartProducts} = this.state
    return (
      <div className="container">
        <h1 className="text-center">Checkout</h1>
        {cartProducts.length ? (
                <div className="card-deck">
                  {cartProducts.map(cart => (
                    <Card
                      key={cart._id}
                      name={cart.name}
                      pictureUrl={cart.pictureUrl}
                      price={cart.price}
                   
                      Button={() => (
                        <button
                          onClick={() => this.handleCartDelete(cart._id)}
                          className="btn btn-sm btn-danger ml-2 mt-auto"
                        >
                          delete
                        </button>
                      )}
                    />
                  ))}
                </div>
              ) : (
                <h2 className="text-center">Cart is empty</h2>
              )}
      </div>
    );
  }
}

export default Cart;