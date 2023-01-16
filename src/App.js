import React from "react";

import Header from "./Header";
import AddButton from "./AddButton";
import ItemList from "./ItemList";

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
    newItems.sort().pop();
    this.setState({ items: newItems });
  };

  handleChangeItem = (index) => {
    const itemName = prompt(
      "Change to what?",
      this.state.items[index].name
    );
    this.setState({
      edit: (this.state.items[index].name = itemName)
    });
  };

  render() {
    return (
      <div className="outer-container">
        <div className="shoppinglist">
          <Header
            title="Shopping List"
            boughtCount={
              this.state.items.filter((item) => item.bought)
                .length
            }
            totalCount={this.state.items.length}
          />
          <AddButton addItem={this.handleAddItem} />
          <ItemList
            items={this.state.items}
            toggleBuy={this.handleBoughtChange}
            deleteItem={this.handleRemoveItem}
            editItem={this.handleChangeItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
