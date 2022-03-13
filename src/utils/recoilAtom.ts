import { atom } from "recoil";

const getDefatulDark = () => {
    localStorage.setItem("Dark", "true")
    const amIDark = localStorage.getItem("DARK")
    console.log(amIDark)
    if (amIDark) {
        return false
    } else {
        return true
    }
}
// getDefatulDark()

export const darkState = atom({
    key: "isDark",
    default: false
})