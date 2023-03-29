import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <h1 className="text-5xl text-center	font-bold">Log in</h1>
            <LoginForm />
        </div>
    );
};
export default LoginPage;
