const {PrismaClient} = require('@prisma/client')
const bcrypt = require('bcrypt');

const prisma = new PrismaClient()

const saltRounds = 10;

export default async function handle(req, res) {
    const {email, name, pwd} = req.body
    if (req.method == 'POST') {
        await handleCreate(res, email, name, pwd)
    } else if (req.method == "GET") {
        await handleListAll(res)
    }

}

async function handleListAll(res) {
    const result = await prisma.user.findMany()
    res.json(result)
}


async function handleCreate(res, email, name, pwd) {


   await bcrypt.hash(pwd, saltRounds, async function(err, hash) {
        const result = await prisma.user.create({
            data: {
                email: email,
                name: name,
                password: hash

            }

        })
        await res.json(result)
    });





}




