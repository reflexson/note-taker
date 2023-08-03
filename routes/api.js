const router = require("express").Router();
const path = require("path");
const fs = require("fs");
let db = require("../db/db.json");

router.get("/notes",(req, res)=>{
  res.json(db)
});

router.post("/notes",(req, res)=>{
    let newNote = {
        title:req.body.title,
        text:req.body.text,
        id:Math.random()
    }

    db.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(db));
    res.json(db)
});

router.delete("/notes/:id",(req, res)=>{
    let notesToKeep = [];
    for(let i=0; i < db.length; i++){
        if(db[i].id != req.params.id){
            notesToKeep.push(db[i])
        }
    };
    
    db=notesToKeep;
    fs.writeFileSync("./db/db.json", JSON.stringify(db));
    res.json(db)
});

module.exports=router
