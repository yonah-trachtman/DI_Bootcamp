const express = require('express');
const router = express.Router();
const triviaQuestions = require('../data/triviaQuestions');

let currentQuestionIndex = 0;
let score = 0;


router.get('/', (req, res) => {
  if (currentQuestionIndex < triviaQuestions.length) {
    res.json({
      question: triviaQuestions[currentQuestionIndex].question,
      currentQuestionIndex: currentQuestionIndex + 1,
    });
  } else {
    res.json({
      message: "Quiz finished! Please check your score at /quiz/score",
    });
  }
});


router.post('/', (req, res) => {
  const userAnswer = req.body.answer;
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

  if (userAnswer && userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
    score++;
    res.json({ message: "Correct!" });
  } else {
    res.json({ message: `Incorrect! The correct answer was "${correctAnswer}".` });
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < triviaQuestions.length) {
    res.json({
      nextQuestion: triviaQuestions[currentQuestionIndex].question,
    });
  } else {
    res.json({
      message: "Quiz finished! Please check your score at /quiz/score",
    });
  }
});


router.get('/score', (req, res) => {
  res.json({
    message: `Your final score is ${score} out of ${triviaQuestions.length}.`,
  });


  currentQuestionIndex = 0;
  score = 0;
});

module.exports = router;
