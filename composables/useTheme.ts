import { useState } from "#app/composables/state";
import { onMounted } from "@vue/runtime-core";

export default function useTheme() {
    const enabled = useState<boolean | null>('theme', () => null)

    onMounted(() => {
        enabled.value = localStorage.getItem('theme') === 'dark'
    })

    const toggleTheme = () => {
        enabled.value = !enabled.value;
        localStorage.setItem("theme", enabled.value ? "dark" : "light")
        setTheme();
    }

    function setTheme() {
        const theme = localStorage.getItem('theme')
        if (theme === 'dark' || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }

    return { toggleTheme, setTheme }
}