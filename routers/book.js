const bookController = require("../controllors/bookControllor");

const router = require("express").Router();

//ADD A BOOK
router.post("/", bookController.addABook);

router.post("/upload",(req,res,next)=>{
    let formidable = require("formidable");

    var form = new formidable.IncomingForm();
    form.uploadDir = "./uploads";
    form.keepExtensions = true;
    form.maxFieldsSize = 10 * 1024 * 1024;
    form.multiples = true;
    form.parse(req,(err,fields,files)=>{
        
    })
})

//GET ALL BOOKS
router.get("/", bookController.getAllBooks);

//GET A BOOK
router.get("/:id", bookController.getABook);

//UPDATE A BOOK
router.put("/:id", bookController.updateBook);

//DELETE A BOOK
router.delete("/:id", bookController.deleteBook);

module.exports = router;
