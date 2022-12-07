<template>
    <h1>Aprendiendo Slots</h1>
    <button>Abrir Modal</button>

    <modal>
        <!-- <h2>Titulo del modal</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit!</p>
        <button>Salir</button> -->
        <template v-slot:body>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
        </template>

        <template v-slot:footer>
            <button @click="closeModal">Salir</button>
        </template>

        <template v-slot:header>
            <h2>Titulo del modal</h2>
        </template>
    </modal>
</template>

<script>
import Modal from '../components/Modal.vue'
export default {
    components: { Modal },
}
</script>

<style scoped>

</style>