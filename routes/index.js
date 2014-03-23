
/*
 * GET home page.
 */

exports.error404 = function(req, res) {
  res.render('index', { title: 'Error 404' } );
}

exports.index = function(req, res){
  res.render('index', { title: 'ffb.eng.br' });
};

exports.aluno = function(req, res){
  res.render('aluno', { title: 'Students'});
};
