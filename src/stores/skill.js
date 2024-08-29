import { defineStore, acceptHMRUpdate } from "pinia"
import { ref } from "vue"

export const useSkillStore = defineStore("skill", () => {
    const skills = ref([
        {
            id: 1,
            name: "Skills",
            details: [
                "JavaScript",
                "HTML5 & CSS3",
                "JAVA",
                "MySQL",
                "Python",
                "Docker",
                "linux",
                "tailwindcss",
            ]
        },
        {
            id: 2,
            name: "Frameworks",
            details: ["React", "Vue", "Tailwindcss", "Bootstrap", "Spring Boot"],
        },
        {
            id: 3,
            name: "Soft skills",
            details: [
                "Teamwork",
                "Problem-solving",
                "Time management",
                "Communication",
                "Adaptability",
            ]
        }
    ])

    return { skills }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSkillStore, import.meta.hot))
}
