import { useCallback } from "react";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  deleteUser,
} from "firebase/auth";

const SignUp = ({ handleToast }) => {
  
  const handleCreateSubmit = useCallback(async (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      ).then((user) => {
        console.log(user);
        handleToast({
          message: "成功註冊帳號!",
          option: { theme: "colored", icon: "😄" },
          status: "warning",
        });
      });
    } catch (e) {
      alert(e.message);
    }
  }, []);

  const handleDeleteSubmit = useCallback(async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(auth);
    console.log(user);
    const { email } = e.target.elements;
    console.log(email.value);
    console.log();
    // try {
    //   await deleteUser(email.value).then((res) => {
    //     console.log(res);
    //   })
    // } catch (e) {
    //   alert(e.message);
    // }
  }, []);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("logged out");
        handleToast({
          message: "使用者登出!",
          option: { theme: "colored", icon: "👋" },
          status: "info",
        });
            const auth = getAuth();
            const user = auth.currentUser;
            console.log(auth);
            console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 className="text-center text-h1">註冊</h1>
      <h2>註冊使用者</h2>
      <form className="space-y-6 mb-6" onSubmit={handleCreateSubmit}>
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
          className="rounded mr-4 py-2 px-5 border border-blue text-blue transition duration-300 ease-in-out hover:bg-blue hover:border-transparent hover:text-white"
          type="submit"
        >
          註冊帳號
        </button>
        <button
          className="rounded mr-4 py-2 px-5 border border-red text-red transition duration-300 ease-in-out hover:bg-red hover:border-transparent hover:text-white"
          type="button"
          onClick={handleLogout}
        >
          登出
        </button>
      </form>
    </>
  );
};

export default SignUp;