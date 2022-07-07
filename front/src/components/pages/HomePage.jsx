import { Text } from "components/atoms/grouping";
import Card from "components/atoms/grouping/Card/Card";
import Heading from "components/atoms/text/Heading/Heading";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import React from "react";

const HomePage = () => {
  return (
    <PageTemplate>
      <Card medium>
      <Heading size="xlarge" color="primary">RAITŌ ライト</Heading>
        <Text>Avec Raito, nous vous proposons un outil complet de bien être et d’épanouissement via la musique, la lumière et la respiration. Notre objectif est de vous offrir une bulle, pour prendre soin de vous.Nous vous proposons d’utiliser Raito aux moments clés de la journée que sont le réveil et l’endormissement, ainsi que dans les moments où vous souhaitez lâcher prise et vous détendre.</Text>
      </Card>
    </PageTemplate>
  );
};

export default HomePage;
