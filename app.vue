<template>
  <div id="app">
    <NuxtPage />
  </div>
</template>

<style>
html,
body,
#app {
    @apply w-full h-full text-base scroll-smooth m-0;
    font-family: sans-serif;
}
#app section {
    @apply text-primary-text-dark bg-primary-bg-light overflow-auto flex flex-col justify-center pt-[100px] pb-[50px] px-4;
}
#app section.full-height {
    @apply min-h-[calc(100vh_-_50px_-_50px_-_32px)] pt-[50px];
}
#app section > * {
    @apply max-w-[1200px] mx-auto;
}
#app section h1 {
    @apply text-center font-[bold] text-[2rem] mt-0 mb-2.5 mx-auto border-b-[solid] border-b-primary;
}
#app section h1.small {
    @apply text-xl mt-[25px] mb-2.5 mx-auto;
}
#app section .content {
    @apply flex flex-col justify-center text-base mx-auto my-8;
}
#app section .hide {
    @apply hidden;
}
#app section a {
    @apply text-[unset];
    text-decoration: unset;
}
#app.dark #header,
#app.dark #menu {
    @apply text-primary-light2;
}
#app.dark section {
    @apply text-primary-light2 bg-primary-bg-dark;
}

</style>
