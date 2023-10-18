import React from "react";
import NavbarComponent from "./Navbar";
import CardsComponent from "./Cards";
import ChartsComponent from "./Charts";
import TableComponent from "./Table";

const MainComponent = () => {
  return (
    <div className="col-md-10 main">
      <NavbarComponent />
      <CardsComponent />
      <ChartsComponent />
      <TableComponent />
    </div>
  );
};

export default MainComponent;
