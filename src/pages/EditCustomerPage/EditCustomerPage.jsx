import EditBasicInformation from "../../components/EditBasicInformation/EditBasicInformation";
import EditInvoiceData from "../../components/EditInvoiceData/EditInvoiceData";

const EditCustomerPage = () => {
    return (
        <>
            <h1>Edit user</h1>
            <EditBasicInformation />
            <EditInvoiceData />
        </>
    );
};
export default EditCustomerPage;
