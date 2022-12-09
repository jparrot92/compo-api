import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {

    const store = useStore()

    const currentTab = ref('all')  

    const isOpenModal = ref(false)

    const newTodoText  = ref('')

    return {
        currentTab,

        pending: computed(() => store.getters['pendingTodos']),
        all: computed(() => store.getters['allTodos']),
        completed: computed(() => store.getters['completedTodos']),

        getTodosByTab: computed( () => store.getters['getTodosByTab'](currentTab.value)),

        isOpenModal,

        newTodoText,

        // Methods
        toggleTodo: ( id ) => store.commit('toggleTodo', id ),

        createTodo: ( text ) => store.commit('createTodo', text ),

        closeModal: () => isOpenModal.value = false,
    }
}

export default useTodos