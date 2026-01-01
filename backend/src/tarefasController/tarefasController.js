const tarefasModel = require('../tarefasModel/tarefasModel');


const getAll = async (request, response) => 
{
    const [tarefas] = await tarefasModel.getAll();
    return response.status(200).send(tarefas);
}

const createTask = async (request, response) =>
{
    const [criarTarefa] = await tarefasModel.createTask(request.body);
    return response.status(201).json({InsertId: criarTarefa.insertId});
}

module.exports = {
    getAll,
    createTask
}