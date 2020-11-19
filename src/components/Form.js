import React from 'react'
import "./Form.css"
import qs from 'qs'

class Form extends React.Component {
    state = {
        name : "",
        picture: ""

    }

   change = (e) => {
        this.setState ({[e.target.name] : e.target.value})
    }

    submitForm = (e) => {
        e.preventDefault();
        const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: qs.stringify(this.state)
        };
    
        const url = "...";

        fetch(url, config)
        .then((res) => res.json())
        .then((res) => {
          if (res.error) {
            alert(res.error);
          } else {
            alert(`Your ad for ${res} has been published!`);
          }
        })
        .catch((e) => {
          console.error(e);
          alert("Your ad has not been published, please start over.");
        });
    };
    

    render () {
    console.log(this.state);
    return (

        <div className="form-style">
            
            <h1> What do you want to exchange ?</h1>     
                <form onSubmit={this.submitForm} className="body-form">

                    <label for="name">Product to exchange</label>
                   
                    <input type="text" id="name" name="name" value={this.state.name} onChange={this.change} placeholder="Choose your product"/>
                          
                    <label for="picture">Picture </label>
                
                    <input type="text" id="picture" name="picture" value={this.state.picture} onChange={this.change} placeholder="Put your picture"/>
                   
                    <button type="submit" value="Valide" className="btn-form-submit">Submit</button>


                </form>
                
            
        </div>
    );


}}



export default Form
