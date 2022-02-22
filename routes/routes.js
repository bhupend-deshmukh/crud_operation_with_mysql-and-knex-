const express = require("express")
const router  = express.Router()    

const {getAllData, insertData, updateDataById, deleteById, getById}  = require("../controller/controller")

router.get('/',getAllData)
router.get('/:id',getById)
router.post('/',insertData)
router.put('/:id',updateDataById)
router.delete('/:id',deleteById)
module.exports = router




