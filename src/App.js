import React from 'react';
// import { Link } from 'react-router';
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux';


class App extends React.Component 
{
    render() 
    {
        return(

            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center text-primary">Products</h1>
                    </div>
                </div>                    

                <div className="row">
                    {this.props.children}
                </div>

            </div>
        );
    }
}

export default App;