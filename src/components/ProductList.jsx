import React, { Component } from 'react'
//import { render } from 'react-dom'
import {getProducts, deleteProduct} from '../actions/actions.js';
import {Link} from 'react-router';
import { connect } from 'react-redux';
//import {bindActionCreators} from 'redux';


class ProductList extends Component 
{
    
    componentWillMount() 
    {
        if(this.props.products && this.props.products.length === 0)
            this.props.getProducts(`query{products {_id title price quantity imgUri }}`);
        else
            console.log('not loaded');
    }

   render() {

      return (

            <div className="container">

                <div className="row" style={{marginBottom: "10px"}}>
                    <div className="col-md-12">
                        <Link to="/add" className="btn btn-primary pull-right">Add Product</Link>
                    </div>
                </div>  

                <div className="row">		
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table id="mytable" className="table table-bordered">
                                <thead>
                                    <th className="text-danger">Title</th>
                                    <th className="text-danger">Quanity</th>
                                    <th className="text-danger">Price</th>
                                    <th className="text-danger">Edit</th>
                                    <th className="text-danger">Delete</th>
                                </thead>
                                <tbody>

                                    {
                                        this.props.products.map((value, key) => {
                                        return (
                                            <tr key={key}>
                                                <td>{value.title}</td>
                                                <td>{value.quantity}</td>
                                                <td>{value.price}</td>
                                                <td>
                                                    <Link to={`/edit/${value._id}`} className="btn btn-primary btn-xs">
                                                        <span className="glyphicon glyphicon-pencil"></span>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger btn-xs" onClick={(e)=> this.deleteProduct(e, value._id, value.title)}>
                                                        <span className="glyphicon glyphicon-trash"></span>
                                                    </button>
                                                </td>
                                            </tr>
                                        )}
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
            </div>

         
      );
   }

 
   deleteProduct(e, _id, title)
   {
        if(confirm(`Are you sure you want to delte the '${title}' Product ?`)) 
        {
            this.props.deleteProduct(_id);
        }
        
   }


   editProduct(e, _id)
   {
        alert(_id);
   }

}


const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: (payload) => {
      return dispatch(getProducts(payload));
    },
    deleteProduct: (_id) => {
      return dispatch(deleteProduct(_id));
    },
  }
};


const mapStateToProps = (state) => {
  return {
    products: state.todos.products
  }  
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);