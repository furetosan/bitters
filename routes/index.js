
/*
 * GET home page.
 */

exports.index = function(req, res){
  console.log('Routes are running and I\'m index route!');
  if(req.lang == 'English')
  {
    res.render('index', { title: 'ffb.eng.br' });
    console.log('This is index route, and I\'m ffb.eng.br');
  }
};

exports.login = function(req, res){
  res.render('login', { title: 'Login', content: about.md });
};

exports.about = function(req, res){
  res.render('about', { title: 'Sobre'});
};

exports.aluno = function(req, res){
  res.render('aluno', { title: 'Alunos'});
};
