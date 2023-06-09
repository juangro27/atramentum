import axios from "axios";

class AuthService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`,
        });

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = {
                    Authorization: `Bearer ${storedToken}`,
                };
            }

            return config;
        });
    }

    login({ username, password }) {
        return this.api.post(
            `/authenticate?username=${username}&password=${password}`
        );
    }
}

const authService = new AuthService();
export default authService;
