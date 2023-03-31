import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import customersService from "../../services/customers.service";
import Spinner from "../Spinner/Spinner";

const EditInvoiceData = ({ setNotification }) => {
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const [invoiceData, setInvoiceData] = useState({
        id: 1,
        address: {
            id: 12,
            customerId: 1,
            titular: "titular1",
            isPredetermined: false,
            addressAlias: "NAME1",
            countryId: 3,
            provinceId: 3,
            contactName: "NAME6",
            address1: "address1",
            postalCode: "03001",
            town: "town1",
            phoneA: "66528901",
            phoneB: "66528902",
            email: "email1@mail.com",
            deleted: false,
            createdBy: "ADMIN",
            createdDate: "2021-04-03T15:23:12.444",
            lastModifiedBy: "ADMIN",
            lastModifiedDate: "2022-03-05T16:56:14.666",
        },
        commercialName: "example0",
        identityCardNumber: "",
        hasSurcharge: true,
        isActive: true,
        intercomunitariaOperator: false,
        always_generateInvoice: false,
        noCompensate: true,
    });

    useEffect(() => {
        getInvoiceData(id);
    }, []);

    const getInvoiceData = async () => {
        try {
            const customer = await customersService.getCustomerInvoice(id);
            setInvoiceData(customer.data);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setInvoiceData({ ...invoiceData, [name]: value });
    };

    const handleAddressInputChange = (e) => {
        const { value, name } = e.target;
        setInvoiceData({
            ...invoiceData,
            address: { ...invoiceData.address, [name]: value },
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await customersService.editCustomer(id, invoiceData);
            setNotification({
                message: "Invoice information successfully updated",
                type: "success",
            });
        } catch (err) {
            console.log(err.response);
            setNotification({
                message: err.response.data.message,
                type: "err",
            });
        }
    };

    return isLoading ? (
        <Spinner />
    ) : (
        <div className="py-10">
            <h2 className="text-center font-bold text-4xl">
                Invoice information
            </h2>
            <form
                className="px-20"
                onSubmit={handleSubmit}
            >
                <div className="space-y-12 ">
                    <div className="border-b border-gray-900/10 pb-12  md:px-20">
                        <div className="mt-10 md:grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="commercialName"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="commercialName"
                                        id="commercialName"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                        value={invoiceData.commercialName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="identityCardNumber"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Identity card number
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="identityCardNumber"
                                        name="identityCardNumber"
                                        type="text"
                                        autoComplete="identityCardNumber"
                                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                        value={invoiceData.identityCardNumber}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="addressAlias"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Address Alias
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="addressAlias"
                                        name="addressAlias"
                                        type="text"
                                        autoComplete="addressAlias"
                                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                        value={invoiceData.address.addressAlias}
                                        onChange={handleAddressInputChange}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="titular"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Titular
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="titular"
                                        name="titular"
                                        type="text"
                                        autoComplete="titular"
                                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                        value={invoiceData.address.titular}
                                        onChange={handleAddressInputChange}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="contactName"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Contact name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="contactName"
                                        name="contactName"
                                        type="text"
                                        autoComplete="contactName"
                                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                        value={invoiceData.address.contactName}
                                        onChange={handleAddressInputChange}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="address1"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="address1"
                                        name="address1"
                                        type="text"
                                        autoComplete="address1"
                                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                        value={invoiceData.address.address1}
                                        onChange={handleAddressInputChange}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="town"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Town
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="town"
                                        name="town"
                                        type="text"
                                        autoComplete="town"
                                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                        value={invoiceData.address.town}
                                        onChange={handleAddressInputChange}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="postalCode"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Postal Code
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="postalCode"
                                        name="postalCode"
                                        type="text"
                                        autoComplete="postalCode"
                                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                        value={invoiceData.address.postalCode}
                                        onChange={handleAddressInputChange}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="phoneA"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Main phone
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="phoneA"
                                        name="phoneA"
                                        type="text"
                                        autoComplete="phoneA"
                                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                        value={invoiceData.address.phoneA}
                                        onChange={handleAddressInputChange}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="phoneB"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Secondary phone
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="phoneB"
                                        name="phoneB"
                                        type="text"
                                        autoComplete="phoneB"
                                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                        value={invoiceData.address.phoneB}
                                        onChange={handleAddressInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6 px-20">
                    <Link
                        to="/customers"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Back
                    </Link>
                    <button
                        type="submit"
                        className="rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditInvoiceData;
