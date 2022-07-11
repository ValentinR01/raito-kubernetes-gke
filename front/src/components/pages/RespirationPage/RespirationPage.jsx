import React from "react";
import { Heading } from "components/atoms/text";
import { PageTemplate } from "components/templates";
import "./RespirationPage.css";
import { respirationsList } from "./respirationsData";
import { Link } from "react-router-dom";
import { Text } from "components/atoms/grouping";

const RespirationPage = () => {
  const ShowAllRespirationData = respirationsList.map((element) => {
    return (
      <Link to={`/respiration/${element.id}`} key={element.id}>
        <div className="card-body" key={element.id}>
          <div className="card-illustration">{element.illustration}</div>
          <div className="text-and-icon">
            <div className="card-text-area">
              <h5 className="card-title">{element.title}</h5>
              <Text className="card-text">{element.author}</Text>
            </div>
            <div className="card-icon"> {element.icon} </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <PageTemplate>
      <Heading>Respirations</Heading>
      <div className="all-cards">{ShowAllRespirationData}</div>
    </PageTemplate>
  );
};

export default RespirationPage;
