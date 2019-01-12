//src/controllers/default.js 
module.exports.index = function(req, res) { 
    // req est bien entendu notre objet requête et res notre objet réponse 
    // on utilise l'objet res pour rendre notre vue index.jade 
    // (pas besoin de spécifier le chemin de la vue, on l'a fait dans bin/express.js) 
    res.render('index'); 
};