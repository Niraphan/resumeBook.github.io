<script setup>
import { useCertificateStore } from "@/stores/certificate"
import { useSkillStore } from "@/stores/skill";
const certificateStore = useCertificateStore()
const skillStore = useSkillStore()


</script>

<template>
    <div class="scroll-auto">
        <div class="text-center text-5xl ">Skills and Certificates</div>
        <div class="grid grid-cols-2 gap-8  py-[3vh] mx-[5vh] ">
            <div class=" border p-[3vh]">
                <div v-for="skill in skillStore.skills" :key="skill.id"
                    class=" border border-slate-500 h-auto w-full mb-[3vh] p-[3vh] ">
                    <p class="text-2xl  ">{{ skill.name }}</p>
                    <ul v-for="(detail, index) in skill.details" :key="index" class="pl-[3vh]">
                        <li class="list-disc ">{{ detail }}</li>
                    </ul>
                </div>
            </div>
            <div class="p-6 border">
                <p class="text-2xl pb-[3vh]">Certificates</p>
                <div v-for="certificate in certificateStore.certificates" :key="certificate.id"
                    class="rounded-xl bg-slate-50 h-auto w-full mb-[3vh] text-black">
                    <p class="text-2xl ml-[2vh] pt-[2vh]">{{ certificate.name }}</p>
                    <div class="grid grid-cols-2 text-md ml-[2vh] pt-[2vh]">
                        <div v-for="(detail, index) in certificate.details" :key="index" class="flex">
                            <img src="/icon/check.png" alt="check" class="w-[2vh] h-[2vh] mr-[1vh] self-center">
                            <p>{{ detail }}</p>
                        </div>
                        <a :href="certificate.downloadLink" download
                            class="btn btn-xs w-[30vh] h-[5vh] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white py-2 px-4 rounded mb-[3vh]">
                            Download Certificate
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
