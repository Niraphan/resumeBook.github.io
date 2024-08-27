<script setup></script>

<template>
    <div>
        <div class="text-center text-5xl">Skills and Certificates</div>
        <div class="grid grid-cols-2 gap-8 mx-[3vh] pt-[3vh]">
            <div class="pt-[3vh] pl-[5vh]">
                <div>
                    <p class="text-2xl pb-[1vh] underline decoration-blue-500">Cybersecurity Skill</p>
                    <ul class="list-disc text-lg pb-[2vh]">
                        <li>Network basic</li>
                        <li>Clound basic</li>
                        <li>Cybersecurity Threats</li>
                    </ul>
                    <p class="text-2xl pb-[1vh] underline decoration-blue-500">Coding Skill</p>
                    <ul class="list-disc text-lg pb-[2vh]">
                        <li>Javascirpt</li>
                        <li>HTML5</li>
                        <li>Java</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Python</li>
                    </ul>
                    <p class="text-2xl pb-[1vh] underline decoration-blue-500">Design Skill</p>
                    <ul class="list-disc text-lg pb-[2vh]">
                        <li>Figma</li>
                        <li>Canva</li>
                        <li>UX/UI</li>
                    </ul>
                </div>

            </div>
            <div class="p-6 ">
                <p class="text-2xl pb-[2vh]">Soft Skills</p>
                <ul class="list-disc text-lg pb-[3vh]">
                            <li>Critical Thinking</li>
                            <li>Agile</li>
                            <li>Communacation</li>
                            <li>Time Management</li>
                            <li>Collaboration</li>
                        </ul>
                <p class="text-2xl pb-[3vh]">Certificates</p>
                <div class="rounded-xl bg-slate-50 h-[25vh] w-full pb-[30vh]">
                    <p class="text-2xl ml-[2vh] pt-[2vh]">
                        Foundations of Cybersecurity
                    </p>
                    <div class="grid grid-cols-2 text-md ml-[2vh] pt-[2vh]">
                        <div class="flex ">
                            <img src="/icon/check.png" alt="check" class="w-[2vh] h-[2vh]  mr-[1vh] self-center">
                            <p>Recognize core skills and knowledge needed to become a cybersecurity analyst</p>
                        </div>
                        <div class="flex ">
                            <img src="/icon/check.png" alt="check" class="w-[2vh] h-2vh mr-[1vh] self-center">
                            <p>Identify how security attacks impact business operations</p>
                        </div>
                        <div class="flex ">
                            <img src="/icon/check.png" alt="check" class="w-[2vh] h-2vh mr-[1vh] self-center">
                            <p>Explain security ethics</p>
                        </div>
                        <div class="flex ">
                            <img src="/icon/check.png" alt="check" class="w-[2vh] h-2vh mr-[1vh] self-center">
                            <p>Identify common tools used by cybersecurity analysts</p>
                        </div>
                        <a href="/FoundationCyber.pdf" download="FoundationCyber.pdf"
                            class="btn  w-[30vh] h-[5vh] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white py-2 px-4 rounded">
                            Download Certificate
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
