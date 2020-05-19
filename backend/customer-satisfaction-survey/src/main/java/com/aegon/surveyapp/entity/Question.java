package com.aegon.surveyapp.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;


/**
 * @author Ilkcan Anil Cakmak
 */
@Entity
@Table(name = "question")
public class Question implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "topic_id", nullable = false)
    private Topic topic;

    @Column(name = "description")
    private String description;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "question")
    @JsonIgnore
    private Set<Answer> answers;

    public Question() {

    }

    public Question(Long id, Topic topic, String description, Set<Answer> answers) {
        this.id = id;
        this.topic = topic;
        this.description = description;
        this.answers = answers;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Topic getTopic() {
        return topic;
    }

    public void setTopic(Topic topic) {
        this.topic = topic;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<Answer> getAnswers() { return answers; }

    public void setAnswers(Set<Answer> answers) { this.answers = answers; }

    @Override
    public String toString() {
        return "Question{" +
                "id=" + id +
                ", topic=" + topic +
                ", description='" + description + '\'' +
                ", answers=" + answers +
                '}';
    }
}
