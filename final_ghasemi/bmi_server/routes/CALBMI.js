var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()



router.get('/', async function (req, res, next) {
    let VB = req.body;

    let calculateBmi = VB.weight / Math.pow(VB.height / 100, 2)
    VB.ip  =req.ip
     
    const created = await prisma.userBmi.create({
        data: VB,
    })

    res.send(created +'  '+calculateBmi);

});


module.exports = router;
