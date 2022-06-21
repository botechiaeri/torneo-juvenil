const express = require("express")

let controller = {
    list: (req, res) => {
        res.render("index.ejs", { title: "home" });
    }
}


module.exports = controller