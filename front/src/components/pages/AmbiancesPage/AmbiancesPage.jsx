import React from "react";
import { useNavigate } from "react-router";
import { Card } from "components/atoms/grouping";
import { Heading } from "components/atoms/text";
import { PageTemplate } from "components/templates";
import "./AmbiancesPage.css";
import { ambiancesList } from "./ambiancesData";

const Ambiances = () => {
  const navigate = useNavigate();
  const handleClick = (props) => {
    navigate(`/step2/${props}`, { replace: true });
  };

  const ShowAllAmbianceData = ambiancesList.map((element) => {
    return (
      <div
        className="card-body"
        key={element.id}
        onClick={() => handleClick(element.id)}
      >
        <div className="card-illustration">{element.illustration}</div>
        <div className="text-and-icon">
          <div className="card-text-area">
            <h5 className="card-title">{element.title}</h5>
            <p className="card-text">{element.author}</p>
          </div>
          <div className="card-icon"> {element.icon} </div>
        </div>
      </div>
    );
  });

  return (
    <PageTemplate>
      <Card>
        <Heading>Ambiances</Heading>
        <div className="all-cards">{ShowAllAmbianceData}</div>
      </Card>
    </PageTemplate>
  );
};

export default Ambiances;
