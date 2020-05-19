package com.aegon.surveyapp.dao;

import com.aegon.surveyapp.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;


/**
 * @author Ilkcan Anil Cakmak
 */
public interface QuestionRepository extends JpaRepository<Question, Long> {
}
