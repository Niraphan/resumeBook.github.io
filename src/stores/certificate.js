import { defineStore, acceptHMRUpdate } from "pinia"
import { ref } from "vue"

export const useCertificateStore = defineStore("certificate", () => {
    const certificates = ref([
        {
            id: 1,
            name: "Foundations of Cybersecurity",
            details: [
                "Recognize core skills and knowledge needed to become a cybersecurity analyst",
                "Identify how security attacks impact business operations",
                "Explain security ethics",
                "Identify common tools used by cybersecurity analysts",
            ],
            downloadLink: "/resumeBook.github.io/FoundationCyber.pdf",
        },
        {
            id: 2,
            name: "Play It Safe: Manage Security Risks",
            details: [
                "Identify common security risks",
                "Explain the importance of security policies",
                "Recognize the importance of security training",
                "Identify the importance of security audits",
            ],
            downloadLink: "/resumeBook.github.io/PlayItSafe.pdf",
        },
    ])

    return { certificates }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCertificateStore, import.meta.hot))
}
