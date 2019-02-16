import React, { Component } from "react";
import Card from "../components/Card";
import Price from "../components/Price";
// import Footer from "../components/Footer";
import API from "../utils/API";


class Cart extends Component {
  state = {
    cartProducts: [],
    
  };

  componentDidMount() {
    this.getSavedCart();
    
  }

  getSavedCart = () => {
    API.getSavedCart()
      .then(res =>
        this.setState({
          cartProducts: res.data,
          
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
        
        {cartProducts.map(cart => (
            <Price
              key={cart._id}
              price={cart.price}        
            />
        ))}
       
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
                          <i class="fas fa-trash-alt"></i>
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