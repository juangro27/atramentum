import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import customersService from "../../services/customers.service";
import EditWebInfo from "../EditWebInfo/EditWebInfo";
import Pagination from "../Pagination/Pagination";
import WebInfo from "../WebInfo/WebInfo";

const CustomerWebs = ({ setNotification }) => {
    const { id } = useParams();
    const [webs, setWebs] = useState([]);
    const [websEditStatus, setWebsEditStatus] = useState([]);
    const [shouldReload, setShouldReload] = useState(false);
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
        getCustomerWebs();
        setShouldReload(false);
    }, [shouldReload]);

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

    const getCustomerWebs = async () => {
        try {
            const websData = await customersService.getCustomerWebs(id);
            const {
                totalPages,
                pageSize,
                totalElements,
                pageNumber,
                isFirst,
                isLast,
            } = websData.data;

            setWebs(websData.data.content);
            setWebsEditStatus(websData.data.content.map((elm) => false));

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
    ) : webs.length >= 1 ? (
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
                                        Url
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
                                {webs.map((web, index) => {
                                    return websEditStatus[index] === false ? (
                                        <WebInfo
                                            key={`web-${index}`}
                                            webInfo={web}
                                            index={index}
                                            websEditStatus={websEditStatus}
                                            setWebsEditStatus={
                                                setWebsEditStatus
                                            }
                                        />
                                    ) : (
                                        <EditWebInfo
                                            key={`web-${index}`}
                                            webInfo={web}
                                            websEditStatus={websEditStatus}
                                            setWebsEditStatus={
                                                setWebsEditStatus
                                            }
                                            setNotification={setNotification}
                                            setShouldReload={setShouldReload}
                                        />
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
                <div className="mt-6 flex items-center justify-end gap-x-6 px-20">
                    <Link
                        to="/customers"
                        className="rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                    >
                        Back
                    </Link>
                </div>
            </div>
        </div>
    ) : (
        <h1>No results...</h1>
    );
};
export default CustomerWebs;
