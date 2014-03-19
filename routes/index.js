
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'FFB Engenharia, Tecnologia e Design' });
};

exports.login = function(req, res){
  res.render('login', { title: 'Login' });
};

exports.about = function(req, res){
  res.render('about', { title: 'About'});
};

exports.aluno = function(req, res){
  res.render('aluno', { title: 'Alunos'});
};
