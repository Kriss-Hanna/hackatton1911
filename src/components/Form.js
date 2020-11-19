import React from 'react'
import "./Form.css"

class Form extends React.Component {

    render () {

    return (

        <div className="form-style">
            
            <h1> What do you want to exchange ?</h1>     
                <form>

                    <label for="name">Product to exchange</label>
                    <br/>
                    <br/>
                    <input type="text" id="name" name="product_name"/>
                    <br/>
                    <br/>            
                    <label for="picture">Picture </label>
                    <br/>
                    <br/>   
                    <input type="text" id="picture" name="product_picture"/>
                    <br/>
                    <br/>   
                    <button>Submit</button>
                    <br/>
                    <br/>   

                </form>
                
            
        </div>
    );


}}



export default Form
