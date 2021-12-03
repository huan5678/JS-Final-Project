import { CheckIcon } from "./Icon";

export function CompareTable() {
  return (
    <section class="bg-gray-light pt-12 pb-16">
      <h2 class="text-h2 text-center font-normal mb-8">家具比較</h2>
      <table class="container text-center md:w-4/5 lg:w-2/3">
        <tbody>
          <tr class="border-b border-b-border">
            <th></th>
            <th class="text-xl font-normal pb-3">窩窩系統模組家具</th>
            <th class="text-xl font-normal text-gray-dark">組合式家具</th>
            <th class="text-xl font-normal text-gray-dark">實木家具</th>
          </tr>
          <tr class="border-b border-b-border">
            <th class="text-xl font-normal py-4">可單人自行組裝</th>
            <td class="grid place-content-center py-4">
              <CheckIcon class="text-primary h-10 w-10" />
            </td>
            <td>不一定</td>
            <td></td>
          </tr>
          <tr class="border-b border-b-border">
            <th class="text-xl font-normal py-4">可多次重複拆裝</th>
            <td class="grid place-content-center py-4">
              <CheckIcon class="text-primary h-10 w-10" />
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr class="border-b border-b-border">
            <th class="text-xl font-normal py-4">床墊規格彈性大</th>
            <td class="grid place-content-center py-4">
              <CheckIcon class="text-primary h-10 w-10" />
            </td>
            <td>不一定</td>
            <td>不一定</td>
          </tr>
          <tr class="border-b border-b-border">
            <th class="text-xl font-normal py-4">材質可長久使用</th>
            <td class="grid place-content-center py-4">
              <CheckIcon class="text-primary h-10 w-10" />
            </td>
            <td class="w-1/3"></td>
            <td class="grid place-content-center py-4">
              <CheckIcon class="text-primary h-10 w-10" />
            </td>
          </tr>
          <tr class="border-b border-b-border">
            <th class="text-xl font-normal py-4">小客車即可搬運</th>
            <td class="grid place-content-center py-4">
              <CheckIcon class="text-primary h-10 w-10" />
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
