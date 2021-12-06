import {useForm , Controller} from 'react-hook-form';
import {useEffect, useState} from 'preact/hooks';
import Select from "react-select";

const paymentData = [
  { value: '', label: '請選擇付款方式', isDisabled: true },
  { value: 'ATM', label: 'ATM' },
  { value: 'CreditCard', label: '信用卡' },
  { value: 'ApplePay' , label: 'Apple Pay' },
]
export function OrderForm({ orderData, setOrderData }) {
  const [payment, setPayment] = useState(null);
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur", reValidateMode: "onChange" });
  const onSubmit = (data) => console.log(data);
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
              render={({ field }) => (
                <input
                  value={field.value}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                  inputRef={field.ref}
                  class="form-control"
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
                  class="form-control"
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
                  class="form-control"
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
                  class="form-control"
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
    </section>
  );
}
