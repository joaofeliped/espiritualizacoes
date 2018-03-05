module.exports = function(application){
	application.get('/espiritualizacoes', function(req, res){
		res.render('espiritualizacoes');
	});
}