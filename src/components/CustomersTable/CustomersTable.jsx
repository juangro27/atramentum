import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import customersService from "../../services/customers.service";
import Pagination from "../Pagination/Pagination";

const CustomersTable = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        totalPages: 0,
        pageSize: 10,
        totalElements: 9,
        pageNumber: 0,
        isFirst: true,
        isLast: true,
    });
    useEffect(() => {
        getCustomers();
    }, []);

    const changePage = async (page) => {
        try {
            const customers = await customersService.getCustomers(page);
            const {
                totalPages,
                pageSize,
                totalElements,
                pageNumber,
                isFirst,
                isLast,
            } = customers.data;

            setPagination({
                totalPages,
                pageSize,
                totalElements,
                pageNumber,
                isFirst,
                isLast,
            });
        } catch (err) {
            console.log(err);
        }
    };

    const getCustomers = async () => {
        try {
            const customers = await customersService.getCustomers();
            const {
                totalPages,
                pageSize,
                totalElements,
                pageNumber,
                isFirst,
                isLast,
            } = customers.data;

            setCustomers(customers.data.content);

            setPagination({
                totalPages,
                pageSize,
                totalElements,
                pageNumber,
                isFirst,
                isLast,
            });

            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };
    return loading ? (
        <h1>Loading...</h1>
    ) : customers.length >= 1 ? (
        <div className="flex flex-col p-20">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="w-full divide-y divide-gray-200 ">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                    >
                                        ID
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 "
                                    >
                                        Phone
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                    >
                                        Edit
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {customers.map((customer) => {
                                    return (
                                        <tr key={customer.id}>
                                            <td className="px-6 py-4 text-sm text-center  font-medium text-gray-800 whitespace-nowrap">
                                                {customer.id}
                                            </td>

                                            <td className="px-6 py-4 text-sm text-center  text-gray-800 whitespace-nowrap">
                                                {customer.contactName}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-center  text-gray-800 whitespace-nowrap">
                                                {customer.email}
                                            </td>
                                            <td className="px-6 py-4 text-sm  text-center font-medium text-gray-800 whitespace-nowrap">
                                                {`${customer.activated}`}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-center  text-gray-800 whitespace-nowrap">
                                                {customer.phone1}
                                            </td>
                                            <td className="px-6 py-4 text-sm   font-medium text-center whitespace-nowrap ">
                                                <Link
                                                    className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
                                                    to={`./${customer.id}`}
                                                >
                                                    Edit
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Pagination
                        pagination={pagination}
                        changePage={changePage}
                    />
                </div>
            </div>
        </div>
    ) : (
        <h1>No results...</h1>
    );
};
export default CustomersTable;
