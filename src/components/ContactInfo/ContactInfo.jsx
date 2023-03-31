import { Link } from "react-router-dom";

const ContactInfo = ({
    contactInfo,
    index,
    contactsEditStatus,
    setContactsEditStatus,
}) => {
    const changeStatus = () => {
        const status = contactsEditStatus.map(() => false);
        status[index] = true;
        setContactsEditStatus(status);
    };

    return (
        <tr key={contactInfo.id}>
            <td className="px-6 py-4 text-sm text-center font-medium text-gray-800 whitespace-nowrap">
                {contactInfo.id}
            </td>

            <td className="px-6 py-4 text-sm text-center font-medium text-gray-800 whitespace-nowrap">
                {contactInfo.name}
            </td>

            <td className="px-6 py-4 text-sm text-center font-medium text-gray-800 whitespace-nowrap">
                {contactInfo.phone}
            </td>

            <td className="px-6 py-4 text-sm text-center font-medium text-gray-800 whitespace-nowrap">
                {contactInfo.email}
            </td>

            <td className="px-6 py-4 text-sm text-center font-medium text-gray-800 whitespace-nowrap">
                {contactInfo.morningInitHour}
            </td>

            <td className="px-6 py-4 text-sm text-center font-medium text-gray-800 whitespace-nowrap">
                {contactInfo.morningEndHour}
            </td>

            <td className="px-6 py-4 text-sm text-center font-medium text-gray-800 whitespace-nowrap">
                {contactInfo.afternoonInitHour}
            </td>

            <td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
                {contactInfo.afternoonEndHour}
            </td>

            <td className="px-6 py-4 text-sm font-medium text-center whitespace-nowrap ">
                <Link
                    className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
                    onClick={changeStatus}
                >
                    Edit
                </Link>
            </td>
        </tr>
    );
};
export default ContactInfo;
