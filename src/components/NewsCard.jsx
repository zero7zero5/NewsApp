import { Grid, Card, Text, Button } from "@nextui-org/react";
import React from "react";

class NewsCard extends React.Component {
  render() {
    return (
      <Grid.Container gap={2} justify="center">
        {this.props.news.map((m) => (
          <Grid xs={10} md={5}>
            <Card css={{ w: "100%", h: "100%" }}>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={
                    m.urlToImage
                      ? m.urlToImage
                      : "data:image/png;base64,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"
                  }
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Card.Body>

              <Card.Footer>
                <center>
                  <Text css={{ margin: "$5" }} h3>
                    {m.title}
                  </Text>

                  <Text size="$lg" css={{ margin: "$5" }}>
                    {m.description}
                  </Text>
                  <Button color="primary" auto ghost rounded>
                    Click here to Read the Full News
                  </Button>
                </center>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    );
  }
}

export default NewsCard;
