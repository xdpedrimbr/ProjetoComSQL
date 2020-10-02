import {Request, Response} from 'express'
import Knex from '../connection'

class userController{
    async create (request: Request, response: Response){
        //cria usuarios
        const {name, password, email, username} = request.body
        
        const usuario = {
            name,
            password,
            email,
            username
        }

        const checkEmailDB = await Knex('usuarios').where('email', email)
        const checkEmail = checkEmailDB[0]
        if(checkEmail){
            return response.json({ createdUser:false, erro:'email ja cadastrado' })
        }
        
        const usuarios = await Knex('usuarios').insert(usuario)
        const usuariosCriados = usuarios[0]

        if(usuariosCriados){
            return response.json({
                createdUser:true,
            })
        }else{
            return response.json({createdUser:false, error:'Nao foi possivel inserir o usuario no banco de dados'})
        }
    }
}

export default userController
