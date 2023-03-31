import { useState } from "react";
import { Link } from "react-router-dom";
import customersService from "../../services/customers.service";

const EditWebInfo = ({
    webInfo,
    websEditStatus,
    setWebsEditStatus,
    setNotification,
    setShouldReload,
}) => {
    const [web, setWeb] = useState(webInfo);
    const changeStatus = () => {
        const status = websEditStatus.map(() => false);
        setWebsEditStatus(status);
    };

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setWeb({ ...web, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await customersService.editCustomerWeb(web.id, web);
            setNotification({
                message: "Customer web successfully updated",
                type: "success",
            });
            changeStatus();
            setShouldReload(true);
        } catch (err) {
            setNotification({
                message: err.response.data.message,
                type: "err",
            });
        }
    };

    return !web ? (
        <p>Loading...</p>
    ) : (
        <tr key={web.id}>
            <td className="px-6 py-4 text-sm text-center  font-medium text-gray-800 whitespace-nowrap">
                {web.id}
            </td>

            <td className="px-6 py-4 text-sm text-center  text-gray-800 whitespace-nowrap">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="url"
                        id="url"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                        value={web.url}
                        onChange={handleInputChange}
                    />
                </form>
            </td>

            <td className="px-6 py-4 text-sm   font-medium text-center whitespace-nowrap ">
                <Link
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                    onClick={changeStatus}
                >
                    Cancel
                </Link>
                <Link
                    className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
                    onClick={handleSubmit}
                >
                    Save
                </Link>
            </td>
        </tr>
    );
};

export default EditWebInfo;
