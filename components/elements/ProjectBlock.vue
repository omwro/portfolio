<template>
    <a :href="'/projects/' + project.id" class="project-block relative cursor-pointer group">
        <img :src="project.img" :alt="project.title" class="brightness-50 w-[380px] h-[250px] object-cover relative rounded-[20px]  group-hover:brightness-100"/>
        <div class="project-block-text text-2xl absolute w-fit text-primary-text-light mx-auto my-0 px-1.5 py-0.5 bottom-2.5 inset-x-0 group-hover:bg-[rgba(0,0,0,0.5)] group-hover:rounded-[20px]">
            {{ project.title }}
        </div>
    </a>
</template>

<script>
export default {
    name: "ProjectBlock",
    props: ["project"],
};
</script>