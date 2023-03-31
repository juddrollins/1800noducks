import Image from "next/image";

import news from "../images/news.jpg";
import duck from "../images/duck.jpeg";

import { Container, Card, Row, Text, Grid } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <Container justify="center" alignContent="center" alignItems="center">
        <Card css={{ $$cardColor: "burlywood", marginTop: 20 }} gap={10}>
          <Card.Body>
            <Row justify="center" align="center">
              <Text h6 size={30} css={{ m: 0 }}>
                Come out and join us! NO DUCKS! 365 days a year! You don't even
                need to bring a gun!
              </Text>
            </Row>
          </Card.Body>
        </Card>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} justify="center">
            <Image src={news} height={200} />
          </Grid>
          <Grid xs={12} justify="center">
            <Image src={duck} height={200} />
          </Grid>
          <Grid xs={12} justify="center">
            <Image src={news} height={200} />
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
}
