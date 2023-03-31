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

    getCustomer(id) {
        return this.api.get(`/customers/${id}`);
    }

    editCustomer(id, user) {
        return this.api.put(`/customers/${id}`, user);
    }

    getCustomerWebs(id) {
        return this.api.get(`/customers/${id}/webs`);
    }

    editCustomerWeb(id, web) {
        return this.api.put(`/customers/webs/${id}`, web);
    }
}

const customersService = new CustomersService();
export default customersService;
