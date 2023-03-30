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

    getCustomerInvoice(id) {
        return this.api.get(`/customers/invoiceData/${id}`);
    }

    editCustomerInvoice(id, invoiceData) {
        return this.api.put(`/customers/invoiceData/${id}`, invoiceData);
    }
}

const customersService = new CustomersService();
export default customersService;
