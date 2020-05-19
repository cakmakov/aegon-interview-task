package com.aegon.surveyapp.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Set;


/**
 * @author Ilkcan Anil Cakmak
 */
@Entity
@Table(name = "topic")
public class Topic implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "description")
    private String description;

    @Column(name = "npm_score")
    private BigDecimal npmScore;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "topic")
    @JsonIgnore
    private Set<Question> questions;

    public Topic() {

    }

    public Topic(Long id, String description, BigDecimal npmScore, Set<Question> questions) {
        this.id = id;
        this.description = description;
        this.npmScore = npmScore;
        this.questions = questions;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getNpmScore() {
        return npmScore;
    }

    public void setNpmScore(BigDecimal npmScore) {
        this.npmScore = npmScore;
    }

    public Set<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(Set<Question> questions) {
        this.questions = questions;
    }

    @Override
    public String toString() {
        return "Topic{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", npmScore=" + npmScore +
                ", questions=" + questions +
                '}';
    }
}
