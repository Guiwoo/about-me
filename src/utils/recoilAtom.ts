import { atom } from "recoil";

const getDefatulDark = () => {
    const amIDark = localStorage.getItem("DARK")
    if (!amIDark) {
        localStorage.setItem("DARK", "true")
    }
    if (amIDark === "true") {
        return true
    } else {
        return false
    }
}


export const darkState = atom({
    key: "isDark",
    default: getDefatulDark()
})