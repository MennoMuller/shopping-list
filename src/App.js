import React from "react";

import Header from "./Header";
import AddButton from "./AddButton";
import Item from "./Item";

class App extends React.Component {
  state = {
    items: [
      {
        name: "Potatoes",
        id: 1,
        bought: true
      },
      {
        name: "Eggs",
        id: 2,
        bought: false
      },
      {
        name: "Milk",
        id: 3,
        bought: false
      },
      {
        name: "Mangoes",
        id: 4,
        bought: true
      },
      {
        name: "Bread",
        id: 5,
        bought: true
      }
    ],
    nextID: 6
  };

  handleBoughtChange = (index) => {
    console.log(index);
    this.setState({
      bought: (this.state.items[index].bought =
        !this.state.items[index].bought)
    });
  };

  handleAddItem = () => {
    const itemName = prompt("Add what?");
    this.setState((prevState) => ({
      items: prevState.items.concat([
        {
          name: itemName,
          id: prevState.nextID,
          bought: false
        }
      ]),
      nextID: prevState.nextID + 1
    }));
  };

  handleRemoveItem = (index) => {
    let newItems = this.state.items;
    delete newItems[index];
    this.setState({ items: newItems });
  };

  render() {
    return (
      <div className="shoppinglist">
        <Header title="Shopping List" />
        <AddButton addItem={this.handleAddItem} />
        <div className="list-box">
          {this.state.items
            .sort((a, b) =>
              a.name > b.name ? 1 : b.name > a.name ? -1 : 0
            )
            .sort((a, b) => a.bought - b.bought)
            .map((item, index) => (
              <Item
                name={item.name}
                key={item.id.toString()}
                bought={item.bought}
                toggleBuy={this.handleBoughtChange}
                deleteItem={this.handleRemoveItem}
                index={index}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
