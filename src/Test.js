import React, { Component } from "react";
import { inject, observer } from "mobx-react";

class Test extends Component {
  render() {
      console.log(this.props.translationStore.t("Welcome to React"));
      
    return <div>{this.props.translationStore.t("Welcome to React")}</div>;
  }
}

export default inject("translationStore")(observer(Test));
