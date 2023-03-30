import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customersService from "../../services/customers.service";

const EditBasicInformation = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const [user, setUser] = useState({
        contactName: "",
        email: "",
        observations: "",
        phone1: "",
        activated: "",
        agreeTerms: "",
        agreeCommercials: "",
        canContactPhone: "",
    });

    useEffect(() => {
        getCustomer(id);
    }, []);

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setUser({ ...user, [name]: value });
    };

    const getCustomer = async () => {
        const customer = await customersService.getCustomer(id);
        setUser(customer.data);
        setIsLoading(false);
    };

    return isLoading ? (
        <p>Loading...</p>
    ) : (
        <div className="py-10">
            <h2 className="text-center font-bold text-4xl">
                Basic information
            </h2>
            <form className="px-20">
                <div className="space-y-12 ">
                    <div className="border-b border-gray-900/10 pb-12  md:px-20">
                        <div className="mt-10 md:grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="contactName"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="contactName"
                                        id="contactName"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                        value={user.contactName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                        value={user.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="last-name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Observations:
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                        value={user.observations}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="col-span-2">
                                <label
                                    htmlFor="street-address"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Phone
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                        value={user.phone1}
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
                                            checked={user.activated}
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
                                            User status in our system
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
                                            checked={user.agreeTerms}
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
                                            The user has accepted the terms and
                                            conditions
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
                                            checked={user.agreeCommercials}
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
                                            The user has agreed to receive
                                            commercial information
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
                                            checked={user.canContactPhone}
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
                                            The user has agreed to receive calls
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

export default EditBasicInformation;
