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
