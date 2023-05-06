<template>
    <a
        class="h-8 w-32 flex flex-row cursor-pointer no-underline m-2 rounded-[10px] border-2 group"
        :href="url"
        :style="[
            { 'background-color': getColor() },
            { 'border-color': getColor() },
        ]">
        <div class="w-8 flex justify-center items-center">
            <Icon class="text-primary-text-light h-[18px] transition-[0.2s] group-hover:h-[22px] group-hover:transition-[0.2s]"
                  :name="icon"
                  size="32px"/>
        </div>
        <div class="flex self-center text-lg font-[bold] text-primary-text-light transition-[0.2s] pl-2 group-hover:text-[22px] group-hover:transition-[0.2s]">{{ text }}</div>
    </a>
</template>


<script>
export default {
    name: "ContactButton",
    props: ["icon", "text", "url", "color"],
    methods: {
        getColor() {
            return `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
        },
    },
};
</script>
