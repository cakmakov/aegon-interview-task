package com.aegon.surveyapp.entity;


import javax.persistence.*;
import java.io.Serializable;


/**
 * @author Ilkcan Anil Cakmak
 */
@Entity
@Table(name = "answer")
public class Answer implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "question_id", nullable = false)
    private Question question;

    @Column(name = "score")
    private Integer score;

    @Column(name = "feedback")
    private String feedback;

    public Answer() {

    }

    public Answer(Long id, Question question, Integer score, String feedback) {
        this.id = id;
        this.question = question;
        this.score = score;
        this.feedback = feedback;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    @Override
    public String toString() {
        return "Answer{" +
                "id=" + id +
                ", question=" + question +
                ", score=" + score +
                ", feedback='" + feedback + '\'' +
                '}';
    }
}
