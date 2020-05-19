import React, { Component } from 'react';
import { Jumbotron, Button, Container, Table, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      topics: [],
      isAnswersLoaded: false,
      isTopicsLoaded: false,
      dropDownValue: 'Select Topic',
      dropdownOpen: false,
      isNavigated: false
    };

    this.navigateToHomePage = this.navigateToHomePage.bind(this);
    this.toggle = this.toggle.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.listSurveyAnswers = this.listSurveyAnswers.bind(this);
    this.listSurveyTopics = this.listSurveyTopics.bind(this);
  }

  navigateToHomePage() {
    this.setState({
      isNavigated: true
    });
  }


  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  changeValue(e) {
    this.setState({
      dropDownValue: e.currentTarget.textContent
    });
  }


  async calculateNpmScores() {
    let url = 'http://localhost:8080';

    await axios.get(url + '/api/survey/list-answers')
      .then((response) => {
        // handle success
        console.log(response);

        if (response.data.length) {

          //-----------------------O--------------------------
          // Groove NPM Score
          //-----------------------O--------------------------

          let grooveArray = [];
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].question.topic.description === "Groove") {
              grooveArray.push(response.data[i].score);
            }
          }
          console.log(grooveArray);

          let promotersCountForGroove = 0;
          for (let i = 0; i < grooveArray.length; ++i) {
            if (grooveArray[i] === 9 || grooveArray[i] === 10)
              promotersCountForGroove++;
          }
          console.log(promotersCountForGroove);

          let promotersRatioForGroove = promotersCountForGroove / grooveArray.length * 100;
          console.log(promotersRatioForGroove);

          let detractorsCountForGroove = 0;
          for (let i = 0; i < grooveArray.length; ++i) {
            if (
              grooveArray[i] === 0 ||
              grooveArray[i] === 1 ||
              grooveArray[i] === 2 ||
              grooveArray[i] === 3 ||
              grooveArray[i] === 4 ||
              grooveArray[i] === 5 ||
              grooveArray[i] === 6
            )
              detractorsCountForGroove++;
          }
          console.log(detractorsCountForGroove);

          let detractorsRatioForGroove = detractorsCountForGroove / grooveArray.length * 100;
          console.log(detractorsRatioForGroove);

          let npmScoreForGroove = promotersRatioForGroove - detractorsRatioForGroove;
          console.log(npmScoreForGroove);

          //-----------------------O--------------------------
          // Java NPM Score
          //-----------------------O--------------------------

          let javaArray = [];
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].question.topic.description === "Java") {
              javaArray.push(response.data[i].score);
            }
          }
          console.log(javaArray);

          let promotersCountForJava = 0;
          for (let i = 0; i < javaArray.length; ++i) {
            if (javaArray[i] === 9 || javaArray[i] === 10)
              promotersCountForJava++;
          }
          console.log(promotersCountForJava);

          let promotersRatioForJava = promotersCountForJava / javaArray.length * 100;
          console.log(promotersRatioForJava);

          let detractorsCountForJava = 0;
          for (let i = 0; i < javaArray.length; ++i) {
            if (
              javaArray[i] === 0 ||
              javaArray[i] === 1 ||
              javaArray[i] === 2 ||
              javaArray[i] === 3 ||
              javaArray[i] === 4 ||
              javaArray[i] === 5 ||
              javaArray[i] === 6
            )
              detractorsCountForJava++;
          }
          console.log(detractorsCountForJava);

          let detractorsRatioForJava = detractorsCountForJava / javaArray.length * 100;
          console.log(detractorsRatioForJava);

          let npmScoreForJava = promotersRatioForJava - detractorsRatioForJava;
          console.log(npmScoreForJava);

          //-----------------------O--------------------------
          // React NPM Score
          //-----------------------O--------------------------

          let reactArray = [];
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].question.topic.description === "React") {
              reactArray.push(response.data[i].score);
            }
          }
          console.log(reactArray);

          let promotersCountForReact = 0;
          for (let i = 0; i < reactArray.length; ++i) {
            if (reactArray[i] === 9 || reactArray[i] === 10)
              promotersCountForReact++;
          }
          console.log(promotersCountForReact);

          let promotersRatioForReact = promotersCountForReact / reactArray.length * 100;
          console.log(promotersRatioForReact);

          let detractorsCountForReact = 0;
          for (let i = 0; i < reactArray.length; ++i) {
            if (
              reactArray[i] === 0 ||
              reactArray[i] === 1 ||
              reactArray[i] === 2 ||
              reactArray[i] === 3 ||
              reactArray[i] === 4 ||
              reactArray[i] === 5 ||
              reactArray[i] === 6
            )
              detractorsCountForReact++;
          }
          console.log(detractorsCountForReact);

          let detractorsRatioForReact = detractorsCountForReact / reactArray.length * 100;
          console.log(detractorsRatioForReact);

          let npmScoreForReact = promotersRatioForReact - detractorsRatioForReact;
          console.log(npmScoreForReact);

          this.setState({
            npmScoreForGroove: npmScoreForGroove,
            npmScoreForJava: npmScoreForJava,
            npmScoreForReact: npmScoreForReact
          })
        }
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  async updateNpmScores() {
    let url = 'http://localhost:8080';
    let npmScoreForGroove = this.state.npmScoreForGroove;
    let npmScoreForJava = this.state.npmScoreForJava;
    let npmScoreForReact = this.state.npmScoreForReact;

    await axios.put(url + '/api/survey/update_npm_score/1', {
      npmScore: npmScoreForGroove
    })
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });

    await axios.put(url + '/api/survey/update_npm_score/2', {
      npmScore: npmScoreForJava
    })
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });

    await axios.put(url + '/api/survey/update_npm_score/3', {
      npmScore: npmScoreForReact
    })
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  async componentDidMount() {
    this.calculateNpmScores().then(() => {
      this.updateNpmScores();
    });
  }


  async listSurveyAnswers() {
    let url = 'http://localhost:8080';

    await axios.get(url + '/api/survey/list-answers')
      .then((response) => {
        // handle success
        console.log(response);

        if (response.data.length) {

          //-----------------------O--------------------------
          // Groove Survey Answers
          //-----------------------O--------------------------

          let grooveSurveyAnswers = [];
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].question.topic.description === "Groove") {
              grooveSurveyAnswers.push(
                {
                  id: response.data[i].id,
                  score: response.data[i].score,
                  feedback: response.data[i].feedback
                }
              );
            }
          }
          console.log(grooveSurveyAnswers);

          //-----------------------O--------------------------
          // Java Survey Answers
          //-----------------------O--------------------------

          let javaSurveyAnswers = [];
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].question.topic.description === "Java") {
              javaSurveyAnswers.push(
                {
                  id: response.data[i].id,
                  score: response.data[i].score,
                  feedback: response.data[i].feedback
                }
              );
            }
          }
          console.log(javaSurveyAnswers);

          //-----------------------O--------------------------
          // React Survey Answers
          //-----------------------O--------------------------

          let reactSurveyAnswers = [];
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].question.topic.description === "React") {
              reactSurveyAnswers.push(
                {
                  id: response.data[i].id,
                  score: response.data[i].score,
                  feedback: response.data[i].feedback
                }
              );
            }
          }
          console.log(reactSurveyAnswers);

          this.setState({
            answers: response.data,
            grooveSurveyAnswers: grooveSurveyAnswers,
            javaSurveyAnswers: javaSurveyAnswers,
            reactSurveyAnswers: reactSurveyAnswers,
            isAnswersLoaded: true,
            isTopicsLoaded: false
          });
        }
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  async listSurveyTopics() {
    let url = 'http://localhost:8080';

    await axios.get(url + '/api/survey/list-topics')
      .then((response) => {
        // handle success
        console.log(response);

        if (response.data.length) {
          let topicIds = [];
          let topicDescriptions = [];
          let topicNpmScores = [];

          for (let i = 0; i < response.data.length; i++) {
            topicIds.push(response.data[i].id);
            topicDescriptions.push(response.data[i].description);
            topicNpmScores.push(response.data[i].npmScore);
          }

          this.setState({
            topics: response.data,
            topicIds: topicIds,
            topicDescriptions: topicDescriptions,
            topicNpmScores: topicNpmScores,
            isAnswersLoaded: false,
            isTopicsLoaded: true
          });
        }
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }


  render() {
    let isAnswersLoaded = this.state.isAnswersLoaded;
    let isTopicsLoaded = this.state.isTopicsLoaded;

    if (isAnswersLoaded) {
      let grooveSurveyAnswers = this.state.grooveSurveyAnswers;
      let javaSurveyAnswers = this.state.javaSurveyAnswers;
      let reactSurveyAnswers = this.state.reactSurveyAnswers;

      let answersTableByGroove = [];

      for (let i = 0; i < this.state.grooveSurveyAnswers.length; i++) {
        answersTableByGroove.push(
          <tr>
            <th scope="row">{grooveSurveyAnswers[i].id}</th>
            <td>{grooveSurveyAnswers[i].score}</td>
            <td>{grooveSurveyAnswers[i].feedback}</td>
          </tr>
        )
      }

      let answersTableByJava = [];

      for (let i = 0; i < this.state.javaSurveyAnswers.length; i++) {
        answersTableByJava.push(
          <tr>
            <th scope="row">{javaSurveyAnswers[i].id}</th>
            <td>{javaSurveyAnswers[i].score}</td>
            <td>{javaSurveyAnswers[i].feedback}</td>
          </tr>
        )
      }

      let answersTableByReact = [];

      for (let i = 0; i < this.state.reactSurveyAnswers.length; i++) {
        answersTableByReact.push(
          <tr>
            <th scope="row">{reactSurveyAnswers[i].id}</th>
            <td>{reactSurveyAnswers[i].score}</td>
            <td>{reactSurveyAnswers[i].feedback}</td>
          </tr>
        )
      }

      if (this.state.isNavigated) {
        return <Redirect to="/home" />
      }

      return (
        <Container>
          <Jumbotron style={{ textAlign: "center" }}>
            <h3 className="display-3">The survey has been completed!</h3>
            <p className="lead">You can choose what you will do.</p>
            <hr className="my-2" />
            <p className="lead">
              <Button size="lg" outline color="primary" onClick={this.listSurveyAnswers}>List Survey Answers</Button>
              {' '}
              <Button size="lg" outline color="success" onClick={this.listSurveyTopics}>List Survey Topics</Button>
              {' '}
              <Button size="lg" outline color="secondary" onClick={this.navigateToHomePage}>Go To Home Page</Button>
            </p>
          </Jumbotron>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              {this.state.dropDownValue}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <div onClick={this.changeValue}>Groove</div>
              </DropdownItem>
              <DropdownItem>
                <div onClick={this.changeValue}>Java</div>
              </DropdownItem>
              <DropdownItem>
                <div onClick={this.changeValue}>React</div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <br />
          {
            this.state.dropDownValue === "Groove"
            &&
            <Table hover>
              <thead>
                <tr>
                  <th>SubmitId</th>
                  <th>Score</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {answersTableByGroove}
              </tbody>
            </Table>
          }
          {
            this.state.dropDownValue === "Java"
            &&
            <Table hover>
              <thead>
                <tr>
                  <th>SubmitId</th>
                  <th>Score</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {answersTableByJava}
              </tbody>
            </Table>
          }
          {
            this.state.dropDownValue === "React"
            &&
            <Table hover>
              <thead>
                <tr>
                  <th>SubmitId</th>
                  <th>Score</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {answersTableByReact}
              </tbody>
            </Table>
          }
        </Container>
      );
    }

    let topicIds = this.state.topicIds;
    let topicDescriptions = this.state.topicDescriptions;
    let topicNpmScores = this.state.topicNpmScores;

    let topicsTable = [];

    for (let i = 0; i < this.state.topics.length; i++) {
      topicsTable.push(
        <tr>
          <th scope="row">{topicIds[i]}</th>
          <td>{topicDescriptions[i]}</td>
          <td>{topicNpmScores[i]}</td>
        </tr>
      )
    }

    if (this.state.isNavigated) {
      return <Redirect to="/home" />
    }

    return (
      <Container>
        <Jumbotron style={{ textAlign: "center" }}>
          <h3 className="display-3">The survey has been completed!</h3>
          <p className="lead">You can choose what you will do.</p>
          <hr className="my-2" />
          <p className="lead">
            <Button size="lg" outline color="primary" onClick={this.listSurveyAnswers}>List Survey Answers</Button>
            {' '}
            <Button size="lg" outline color="success" onClick={this.listSurveyTopics}>List Survey Topics</Button>
            {' '}
            <Button size="lg" outline color="secondary" onClick={this.navigateToHomePage}>Go To Home Page</Button>
          </p>
        </Jumbotron>
        {
          isTopicsLoaded
          &&
          <Table hover>
            <thead>
              <tr>
                <th>TopicId</th>
                <th>Topic</th>
                <th>NPM Score</th>
              </tr>
            </thead>
            <tbody>
              {topicsTable}
            </tbody>
          </Table>
        }
      </Container>
    );
  }
}