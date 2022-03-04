const { validationResult} = require("express-validator");

const mainController = {
    index: function(req,res){ 
        res.render("index")
    },
    create: function(req,res){
       let resultValidation = validationResult(req) ;
       if (resultValidation.errors.length > 0) {
           return res.render("index", {error:resultValidation.mapped(),oldData:req.body});
       }
       else { 
        req.session.name = req.body.name ;
        req.session.color = req.body.color ;
        req.session.email = req.body.email ;
        req.session.edad = req.body.edad ;
        let usuario = { 
            nombre : req.session.name,
            color : req.session.color,
            edad : req.session.edad,
            email : req.session.email
        }
        return res.render("index", {usuario});           
        }
        res.redirect("/");
    }
};

module.exports = mainController;
