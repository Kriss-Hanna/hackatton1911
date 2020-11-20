import React from "react";
import "./Form.css";
// import qs from "qs";

const array = [
  {
    name: "Charret",
    picture:
      "https://seniors-en-mission.net/images/Images-Ane-et-charette/Ane-Charrete-1-Gh.jpg",
  },
  {
    name: "Donkey",
    picture:
      "https://lh3.googleusercontent.com/proxy/viUH-0xdeabvWuPkHtO0FfYDp-w2ByiTCK1iAIq5oFvokYxnMnTfJgAJfZ23jf1CD15ZmoRE8t3oonamuvGTKhqstkdtPPMM9ZHoTF61JF0",
  },
  {
    name: "Armor",
    picture:
      "https://medias.liberation.fr/photo/1138864-l-artiste-performeur-abraham-poincheval-sillonne-la-campagne-bretonne-a-pied-avec-armure-medievale-l.jpg?modified_at=1531218006&width=960",
  },
];

function Form() {
  const [product, setProduct] = React.useState({
    name: "",
    picture: "",
  });
  const [add, setAdd] = React.useState(false);
  // const [allProducts, setAllProducts] = React.useState(array);

  const [troc ,setTroc] = React.useState(false) ;

  const change = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    array.push(product);
    setAdd(!add);
  };

  const changeTroc =(e) => {
    setTroc(!troc)
  }

  // const config = {    //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: qs.stringify(this.state),
  // };    // const url = "...";
  // fetch(url, config)
  //   .then((res) => res.json())
  //   .then((res) => {
  //     if (res.error) {
  //       alert(res.error);
  //     } else {
  //       alert(`Your ad for ${res} has been published!`);
  //     }
  //   })
  //   .catch((e) => {
  //     console.error(e);
  //     alert("Your ad has not been published, please start over.");
  //   });

  console.log(array);
  return (
    <div className="form-style">
      <h1> What do you want to exchange ?</h1>
      {array.map((product) => (
        <div>
          <p>{product.name} </p>
          <img src={product.picture} alt={product.name} className="img-form"  />
          <button onClick={changeTroc} >Propose this product</button>
        </div>
      ))}
      <fieldset>
        <legend>Add product </legend>
        <form onSubmit={submitForm} className="body-form">
          <label for="name">Name </label>

          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={change}
            placeholder="Choose your product"
          />

          <label for="picture">Picture </label>

          <input
            type="text"
            id="picture"
            name="picture"
            value={product.picture}
            onChange={change}
            placeholder="Put your picture"
          />

          <button type="submit" value="Valide" className="btn-form-submit">
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default Form;
