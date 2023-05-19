export const closeMenu = () => {
    if (typeof document === 'undefined') return
    document.documentElement.classList.remove("menu")
}
export const openMenu = () => {
    if (typeof document === 'undefined') return
    document.documentElement.classList.add("menu")
}