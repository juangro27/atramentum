import { useState } from "react";
import EditProfile from "../../components/EditProfile/EditProfile";
import CustomerWebs from "../../components/CustomerWebs/CustomerWebs";
import CustomerContacts from "../../components/CustomerContacts/CustomerContacts";

const EditCustomerPage = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [notification, setNotification] = useState(false);
    const tabsData = [
        {
            label: "Profile",
            key: "tab-1",
            content: <EditProfile setNotification={setNotification} />,
        },
        {
            label: "Customer webs",
            key: "tab-2",
            content: <CustomerWebs setNotification={setNotification} />,
        },
        {
            label: "Customer email",
            key: "tab-3",
            content: <CustomerContacts setNotification={setNotification} />,
        },
    ];

    const changeTab = (index) => {
        setActiveTabIndex(index);
        setNotification(false);
    };

    return (
        <>
            <h1 className="text-5xl	text-center	pt-10">Edit user</h1>

            <div className="px-10 sm:px-20 py-5">
                {notification && (
                    <p
                        className={
                            notification.email === "err"
                                ? "bg-red-700 text-zinc-50 text-center rounded-md py-2"
                                : "bg-green-700 text-zinc-50 text-center rounded-md py-2"
                        }
                    >
                        {notification.message}
                    </p>
                )}

                <div className="flex space-x-3 border-b">
                    {tabsData.map(({ key, label }, index) => {
                        return (
                            <button
                                key={key}
                                className={`py-2 border-b-4 transition-colors duration-300 
                                ${
                                    index === activeTabIndex
                                        ? "border-sky-500"
                                        : "border-transparent hover:border-gray-200"
                                }`}
                                onClick={() => changeTab(index)}
                            >
                                {label}
                            </button>
                        );
                    })}
                </div>
                <div className="py-4">{tabsData[activeTabIndex].content}</div>
            </div>
        </>
    );
};
export default EditCustomerPage;
