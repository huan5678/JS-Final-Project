import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from '../context/UserAuthContext';

const SignUp = ({ setLoginStatus }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signUp, handleToast } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
            handleToast({
              message: "成功註冊帳號!",
              option: { theme: "colored", icon: "😄" },
              status: "warning",
            });
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
      // console.log(err);
    }
  };
  // const handleCreateSubmit = useCallback(async (e) => {
  //   e.preventDefault();

  //   const { email, password } = e.target.elements;
  //   const auth = getAuth();
  //   try {
  //     await createUserWithEmailAndPassword(
  //       auth,
  //       email.value,
  //       password.value
  //     ).then((user) => {
  //       console.log(user);
  //       handleToast({
  //         message: "成功註冊帳號!",
  //         option: { theme: "colored", icon: "😄" },
  //         status: "warning",
  //       });
  //     });
  //   } catch (e) {
  //     alert(e.message);
  //   }
  // }, []);

  return (
    <section className="container pt-4">
      <h1 className="text-center text-h1 mb-12">註冊</h1>
      {error && <p className="text-red text-h2 text-center">{error}</p>}
      <form className="space-y-4 w-1/2 mx-auto mb-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            使用者帳號Email
          </label>
          <input
            name="email"
            placeholder="請輸入管理者帳號Email"
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            密碼
          </label>
          <input
            name="password"
            placeholder="請輸入密碼"
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-3">
          <button
            className="w-full flex-auto rounded py-2 px-5 border border-blue text-blue transition duration-300 ease-in-out hover:bg-blue hover:border-transparent hover:text-white"
            type="submit"
          >
            註冊帳號
          </button>
        </div>
      </form>
      <button
        className="w-1/2 mx-auto block py-2 px-5 text-gray-dark border rounded transition duration-300 ease-in-out hover:border-primary hover:text-primary-dark"
        type="button"
        onClick={() => setLoginStatus(true)}
      >
        已經有帳號了~😅
      </button>
    </section>
  );
};

export default SignUp;