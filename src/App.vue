<script setup>
import { RouterLink, RouterView } from "vue-router"
import { useMouse , useWindowSize } from "@vueuse/core"
import { computed } from "vue"

const { x,y } = useMouse()

const { width , height } = useWindowSize()

const dx = computed(() => Math.abs(x.value - width.value / 2))
const dy = computed(() => Math.abs(y.value - height.value / 2))

const distance = computed(() => Math.sqrt(dx.value * dx.value +  dy.value * dy.value))

const size = computed(() => Math.max(300 - distance.value / 3, 150))

const opacity = computed(() => Math.min(Math.max( + distance.value / 300, 0.7),1))


</script>

<template>
    <div class="roboto-regular min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white flex flex-col">
        <div class="relative flex-1">
            <div class="absolute bg-purple-700/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-2xl"
                :style="{
                    left: `${x}px`,
                    top: `${y}px`,
                    width: `${size}px`,
                    height: `${size}px`,
                    opacity: `${opacity}`
                }"></div>
            <div class="navbar flex justify-between mb-[5vh]">
                <RouterLink to="/" class="ml-[3vh] roboto-bold"><a class="btn btn-ghost text-3xl">Resume</a></RouterLink>
                <div class="mx-[2vh]">
                    <RouterLink to="/about" class="btn btn-ghost">About me</RouterLink>
                    <RouterLink to="/skills" class="btn btn-ghost">Skills</RouterLink>
                    <RouterLink to="/contact" class="btn btn-ghost">Contact</RouterLink>
                    <RouterLink to="/education" class="btn btn-ghost">Education</RouterLink>
                </div>
            </div>
        </div>

        <div class="flex-1">
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

.roboto-bold {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-style: normal;
}
</style>


<style scoped>
.roboto-regular {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: normal;
}

.roboto-bold {
  font-family: "Roboto", system-ui;
  font-weight: 700;
  font-style: normal;
}
</style>
