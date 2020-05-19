import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import Home from './Home';
import Result from './Result';


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            questionOrder: 0
        };

        this.incrementQuestionOrder = this.incrementQuestionOrder.bind(this);
    }

    incrementQuestionOrder() {
        this.setState({
            questionOrder: this.state.questionOrder + 1
        })
    }

    async getQuestions() {
        let url = 'http://localhost:8080';

        await axios.get(url + '/api/survey/create')
            .then((response) => {
                // handle success
                console.log(response);

                this.setState({
                    questions: response.data
                });
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }

    componentDidMount() {
        this.getQuestions();
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    questions={this.state.questions}
                    questionOrder={this.state.questionOrder}
                    incrementQuestionOrder={this.incrementQuestionOrder}
                />
            );
        };

        const ResultPage = () => {
            return (
                <Result />
            );
        };

        return (
            <div>
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/result" component={ResultPage} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}
