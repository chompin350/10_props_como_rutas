import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./components/Inicio')
const Sobremi = () => import('./components/Sobremi')
const Contacto = () => import('./components/Contacto')
const Post = () => import('./components/Post')
import Articulo from './components/Articulo'
import Notfound from './components/Notfound'
import Administrador from './components/Administrador'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Inicio,
            name: 'inicio'
        }, 
        {
            path: '/portada',
            redirect: '/'
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/inicio',
            redirect: '/'
        },
        {
            path: '/sobremi',
            component: Sobremi,
            name: 'sobremi',
            alias:['/acerca']
        },
        {
            path: '/contacto',
            component: Contacto,
            name: 'contacto',
            alias:['/contactame']
        },
        {
            path: '/post',
            name: 'post',
            component: Post,
            children: [
                {
                    path: ':articulo',
                    component: Articulo,
                    name: 'Articulo'
                }
            ]
        },
        {
            path: '/administrador/:acceso',
            component: Administrador,
            name: 'administrador',
            props: true
        },
        {
            path:   '*',
            component: Notfound
        }
    ]
})