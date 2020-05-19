package com.aegon.surveyapp.dao;

import com.aegon.surveyapp.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;


/**
 * @author Ilkcan Anil Cakmak
 */
public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
