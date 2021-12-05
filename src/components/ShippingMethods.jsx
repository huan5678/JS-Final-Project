export function ShippingMethods() {
  return (
    <section class="container pt-8 mb-18 space-y-8">
      <h2 class="text-h2 text-center">運送方式</h2>
      <div class="flex justify-center items-center">
        <div class="text-center">
          <div class="h-28 w-28 border-3 border-black rounded-full grid place-content-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </div>
          <h3>STEP.1</h3>
          <p>選購商品</p>
        </div>
        <div class="p-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="h-5 w-5 -translate-y-7"
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
        </div>
        <div class="text-center">
          <div class="h-28 w-28 border-3 border-black rounded-full grid place-content-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="h-12 w-12"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          </div>
          <h3>STEP.2</h3>
          <p>填寫預定資料</p>
        </div>
        <div class="p-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="h-5 w-5 -translate-y-7"
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
        </div>
        <div class="text-center">
          <div class="h-28 w-28 border-3 border-black rounded-full grid place-content-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="h-12 w-12"
              viewBox="0 0 16 16"
            >
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </svg>
          </div>
          <h3>STEP.3</h3>
          <p>預定成功</p>
        </div>
        <div class="p-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="h-5 w-5 -translate-y-7"
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
        </div>
        <div class="text-center">
          <div class="h-28 w-28 border-3 border-black rounded-full grid place-content-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <h3>STEP.4</h3>
          <p>Email 付款資訊</p>
        </div>
      </div>
    </section>
  );
}
