import { useEffect, useState } from "react";
import customersService from "../../services/customers.service";

const CustomersTable = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getCustomers();
    }, []);

    const getCustomers = async () => {
        const customers = await customersService.getCustomers();
        setCustomers(customers.data.content);
        setLoading(false);
    };

    return loading ? (
        <h1>Loading...</h1>
    ) : customers.length >= 1 ? (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Edit
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {customers.map((customer) => {
                                    return (
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                {customer.id}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {customer.contactName}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {customer.email}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                <a
                                                    className="text-green-500 hover:text-green-700"
                                                    href="#"
                                                >
                                                    Edit
                                                </a>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                <a
                                                    className="text-red-500 hover:text-red-700"
                                                    href="#"
                                                >
                                                    Delete
                                                </a>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <h1>No results...</h1>
    );
};
export default CustomersTable;
