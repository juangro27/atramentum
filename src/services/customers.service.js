import axios from "axios";

class CustomersService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/customers`,
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

    getCustomers() {
        return this.api.get(`/`);
    }
}

const customersService = new CustomersService();
export default customersService;
