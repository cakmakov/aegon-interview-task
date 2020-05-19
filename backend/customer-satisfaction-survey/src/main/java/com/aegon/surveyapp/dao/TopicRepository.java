package com.aegon.surveyapp.dao;

import com.aegon.surveyapp.entity.Topic;
import org.springframework.data.jpa.repository.JpaRepository;


/**
 * @author Ilkcan Anil Cakmak
 */
public interface TopicRepository extends JpaRepository<Topic, Long> {
}
