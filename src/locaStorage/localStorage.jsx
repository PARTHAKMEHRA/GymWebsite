import { atom } from "recoil";

let usersDataFromLocal = "";

if (JSON.parse(localStorage.getItem("users"))) {
  usersDataFromLocal = JSON.parse(localStorage.getItem("users"));
}

export const userData = atom({
  key: "userData",
  default: [
    {
      fname: "parthak",
      lname: "mehra",
      email: "parthakmehra3@gmail.com",
      password: "pmehra12345",
    },
    ...usersDataFromLocal,
  ],
});

export const showHome = atom({
  key: "showHome",
  default: false,
});
