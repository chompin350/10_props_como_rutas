<template>
    <div>
        <header class="masthead" style="background-image:url('/assets/img/post-sample-image.jpg');">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
                <div class="site-heading">
                    <h2 class="subheading">
                        <strong v-text="titulo"></strong>
                    </h2>
                </div>
            </div>
            </div>
        </div>
        </header>
    </div>
</template>

<script>
export default {
    props:['acceso'],
    computed:{
        titulo(){
            
            if (this.acceso=='simple'){
                return 'Bienvenido a la página de Administración'
            }else if (this.acceso=='avanzado'){
                return 'Esta página de administración está en construcción. Intente como administrador simple'
            }else{
                return 'La página que busca no existe'
            }
        }
    },
}
</script>
