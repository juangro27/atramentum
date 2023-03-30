import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customersService from "../../services/customers.service";

const EditInvoiceData = () => {
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

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setInvoiceData({ ...invoiceData, [name]: value });
    };

    const getInvoiceData = async () => {
        const customer = await customersService.getCustomerInvoice(id);
        setInvoiceData(customer.data);
        console.log(customer.data);
        setIsLoading(false);
    };

    return isLoading ? (
        <p>Loading...</p>
    ) : (
        <div className="py-10">
            <h2 className="text-center font-bold text-4xl">
                Invoice information
            </h2>
            <form className="px-20">
                <div className="space-y-12 ">
                    <div className="border-b border-gray-900/10 pb-12  md:px-20">
                        <div className="mt-10 md:grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
                            <div className="sm:col-span-2">
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

                            <div className="sm:col-span-2">
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
                                        type="identityCardNumber"
                                        autoComplete="identityCardNumber"
                                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                        value={invoiceData.identityCardNumber}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="comments"
                                            name="comments"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
                                            checked={invoiceData.activated}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label
                                            htmlFor="comments"
                                            className="font-medium text-gray-900"
                                        >
                                            Status
                                        </label>
                                        <p className="text-gray-500">
                                            invoiceData status in our system
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="comments"
                                            name="comments"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
                                            checked={invoiceData.agreeTerms}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label
                                            htmlFor="comments"
                                            className="font-medium text-gray-900"
                                        >
                                            Terms
                                        </label>
                                        <p className="text-gray-500">
                                            The invoiceData has accepted the
                                            terms and conditions
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="comments"
                                            name="comments"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
                                            checked={
                                                invoiceData.agreeCommercials
                                            }
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label
                                            htmlFor="comments"
                                            className="font-medium text-gray-900"
                                        >
                                            Commercials
                                        </label>
                                        <p className="text-gray-500">
                                            The invoiceData has agreed to
                                            receive commercial information
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="comments"
                                            name="comments"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
                                            checked={
                                                invoiceData.canContactPhone
                                            }
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label
                                            htmlFor="comments"
                                            className="font-medium text-gray-900"
                                        >
                                            Contact by phone
                                        </label>
                                        <p className="text-gray-500">
                                            The invoiceData has agreed to
                                            receive calls
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6 px-20">
                    <button
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Cancel
                    </button>
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
