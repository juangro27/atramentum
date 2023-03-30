import axios from "axios";

class CustomersService {
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

    getCustomers(pageNumber = 0) {
        return this.api.get(`/customers?pageNumber=${pageNumber}`);
    }

    editCustomer(id) {
        return this.api.put(`/customers/${id}`);
    }
}

const customersService = new CustomersService();
export default customersService;
