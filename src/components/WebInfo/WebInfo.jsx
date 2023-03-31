import { Link } from "react-router-dom";

const WebInfo = ({ webInfo, index, websEditStatus, setWebsEditStatus }) => {
    const changeStatus = () => {
        const status = websEditStatus.map(() => false);
        status[index] = true;
        setWebsEditStatus(status);
    };

    return (
        <tr key={webInfo.id}>
            <td className="px-6 py-4 text-sm text-center font-medium text-gray-800 whitespace-nowrap">
                {webInfo.id}
            </td>

            <td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
                {webInfo.url}
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
export default WebInfo;
