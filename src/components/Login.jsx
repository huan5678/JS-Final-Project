import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = ({ setLoginStatus }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { logIn, googleSignIn } = useUserAuth();
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try {
        await logIn(email, password);
        navigate("/dashboard");
      } catch (err) {
        setError(err.message);
      }
    };

  const handleGoogleSignIn = async(e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  // const handleToastSubmit = useCallback(async (e) => {
  //   e.preventDefault();

  //   const { email, password } = e.target.elements;
  //   const auth = getAuth();
  //   try {
  //     await signInWithEmailAndPassword(auth, email.value, password.value).then(
  //       (res) => {
  //         console.log(res);
  //         const message = `Welcome ${res.user.email}`;
  //         handleToast({ message,option:{ theme: "colored", icon: "🥴" },status: "success" });
  //       }
  //     );
  //   } catch (e) {
  //     alert(e.message);
  //   }
  // }, []);
  
  return (
    <section className="pt-4 container space-y-12">
      <h1 className="text-center text-h1">管理者登入
        <span className="text-sm block text-gray">
          測試用帳號: wowoadmin@gmail.com 密碼: admin1234
          <br />
          <span className="text-xl">
            也歡迎註冊玩看看喔
          </span>
        </span>
      </h1>
      {error && <p className="text-red text-h2 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 w-1/2 mx-auto">
        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
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
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
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
        <button
          className="w-full rounded mr-4 py-2 px-5 border border-secondary text-secondary transition duration-300 ease-in-out hover:bg-secondary hover:border-transparent hover:text-white"
          type="submit"
        >
          登入
        </button>
        <div className="w-full flex justify-center items-center gap-3">
          <button
            className="rounded mr-4 py-2 px-5 border text-gray-border border-gray-border flex-auto transition duration-300 ease-in-out hover:border-gray-dark hover:text-gray-dark"
            onClick={handleGoogleSignIn}
          >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 326667 333333"
                className="w-5 h-5 inline align-middle mr-3"
              >
                <path
                  d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
                  fill="#4285f4"
                />
                <path
                  d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
                  fill="#34a853"
                />
                <path
                  d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
                  fill="#fbbc04"
                />
                <path
                  d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
                  fill="#ea4335"
                />
              </svg>
              使用Google帳號登入
          </button>

          <button
            type="button"
            className="flex-auto rounded py-2 px-5 bg-primary text-white opacity-60 transition duration-300 ease-in-out hover:opacity-100"
            onClick={()=>setLoginStatus(false)}
          >
            沒有帳號？來來來哩來 😏
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;