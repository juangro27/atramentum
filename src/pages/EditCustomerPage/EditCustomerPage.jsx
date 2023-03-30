import { useParams } from "react-router-dom";
import customersService from "../../services/customers.service";

const EditCustomerPage = () => {
    const { id } = useParams(id);

    const editCustomer = async () => {
        const customer = await customersService.editCustomer();
    };

    return "EditCustomerPage";
};
export default EditCustomerPage;
