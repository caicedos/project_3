import React, { Component } from "react";
import Card from "../components/Card";
// import Footer from "../components/Footer";
import API from "../utils/API";


class Home extends Component {
  state = {
    products: []
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



handleProductAdd = id => {
  const product = this.state.products.find(product => product._id === id);

  API.saveCart({
    _id: product._id,
    name: product.name,
    pictureUrl: product.pictureUrl,
    price: product.price,
  })
  .then(() => alert("added to cart") );
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
                          className="btn btn-sm btn-secondary ml-2 mt-auto"
                        >
                          Add <i class="fas fa-plus"></i>
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


