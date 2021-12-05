import {useForm , Controller} from 'react-hook-form';
import {useEffect} from 'preact/hooks';

export function OrderForm({ orderData, setOrderData }) {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const watchUserName = watch("userName");
  const watchUserEmail = watch("userEmail");
  const watchUserTel = watch("userTel");
  const watchUserAddress = watch("userAddress");
  const watchAllFields = watch();
  useEffect(() => {
    const formData = watch((value, { name, type }) => console.log(value, name, type));

  }, [watch]);
  return (
    <section class="container pt-14 pb-20">
      <h2 class="text-center text-h2 mb-8">填寫預訂資料</h2>
      <form
        action=""
        class="space-y-5 md:w-1/2 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="test"
          control={control}
          rules={{ required: true }}
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
          }) => (
            <input
              onBlur={onBlur} // notify when input is touched
              onChange={onChange} // send value to hook form
              inputRef={ref}
              class="form-control"
            />
          )}
        />
        <div>
          <label class="block mb-2" for="userName">
            姓名
          </label>
          <div class="flex gap-2 items-center">
            <input
              id="userName"
              name="userName"
              type="text"
              {...register("userName", { required: true })}
              class="form-control"
              placeholder="請輸入姓名"
            />
            {errors.userName && <span class="text-red flex-none">必填!</span>}
          </div>
        </div>
        <div>
          <label class="block mb-2" for="userTel">
            電話
          </label>
          <div class="flex gap-2 items-center">
            <input
              id="userTel"
              name="userTel"
              type="tel"
              {...register("userTel", { required: true })}
              class="form-control"
              placeholder="請輸入電話"
            />
            {errors.userTel && <span class="text-red flex-none">必填!</span>}
          </div>
        </div>
        <div>
          <label class="block mb-2" for="userEmail">
            Email
          </label>
          <div class="flex gap-2 items-center">
            <input
              id="userEmail"
              name="userEmail"
              type="email"
              {...register("userEmail", { required: true })}
              class="form-control"
              placeholder="請輸入Email"
            />
            {errors.userEmail && <span class="text-red flex-none">必填!</span>}
          </div>
        </div>
        <div>
          <label class="block mb-2" for="userAddress">
            寄送地址
          </label>
          <div class="flex gap-2 items-center">
            <input
              id="userAddress"
              name="userAddress"
              type="text"
              {...register("userAddress", { required: true })}
              class="form-control"
              placeholder="請輸入寄送地址"
            />
            {errors.userAddress && (
              <span class="text-red flex-none">必填!</span>
            )}
          </div>
        </div>
        <div>
          <label class="block mb-2" for="payment">
            付款方式
          </label>
          <select
            id="payment"
            name="payment"
            class="form-control"
          >
            <option value="ATM">ATM</option>
            <option value="creditCard">信用卡</option>
            <option value="ApplePay">Apple Pay</option>
          </select>
        </div>
        <button
          type="submit"
          class="w-10/12 rounded bg-black text-white grid place-content-center text-xl py-3 mx-auto transition duration-300 ease-in-out hover:bg-primary-dark"
        >
          送出預訂資料
        </button>
      </form>
    </section>
  );
}
