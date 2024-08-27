<script setup>
import { RouterLink, RouterView } from "vue-router"
import { useTheme } from "./stores/theme"

const theme = useTheme()
</script>

<template>
    <div class=" roboto-regular w-screen h-screen " >
        <div class="navbar  flex justify-between mb-[5vh] " >
            <RouterLink to="/" class="ml-[3vh]"><a class="btn btn-ghost text-3xl">Resume</a></RouterLink>
            <div class=" mx-[2vh]">
                <RouterLink to="/about" class="btn btn-ghost">About me</RouterLink>
                <RouterLink to="/skills" class="btn btn-ghost">Skills</RouterLink>
                <RouterLink to="/contact" class="btn btn-ghost">Contact</RouterLink>
                <RouterLink to="/education" class="btn btn-ghost">Education</RouterLink>
            </div>
        </div>
      
        <div>
            <RouterView />
        </div>
    </div>
</template>

<style scoped>
.roboto-regular {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: normal;
}
</style>
