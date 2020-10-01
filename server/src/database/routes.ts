import express from 'express';

import Login from '../../src/controllers/login'
import Cadastro from '../../src/controllers/criausuario'

const routes = express.Router()
const login = new Login()
const cadastro = new Cadastro()

routes.post('/login', login.create)
routes.post('/cadastro', cadastro.create)

export default routes;