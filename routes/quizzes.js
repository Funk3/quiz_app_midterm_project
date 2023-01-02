/* Define routes for Quizzes here
*/

// Display a form to Create a New Quiz
app.get('/account/:id/new', (req, res) => {
  const templateVars = {
    quizzes: quizDatabase,
    user: usersDatabase[req.session.user_id]
  };
  // If not logged in, redirect to GET /login
  if (!usersDatabase[req.session.user_id]) {
    return res.redirect('/login');
  }
  return res.render('quizzes_new', templateVars);
});

// Takes data submitted into new quiz form and creates a new quiz
app.post('/quizzes', (req, res) => {
  const newQuestion = req.body.question;
  const newAnswerOne = req.body.answerOne;
  const newAnswerTwo = req.body.answerTwo;
  const newAnswerThree = req.body.answerThree;
  const newAnswerFour = req.body.answerFour;

  if(!usersDatabase[req.session.user_id]) {
    return res.send('Please log in to create new quiz');
  };

  const newQuiz = {
    newQuestion,
    newAnswerOne,
    newAnswerTwo,
    newAnswerThree,
    newAnswerFour
  };

  quizDatabase[newQuiz] = {
    question: req.body.question,
    answerOne: ,
    answerTwo: ,
    answerThree: ,
    answerFour: ,
    correctAnswerID: ,
    userID: req.session.user_id
  };

  return res.redirect(`/quizzes/${newQuiz}`);
});
