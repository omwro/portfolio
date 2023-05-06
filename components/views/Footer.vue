<template>
    <footer id="footer" class="text-primary-text-dark bg-primary-block-light italic text-[0.9rem] text-center overflow-hidden px-0 py-2">
        <div class="whitespace-nowrap px-2 py-0">
            &copy; 1999 - {{ currentYear() }} Omer Erdem All Rights Reserved
        </div>
    </footer>
</template>

<script setup>
const currentYear = () => new Date().getFullYear();
</script>

<script>
export default {
    name: "Footer"
};
</script>