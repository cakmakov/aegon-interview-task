import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSurveyCompleted: false,
            questionOrder: this.props.questionOrder,
            selectedOption: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.submitSurvey = this.submitSurvey.bind(this);
    }

    componentDidMount() {
        const index = this.state.questionOrder;
        console.log(index);

        if (this.props.questions.length) {
            const questionId = this.props.questions[index].id;
            const topicId = this.props.questions[index].topic.id;
            const topicDescription = this.props.questions[index].topic.description;
            const npmScore = this.props.questions[index].topic.npmScore;
            const question = this.props.questions[index].description;

            this.setState({
                questionId: questionId,
                topicId: topicId,
                topicDescription: topicDescription,
                npmScore: npmScore,
                question: question
            });
        }
    }

    handleChange(event) {
        this.setState({
            feedback: event.target.value
        });
    }

    handleOptionChange(changeEvent) {
        console.log(changeEvent.target.value);
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }

    async submitSurvey() {
        let url = 'http://localhost:8080';
        let questionId = this.state.questionId;
        let topicId = this.state.topicId;
        let topicDescription = this.state.topicDescription;
        let npmScore = this.state.npmScore;
        let question = this.state.question;
        let selectedOption = this.state.selectedOption;
        let feedback = this.state.feedback;

        await axios.post(url + '/api/survey/submit', {
            question: {
                id: questionId,
                topic: {
                    id: topicId,
                    description: topicDescription,
                    npmScore: npmScore
                },
                description: question
            },
            score: selectedOption,
            feedback: feedback
        })
            .then((response) => {
                console.log(response);

                if (this.state.questionOrder < 4) {
                    this.props.incrementQuestionOrder();
                } else {
                    this.setState({
                        isSurveyCompleted: true
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render() {
        const isSurveyCompleted = this.state.isSurveyCompleted;
        const questionOrder = this.state.questionOrder;
        console.log(isSurveyCompleted);
        console.log(questionOrder);
        const question = this.state.question;

        if (isSurveyCompleted) {
            return <Redirect to="/result" />
        }

        return (
            <Container className="App">
                <h2>Customer Satisfaction Survey</h2>
                <Form className="form">
                    <Col>
                        <FormGroup tag="fieldset">
                            <legend>{question}</legend>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        value="0"
                                        checked={this.state.selectedOption === '0'}
                                        onChange={this.handleOptionChange}
                                    />{' '}0
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        value="1"
                                        checked={this.state.selectedOption === '1'}
                                        onChange={this.handleOptionChange}
                                    />{' '}1
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        value="2"
                                        checked={this.state.selectedOption === '2'}
                                        onChange={this.handleOptionChange}
                                    />{' '}2
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        value="3"
                                        checked={this.state.selectedOption === '3'}
                                        onChange={this.handleOptionChange}
                                    />{' '}3
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        value="4"
                                        checked={this.state.selectedOption === '4'}
                                        onChange={this.handleOptionChange}
                                    />{' '}4
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        value="5"
                                        checked={this.state.selectedOption === '5'}
                                        onChange={this.handleOptionChange}
                                    />{' '}5
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        value="6"
                                        checked={this.state.selectedOption === '6'}
                                        onChange={this.handleOptionChange}
                                    />{' '}6
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        value="7"
                                        checked={this.state.selectedOption === '7'}
                                        onChange={this.handleOptionChange}
                                    />{' '}7
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        value="8"
                                        checked={this.state.selectedOption === '8'}
                                        onChange={this.handleOptionChange}
                                    />{' '}8
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        value="9"
                                        checked={this.state.selectedOption === '9'}
                                        onChange={this.handleOptionChange}
                                    />{' '}9
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        value="10"
                                        checked={this.state.selectedOption === '10'}
                                        onChange={this.handleOptionChange}
                                    />{' '}10
                                </Label>
                            </FormGroup>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="exampleText">What is the most important reason for your score?</Label>
                            <Input
                                type="textarea"
                                name="text"
                                id="exampleText"
                                maxLength={255}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Button onClick={this.submitSurvey}>Submit Survey</Button>
                </Form>
            </Container>
        );
    }
}



