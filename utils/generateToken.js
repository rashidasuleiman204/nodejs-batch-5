import jwt from 'jsonwebtoken'

export const generateToken = async (userId) => {

    const token = jwt.sign({id: userId},
    process.env.JWT_SECRET, 
    {expiresIn: "7d"}
)

    return token
}

MONGODB_URL= mongodb+srv//shiny:Rashidashi@cluster0.gkrzucx.mongodb.net/class

JWT_SECRET="HJHRUHREPOLEPKJRHURH"