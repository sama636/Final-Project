import { atom } from "recoil";
const oldData = localStorage.getItem('loggedInUser')

export const $Current_Width = atom({
    key : "$Current_Width",
    default: window.innerWidth
}) 
export const $Side_Menu_Index = atom({
    key : "$Side_Menu_Index",
    default: false
})
export const $Modal_Index = atom({
    key : "$Modal_Index ",
    default: false
})
export const $Mod_Index = atom({
    key : "$Mod_Index ",
    default: false
})
export const $Auth_Data = atom({
    key : "$Auth_Data",
    default: {
        isAuth: oldData ? true: false,
        userId: oldData ? oldData.id : null 
    }
})


