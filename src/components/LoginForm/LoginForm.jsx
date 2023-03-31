import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";
import authService from "../../services/auth.service";

const LoginForm = () => {
    const navigate = useNavigate();
    const { authenticateUser, storeToken } = useContext(AuthContext);
    const [errors, setErrors] = useState([]);

    const [loginData, setLoginData] = useState({});

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data: user } = await authService.login(loginData);
            await storeToken(user.token);
            authenticateUser();
            navigate("/");
        } catch (err) {
            setErrors(err.response.data.message);
        }
    };
    return (
        <div className="flex w-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                {errors.length >= 1 && (
                    <h1 className="bg-red-700 text-zinc-50 text-center rounded-md py-2">
                        {errors}
                    </h1>
                )}
                <form
                    className="mt-8 space-y-6"
                    method="POST"
                    onSubmit={handleSubmit}
                >
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label
                                htmlFor="username"
                                className="sr-only"
                            >
                                User
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                placeholder="User"
                                value={loginData.username}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="sr-only"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                placeholder="Password"
                                onChange={handleInputChange}
                                value={loginData.password}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <LockClosedIcon
                                    className="h-5 w-5 text-sky-500 group-hover:text-sky-400"
                                    aria-hidden="true"
                                />
                            </span>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
