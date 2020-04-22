import React, { Component } from "react";

class NavBarComponent extends Component {
  state = {};
  componentDidMount = () => {
    const onCallProperty = this.props.onCall;
    console.log(onCallProperty.isOpened);
    console.log(onCallProperty.top);
    console.log(onCallProperty.component);
  };
  render() {
    return (
      <>
        <h1>Navbar</h1>
      </>
    );
  }
}

export default NavBarComponent;
