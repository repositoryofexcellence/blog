const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handle(req, res) {
    const {email, name} = req.body
    if (req.method == 'POST') {
        await handleCreate(res,email,name)
    } else if (req.method == "GET") {
        await handleListAll(res)
    }

}

async function handleListAll(res) {
    const result = await prisma.user.findMany()
    res.json(result)
}

async function handleCreate(res, email, name) {
    const result = await prisma.user.create({
        data: {
            email: email,
            name: name
        }
    })
    res.json(result)
}

