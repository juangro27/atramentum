import { useState } from "react";
import { Link } from "react-router-dom";
import customersService from "../../services/customers.service";
import Spinner from "../Spinner/Spinner";

const EditContactInfo = ({
    contactInfo,
    contactsEditStatus,
    setContactsEditStatus,
    setNotification,
    setShouldReload,
}) => {
    const [contact, setContact] = useState(contactInfo);
    const changeStatus = () => {
        const status = contactsEditStatus.map(() => false);
        setContactsEditStatus(status);
    };

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await customersService.editCustomerContact(contact.id, contact);
            setNotification({
                message: "Customer contact successfully updated",
                contact: "success",
            });
            changeStatus();
            setShouldReload(true);
        } catch (err) {
            setNotification({
                message: err.response.data.message,
                contact: "err",
            });
        }
    };

    return !contact ? (
        <Spinner />
    ) : (
        <tr key={contact.id}>
            <td className="px-6 py-4 text-sm text-center  font-medium text-gray-800 whitespace-nowrap">
                {contact.id}
            </td>

            <td className="px-6 py-4 text-sm text-center  text-gray-800 whitespace-nowrap">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                        value={contact.name}
                        onChange={handleInputChange}
                    />
                </form>
            </td>

            <td className="px-6 py-4 text-sm text-center  text-gray-800 whitespace-nowrap">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="given-phone"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                        value={contact.phone}
                        onChange={handleInputChange}
                    />
                </form>
            </td>

            <td className="px-6 py-4 text-sm text-center  text-gray-800 whitespace-nowrap">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="given-email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                        value={contact.email}
                        onChange={handleInputChange}
                    />
                </form>
            </td>

            <td className="px-6 py-4 text-sm text-center  text-gray-800 whitespace-nowrap">
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        name="morningInitHour"
                        id="morningInitHour"
                        autoComplete="given-morningInitHour"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                        value={contact.morningInitHour}
                        onChange={handleInputChange}
                    />
                </form>
            </td>

            <td className="px-6 py-4 text-sm text-center  text-gray-800 whitespace-nowrap">
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        name="morningEndHour"
                        id="morningEndHour"
                        autoComplete="given-morningEndHour"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                        value={contact.morningEndHour}
                        onChange={handleInputChange}
                    />
                </form>
            </td>

            <td className="px-6 py-4 text-sm text-center  text-gray-800 whitespace-nowrap">
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        name="afternoonInitHour"
                        id="afternoonInitHour"
                        autoComplete="given-afternoonInitHour"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                        value={contact.afternoonInitHour}
                        onChange={handleInputChange}
                    />
                </form>
            </td>

            <td className="px-6 py-4 text-sm text-center  text-gray-800 whitespace-nowrap">
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        name="afternoonEndHour"
                        id="afternoonEndHour"
                        autoComplete="given-afternoonEndHour"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                        value={contact.afternoonEndHour}
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

export default EditContactInfo;
