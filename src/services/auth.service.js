import axios from "axios";

class AuthService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/auth`,
        });

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }

            return config;
        });
    }

    login(data) {
        return this.api.post(`/login`, data);
    }
}

const authService = new AuthService();
export default authService;
