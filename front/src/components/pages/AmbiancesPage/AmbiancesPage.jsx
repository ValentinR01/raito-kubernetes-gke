import React from "react";
import { Heading } from "components/atoms/text";
import { PageTemplate } from "components/templates";
import "./AmbiancesPage.css";
import { ambiancesList } from "./ambiancesData";
import { Link } from "react-router-dom";

const AmbiancesPage = () => {
  const ShowAllAmbianceData = ambiancesList.map((element) => {
    return (
      <Link to={`/ambiances/${element.id}`}>
        <div className="card-body" key={element.id}>
          <div className="card-illustration">{element.illustration}</div>
          <div className="text-and-icon">
            <div className="card-text-area">
              <h5 className="card-title">{element.title}</h5>
              <p className="card-text">{element.author}</p>
            </div>
            <div className="card-icon"> {element.icon} </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <PageTemplate>
      <Heading>Ambiances</Heading>
      <div className="all-cards">{ShowAllAmbianceData}</div>
    </PageTemplate>
  );
};

export default AmbiancesPage;
