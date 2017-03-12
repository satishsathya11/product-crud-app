import {apiCall} from '../utils.jsx';


const getServerProducts = (response) => {
  return {
    type: "GET_PRODUCTS",
    response: response
  }
}

const getServerProduct = (response) => {
  return {
    type: "GET_PRODUCT",
    response: response
  }
}

const removeProduct = (response) => {
  return {
    type: "DELETE_PRODUCTS",
    response: response
  }
}

const addProductRequest = () => {
  return {
    type: "ADD_PRODUCT_REQUEST"
  }
}
const addProductFinished = (response) => {
  return {
    type: "ADD_PRODUCT_FINISHED",
    response: response
  }
}


const updateProduct = (response) => {
  return {
    type: "EDIT_PRODUCT",
    response: response
  }
}




export const getProducts = (payload) => {
   return dispatch => 
   {
       return apiCall(payload)
       .then(response => dispatch(getServerProducts(JSON.parse(response))))
       .catch(function(err)
       {
           console.log("Error in Get Products : " + err);
       });
   }
}


export const getProduct = (_id) => {
   return dispatch => 
   {
       return apiCall(`query{product(_id : "${_id}"), {_id title price quantity imgUri}}`)
       .then(response => dispatch(getServerProduct(JSON.parse(response))))
       .catch(function(err)
       {
           console.log("Error in Get Product : " + err);
       });
   }
}


export const deleteProduct = (_id) => {
   return dispatch => 
   {
       return apiCall(`mutation{deleteProduct(_id : "${_id}"){_id, status}}`)
       .then(response => dispatch(removeProduct(JSON.parse(response))))
       .catch(function(err)
       {
           console.log("Error in Delete Products : " + err);
       });
   }
}



export const addProduct = (payload) => {
   return dispatch => 
   {
       dispatch(addProductRequest());
       return apiCall(payload)
       .then(response => dispatch(addProductFinished(JSON.parse(response))))
       .catch(function(err)
       {
           console.log("Error in Add Product : " + err);
       });
   }
}


export const editProduct = (payload) => {
   return dispatch => 
   {
       return apiCall(`mutation{editProduct(_id : "${payload._id}", title : "${payload.title}", quantity : "${payload.quantity}", imgUri : "${payload.imgUri}",
        price : "${payload.price}"), {_id, title, price, quantity, imgUri}}`)
       .then(response => dispatch(updateProduct(JSON.parse(response))))
       .catch(function(err)
       {
           console.log("Error in Delete Product : " + err);
       });
   }
}