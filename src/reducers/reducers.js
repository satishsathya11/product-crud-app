import { combineReducers } from 'redux'
//import { ADD_TODO } from '../../src/actions/actions.js'

//import Immutable from "immutable";

const immutableState = {
  fetching: false,
  product : {},
  products: []
};


function todos(state = immutableState, action) 
{
    switch (action.type) {
	
        case 'GET_PRODUCTS':
            return Object.assign({}, state, 
            {
                fetching : false,
                products : action.response.data.products
            });


        case 'GET_PRODUCT':
            return Object.assign({}, state, 
            {
                fetching : false,
                product : action.response.data.product
            });


        case "DELETE_PRODUCTS":
        var toDelete = new Set([action.response.data.deleteProduct._id]);
        var newArray = state.products.filter(obj => !toDelete.has(obj._id));
        return Object.assign({}, state, 
            {
                fetching : false,
                products : newArray
            });


        case "ADD_PRODUCT_REQUEST":
        return Object.assign({}, state, {
            fetching:true,
        });
        

        case "ADD_PRODUCT_FINISHED":
        return Object.assign({}, state, 
            {
                fetching : false,
                products : [...state.products, action.response.data.createProduct ]
            });


        case "EDIT_PRODUCT":
        return Object.assign({}, state, 
            {
                products: state.products.map((todo, index) => 
                {
                    if (todo._id === action.response.data.editProduct._id) 
                    {
                        return Object.assign({}, todo, {title: action.response.data.editProduct.title, quantity: action.response.data.editProduct.quantity,
                            price: action.response.data.editProduct.price, imgUri: action.response.data.editProduct.imgUri     });
                    }
                    return todo;
                })
            });


      default:
      return state;

   }
}

const todoApp = combineReducers({
   todos
})

export default todoApp