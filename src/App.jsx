import React from "react";
import { render } from "react-dom";

import ProductForm from "./ProductForm";

const App = () => {
  return <ProductForm />;
};

render(<App />, document.getElementById("app"));
