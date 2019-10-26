import React from "react";
import {Alert} from 'reactstrap'
import {
  Card,  CardText, CardBody,
  CardTitle, CardSubtitle, Jumbotron
} from 'reactstrap'

class ReactStrapPlayGround extends React.Component{
render(){
return (
<div>
    <Jumbotron >
    <h1> This is test </h1>

    </Jumbotron>
    <Alert color="danger">  This is main alert </Alert>
    <Alert color="info">  This is info alert </Alert>
    <Card>
        <CardBody>
            <CardTitle>Title1</CardTitle>
            <CardSubtitle> SubTitle </CardSubtitle>
            <CardText> This is the test in card </CardText>
        </CardBody>
    </Card>
</div>
)
}

}

export default ReactStrapPlayGround;