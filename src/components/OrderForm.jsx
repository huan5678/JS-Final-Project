import {useForm} from 'react-hook-form';

export function OrderForm({ orderData, setOrderData }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));
  return (
    <section class="container pt-14 pb-20">
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
      <h2 class="text-center text-h2 mb-8">填寫預訂資料</h2>
      <form action="" class="space-y-5 md:w-1/2 mx-auto">
        <div>
          <label class="block mb-2" for="userName">
            姓名
          </label>
          <input
            id="userName"
            type="text"
            class="text-secondary rounded border border-secondary-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent py-2 px-3 w-full"
            placeholder="請輸入姓名"
          />
        </div>
        <div>
          <label class="block mb-2" for="userTel">
            電話
          </label>
          <input
            id="userTel"
            type="tel"
            class="text-secondary rounded border border-secondary-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent py-2 px-3 w-full"
            placeholder="請輸入電話"
          />
        </div>
        <div>
          <label class="block mb-2" for="userEmail">
            Email
          </label>
          <input
            id="userEmail"
            type="email"
            class="text-secondary rounded border border-secondary-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent py-2 px-3 w-full"
            placeholder="請輸入Email"
          />
        </div>
        <div>
          <label class="block mb-2" for="userAddress">
            寄送地址
          </label>
          <input
            id="userAddress"
            type="text"
            class="text-secondary rounded border border-secondary-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent py-2 px-3 w-full"
            placeholder="請輸入寄送地址"
          />
        </div>
        <div>
          <label class="block mb-2" for="payment">
            付款方式
          </label>
          <select
            id="payment"
            class="text-secondary rounded border border-secondary-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent py-2 px-3 w-full"
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
