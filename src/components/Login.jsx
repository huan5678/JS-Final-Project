import { useCallback, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  isSignInWithEmailLink,
} from "firebase/auth";


const Login = ({ handleToast }) => {
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value).then(
        (res) => {
          console.log(res);
          const message = `Welcome ${res.user.email}`;
          handleToast({ message,option:{ theme: "colored", icon: "🥴" },status: "success" });
        }
      );
    } catch (e) {
      alert(e.message);
    }
  }, []);
  
  return (
    <>
      <h1>管理者登入</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          name="email"
          placeholder="email"
          type="email"
          className="form-control"
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          className="form-control"
        />
        <button
          className="rounded mr-4 py-2 px-5 border border-secondary text-secondary transition duration-300 ease-in-out hover:bg-secondary hover:border-transparent hover:text-white"
          type="submit"
        >
          登入
        </button>
      </form>
    </>
  );
};

export default Login;