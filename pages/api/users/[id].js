const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
export default async function handle(req, res) {
    const postId = req.query.id
    const {email, name} = req.body
    if (req.method == "PUT") {
        handleUpdate(postId, res,name, email )
    } else if (req.method == "DELETE") {
        handleDelete(postId, res)
    } else if (req.method == "GET") {
        handleFindById(postId, res)
    }
}

async function handleDelete(postId, res) {
    const post = await prisma.user.delete({
        where: {id: Number(postId)}
    })

    res.json(post)
}

async function handleFindById(postId, res) {
    const post = await prisma.user.findUnique({
        where: {id: Number(postId)}
    })

    res.json(post)
}

async function handleUpdate(postId, res, name, email) {
    await prisma.user.update({
        where: {id: Number(postId)},
        data:{
            email:email,
            name:name
        }
    })

  await handleFindById(postId,res)
}