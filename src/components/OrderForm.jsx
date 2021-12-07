import {useForm , Controller} from 'react-hook-form';
import {useEffect, useState} from 'preact/hooks';
import Select from "react-select";
import Modal from "react-modal";

const ModalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 99999,
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 99999,
  },
};

Modal.setAppElement("#app");

const paymentData = [
  { value: '', label: '請選擇付款方式', isDisabled: true },
  { value: 'ATM', label: 'ATM' },
  { value: 'CreditCard', label: '信用卡' },
  { value: 'ApplePay' , label: 'Apple Pay' },
]



export function OrderForm({ orderData, setOrderData }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [payment, setPayment] = useState(null);

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur", reValidateMode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);

    const submitData = {
      "data": {
        "user": {
          "name": data.userName,
          "tel": data.userTel,
          "email": data.userEmail,
          "address": data.userAddress,
          "payment": data.payment,
        }
      }
    }

    FetchData({ 'target': 'customer-orders', submitData }).then((res) => {
      console.log(res);
      handleModal();
      setOrderData(res.data);
    }).catch((err) => {
      console.log(err);
    })

  }
  const watchAllFields = watch();
  useEffect(() => {
    const watchUserName = watch("userName");
    const watchUserEmail = watch("userEmail");
    const watchUserTel = watch("userTel");
    const watchUserAddress = watch("userAddress");
    // const formData = watch((value, { name, type }) => console.log(value, name, type));

  }, [watch]);
  return (
    <section class="container pt-14 pb-20">
      <h2 class="text-center text-h2 mb-8">填寫預訂資料</h2>
      <form
        action=""
        class="space-y-5 md:w-1/2 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label class="block mb-2" htmlFor="userName">
            姓名
          </label>
          <div class="flex gap-2 items-center">
            <Controller
              name="userName"
              control={control}
              rules={{ required: { value: true, message: "必填!" } }}
              render={({ field, formState }) => (
                <input
                  value={field.value}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                  inputRef={field.ref}
                  class={`form-control ${
                    formState.isValid ? "ring-red ring-opacity-80" : ""
                  }`}
                  placeholder="請輸入姓名"
                />
              )}
            />
            {errors.userName && (
              <span class="text-red flex-none">{errors.userName.message}</span>
            )}
          </div>
        </div>
        <div>
          <label class="block mb-2" htmlFor="userTel">
            電話
          </label>
          <div class="flex gap-2 items-center">
            <Controller
              name="userTel"
              control={control}
              rules={{
                required: { value: true, message: "必填!" },
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "請輸入正確的電話號碼",
                },
              }}
              render={({ field }) => (
                <input
                  value={field.value}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                  inputRef={field.ref}
                  maxLength="10"
                  class={`form-control`}
                  placeholder="請輸入電話"
                />
              )}
            />
            {errors.userTel && (
              <span class="text-red flex-none">{errors.userTel.message}</span>
            )}
          </div>
        </div>
        <div>
          <label class="block mb-2" htmlFor="userEmail">
            Email
          </label>
          <div class="flex gap-2 items-center">
            <Controller
              name="userEmail"
              control={control}
              rules={{ required: { value: true, message: "必填!" } }}
              render={({ field }) => (
                <input
                  value={field.value}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                  inputRef={field.ref}
                  class={`form-control`}
                  placeholder="請輸入Email"
                />
              )}
            />
            {errors.userEmail && (
              <span class="text-red flex-none">{errors.userEmail.message}</span>
            )}
          </div>
        </div>
        <div>
          <label class="block mb-2" htmlFor="userAddress">
            寄送地址
          </label>
          <div class="flex gap-2 items-center">
            <Controller
              name="userAddress"
              control={control}
              rules={{ required: { value: true, message: "必填!" } }}
              render={({ field }) => (
                <input
                  value={field.value}
                  onBlur={field.onBlur} // notify when input is touched
                  onChange={field.onChange} // send value to hook form
                  inputRef={field.ref}
                  class={`form-control`}
                  placeholder="請輸入寄送地址"
                />
              )}
            />
            {errors.userAddress && (
              <span class="text-red flex-none">
                {errors.userAddress.message}
              </span>
            )}
          </div>
        </div>
        <div>
          <label class="block mb-2" htmlFor="payment">
            付款方式
          </label>
          <div class="flex gap-2 items-center">
            <Controller
              name="payment"
              control={control}
              rules={{ required: { value: true, message: "請選擇付款方式!" } }}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                  ref={field.ref}
                  className="w-full"
                  theme={(theme) => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary25: "#9D7FEA",
                      primary: "#6A33FF",
                    },
                  })}
                  defaultValue={paymentData[0]}
                  options={paymentData}
                />
              )}
            />
            {errors.payment && (
              <span class="text-red flex-none">{errors.payment.message}</span>
            )}
          </div>
        </div>
        <div class="pt-12">
          <button
            type="submit"
            class="w-10/12 rounded bg-black text-white grid place-content-center text-xl py-3 mx-auto transition duration-300 ease-in-out hover:bg-primary-dark"
          >
            送出預訂資料
          </button>
        </div>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={ModalStyle}
        closeTimeoutMS={200}
      >
        <div class="flex flex-col items-center justify-center py-4 px-6 space-y-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="h-12 w-12 text-primary"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
            />
          </svg>
          <h2 class="text-xl text-center">已成功送出訂單</h2>
          <p class="text-center text-primary-md">感謝您本次的下訂</p>
          <button
            type="button"
            class="w-full bg-primary text-white grid place-content-center rounded-xl text-xl py-3 mb-2"
            onClick={handleModal}
          >
            關閉
          </button>
        </div>
      </Modal>
    </section>
  );
}
