const express = require ('express');
const router = express.Router();
const tarefasController = require ('./tarefasController/tarefasController');


router.get ('/tarefas', tarefasController.getAll);
router.post ('/tarefas', tarefasController.createTask);
router.delete ('/tarefas/:id', tarefasController.deleteTarefa);
router.put ('/tarefas/:id', tarefasController.updatetask);
module.exports=router;