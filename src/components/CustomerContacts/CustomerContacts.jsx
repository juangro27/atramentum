import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import customersService from "../../services/customers.service";
import Pagination from "../Pagination/Pagination";
import ContactInfo from "../ContactInfo/ContactInfo";
import EditContactInfo from "../EditContactInfo/EditContactInfo";
import Spinner from "../Spinner/Spinner";

const CustomerContacts = ({ setNotification }) => {
    const { id } = useParams();
    const [contacts, setContacts] = useState([]);
    const [contactsEditStatus, setContactsEditStatus] = useState([]);
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
        getCustomerContacts();
        setShouldReload(false);
    }, [shouldReload]);

    const changePage = async (page) => {
        try {
            const customers = await customersService.getCustomerContacts(
                id,
                page
            );
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

    const getCustomerContacts = async () => {
        try {
            const contactsData = await customersService.getCustomerContacts(id);
            const {
                totalPages,
                pageSize,
                totalElements,
                pageNumber,
                isFirst,
                isLast,
            } = contactsData.data;

            setContacts(contactsData.data.content);
            setContactsEditStatus(contactsData.data.content.map(() => false));

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
        <Spinner />
    ) : contacts.length >= 1 ? (
        <div className="flex flex-col sm:p-20">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg overflow-x-auto	">
                        <table className="w-full divide-y divide-gray-200  ">
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
                                        Phone
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
                                        Morning init hour
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                    >
                                        Morning end hour
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                    >
                                        Afternoon init hour
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                    >
                                        Afternoon end hour
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {contacts.map((contact, index) => {
                                    return contactsEditStatus[index] ===
                                        false ? (
                                        <ContactInfo
                                            key={`contact-${index}`}
                                            contactInfo={contact}
                                            index={index}
                                            contactsEditStatus={
                                                contactsEditStatus
                                            }
                                            setContactsEditStatus={
                                                setContactsEditStatus
                                            }
                                        />
                                    ) : (
                                        <EditContactInfo
                                            key={`contact-${index}`}
                                            contactInfo={contact}
                                            contactsEditStatus={
                                                contactsEditStatus
                                            }
                                            setContactsEditStatus={
                                                setContactsEditStatus
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
export default CustomerContacts;
