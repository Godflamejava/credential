import React, { Component } from 'react';

class Main extends Component {



  render() {
    return (
      <div id="content">
        <h1>Add Credentials</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.productName.value
          const price = this.productPrice.value
          this.props.createProduct(name, price)
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="productName"
              type="text"
              ref={(input) => { this.productName = input }}
              className="form-control"
              placeholder="Username"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="productPrice"
              type="text"
              ref={(input) => { this.productPrice = input }}
              className="form-control"
              placeholder="Password"
              required />
          </div>
          <button type="submit" className="btn btn-primary">Add Credential</button>
        </form>
        <p>&nbsp;</p>
        <h2>Current Credentials</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
              <th scope="col">Owner</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="productList">
            {
                this.props.products.map((product,key)=> {
                    return ( <tr key={key}>
                        <th scope="row">{key+1}</th>
                        <td>{product.name.toString()}</td>
                        <td >{product.price.toString()}</td>
                        <td>{product.owner.toString()}</td>
                        <td><button className="Delete" onClick={(event)=>{this.props.deleteProduct(key+1)}}>Delete</button></td>
                      </tr>
                      )
                })
            }
           
           
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;