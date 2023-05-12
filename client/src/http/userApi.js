import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
    const { data } = await $host.post("api/user/registration", {
        email,
        password,
        role: "ADMIN",
    });
    return jwt_decode(data.token);
};

export const login = async (email, password) => {
    const response = await $host.post("api/user/login", {
        email,
        password,
    });
    return response;
};
export const check = async () => {
    const response = await $host.get("api/user/auth");
    return response;
};
