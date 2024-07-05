const validateTitle = (req, res, next) => {
    const {body} = req;

    if(body.title === undefined) {
        res.status(400).json({message: 'O campo "title" é obrigatório'});
    }

    if(body.title === '') {
        res.status(400).json({message: 'O campo "title" não pode ser vazio'});
    }

    next();
};

const validateFieldStatus = (req, res, next) => {
    const {body} = req;

    if(body.status === undefined) {
        res.status(400).json({message: 'O campo "status" é obrigatório'});
    }

    if(body.status === '') {
        res.status(400).json({message: 'O campo "status" não pode ser vazio'});
    }

    next();
};


module.exports = {
    validateTitle,
    validateFieldStatus,
};