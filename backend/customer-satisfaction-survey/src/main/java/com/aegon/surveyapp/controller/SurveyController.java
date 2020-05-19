package com.aegon.surveyapp.controller;

import com.aegon.surveyapp.dao.AnswerRepository;
import com.aegon.surveyapp.dao.QuestionRepository;
import com.aegon.surveyapp.dao.TopicRepository;
import com.aegon.surveyapp.entity.Answer;
import com.aegon.surveyapp.entity.Question;
import com.aegon.surveyapp.entity.Topic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/**
 * @author Ilkcan Anil Cakmak
 */
@RestController
@RequestMapping(value = "/api/survey", produces = { MediaType.APPLICATION_JSON_VALUE })
@CrossOrigin
public class SurveyController {

    @Autowired
    private TopicRepository topicRepository;

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private AnswerRepository answerRepository;


    @GetMapping(value = "/create")
    public List<Question> getAllQuestions() { return questionRepository.findAll(); }

    @PostMapping(value = "/submit")
    Answer saveNewAnswer(@RequestBody Answer newAnswer) { return answerRepository.save(newAnswer); }

    @GetMapping(value = "/list-answers")
    public List<Answer> getAllAnswers() { return answerRepository.findAll(); }

    @PutMapping("/update_npm_score/{id}")
    Topic updateNpmScore(@RequestBody Topic newTopic, @PathVariable Long id) {

        return topicRepository.findById(id).map(topic -> {
            topic.setNpmScore(newTopic.getNpmScore());
            return topicRepository.save(topic);
        }).orElseGet(() -> {
            newTopic.setId(id);
            return topicRepository.save(newTopic);
        });
    }

    @GetMapping(value = "/list-topics")
    public List<Topic> getAllTopics() { return topicRepository.findAll(); }
}
