import { defineStore, acceptHMRUpdate } from "pinia"
import { ref } from "vue"

export const useTheme = defineStore("theme", () => {
    const isLight = ref(true)

    const toggleTheme = () => {
        isLight.value = !isLight.value
    }
        return {
            isLight,
            toggleTheme
        }
    }
)

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTheme, import.meta.hot))
}
