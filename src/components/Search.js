import React from "react";
import "./search.css";

const products = [
  {
    name: " Cat  ",
    function: "best chat in the market",
    quantity: 2,
    picture:
      "https://previews.123rf.com/images/chris_elwell/chris_elwell1506/chris_elwell150600017/40962129-rustique-fourche-en-bois-en-plein-champ-de-bl%C3%A9.jpg",
  },

  {
    name: "Fork",
    function: "Best fourk in the market ",
    quantity: 10,
    picture:
      "https://previews.123rf.com/images/chris_elwell/chris_elwell1506/chris_elwell150600017/40962129-rustique-fourche-en-bois-en-plein-champ-de-bl%C3%A9.jpg",
  },
  {
    name: " pelle ",
    function: "Best pelle in the market",
    quantity: 2,
    picture:
      "https://media.istockphoto.com/photos/shovel-picture-id872877836?k=6&m=872877836&s=612x612&w=0&h=UfE4xOjQNSSlG1SmpZ8vmEojSKvS-z4NIp9IN8EvP74=",
  },
  {
    name: " pelle ",
    function: "Best pelle in the market",
    quantity: 2,
    picture:
      "https://media.istockphoto.com/photos/shovel-picture-id872877836?k=6&m=872877836&s=612x612&w=0&h=UfE4xOjQNSSlG1SmpZ8vmEojSKvS-z4NIp9IN8EvP74=",
  },
  {
    name: " pelle ",
    function: "Best pelle in the market",
    quantity: 2,
    picture:
      "https://media.istockphoto.com/photos/shovel-picture-id872877836?k=6&m=872877836&s=612x612&w=0&h=UfE4xOjQNSSlG1SmpZ8vmEojSKvS-z4NIp9IN8EvP74=",
  },
];

class Search extends React.Component {
  state = {
    object: products,
  };

  componentDidMount = () => {
    const url = "";
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ object: data }));
  };

  render() {
    return (
      <div>
        <h1 className="search-h1">what can you have in return ? </h1>
        <div className="search-display">
          {this.state.object.map((para, index) => (
            <div className="search-img">
              <div>
                <img src={para.picture} alt={para.name} />
                <p>{para.name} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
