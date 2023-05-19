<template>
    <SeoKit/>
    <NuxtPage/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');

html,
body {
    background-color: white;
}

html,
body,
#app {
    @apply w-full h-full text-base scroll-smooth m-0;
    font-family: 'Roboto', sans-serif;
}

#app section h1.small {
    @apply text-xl mt-[25px] mb-2.5 mx-auto;
}
</style>
