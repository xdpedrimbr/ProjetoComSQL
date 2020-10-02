import {Request, Response} from 'express'
import Knex from '../connection'

class loginController{
    async create (request: Request, response: Response){
        //cria usuarios
        const {password, email} = request.body     

        await Knex('usuarios').where('email', email).then(response1 => {
            if(!response1[0]){
                return response.json({loginOK: false})
            }
            const response2 = response1[0]
            if(response2.password === password){
                return response.json({loginOK: true})
            }else{
                return response.json({loginOK: false, erro: "usuario ou senha incorretos"})
            }
        }).catch(err => {
            return response.json({loginOK: false, erro: err})
        })

        //const checkEmail = checkEmailDB[0]
        /*console.log(checkEmailDB)
        if(!checkEmail){
            return response.json({ loginOK:false, erro:'email ou senha nao corresponde 1111' })
        }else{
            if(checkEmail.password == password){
                return response.json({ loginOK:false, erro:'email ou senha nao corresponde' })
            }
    
            return response.json({
                loginOK:true,
                email,
                password
            })
        }*/
    }
}

export default loginController
