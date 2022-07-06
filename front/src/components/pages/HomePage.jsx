import Card from "components/atoms/grouping/Card/Card";
import Heading from "components/atoms/text/Heading/Heading";
import PageTemplate from "components/templates/PageTemplate";
import React from "react";

const HomePage = () => {
  return (
    <PageTemplate>
      <Card medium>
      <Heading size="xlarge" color="primary">RAITŌ ライト</Heading>
      </Card>
    </PageTemplate>
  );
};

export default HomePage;
