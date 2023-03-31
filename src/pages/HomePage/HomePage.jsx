import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 lg:py-12">
                <div className="lg:gap-4 lg:flex">
                    <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
                        <h1 className="font-bold text-gray-600 text-5xl">
                            Welcome to Akralogic panel
                        </h1>

                        <Link
                            to="/customers"
                            className="px-5 my-10 py-2 rounded-md text-sky-100 bg-sky-600 hover:bg-sky-700"
                        >
                            Go customers list
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
