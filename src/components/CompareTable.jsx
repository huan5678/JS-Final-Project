import {useEffect} from "react";

import { CheckIcon } from "./Icon";
import lax from 'lax.js';

export function CompareTable() {

  useEffect(() => {

    lax.init();

    lax.addDriver("scrollY", function () {
      return window.scrollY;
    });

    lax.addElements(".icon", {
      scrollY: {
        fadeIn: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 1, 0],
        ],
      },
    });
  },[])


  return (
    <section className="bg-gray-light pt-12 pb-16">
      <h2
        className="text-h2 text-center font-normal mb-8"
      >
        家具比較
      </h2>
      <table className="container text-center md:w-4/5 lg:w-2/3">
        <tbody>
          <tr className="border-b border-b-border">
            <th></th>
            <th className="text-xl font-normal pb-3">窩窩系統模組家具</th>
            <th className="text-xl font-normal text-gray-dark">組合式家具</th>
            <th className="text-xl font-normal text-gray-dark">實木家具</th>
          </tr>
          <tr className="border-b border-b-border">
            <th className="text-xl font-normal py-4">可單人自行組裝</th>
            <td className="grid place-content-center py-4">
              <CheckIcon className="text-primary h-10 w-10 icon" />
            </td>
            <td>不一定</td>
            <td></td>
          </tr>
          <tr className="border-b border-b-border">
            <th className="text-xl font-normal py-4">可多次重複拆裝</th>
            <td className="grid place-content-center py-4">
              <CheckIcon className="text-primary h-10 w-10" />
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr className="border-b border-b-border">
            <th className="text-xl font-normal py-4">床墊規格彈性大</th>
            <td className="grid place-content-center py-4">
              <CheckIcon className="text-primary h-10 w-10" />
            </td>
            <td>不一定</td>
            <td>不一定</td>
          </tr>
          <tr className="border-b border-b-border">
            <th className="text-xl font-normal py-4">材質可長久使用</th>
            <td className="grid place-content-center py-4">
              <CheckIcon className="text-primary h-10 w-10" />
            </td>
            <td className="w-1/3"></td>
            <td className="grid place-content-center py-4">
              <CheckIcon className="text-primary h-10 w-10" />
            </td>
          </tr>
          <tr className="border-b border-b-border">
            <th className="text-xl font-normal py-4">小客車即可搬運</th>
            <td className="grid place-content-center py-4">
              <CheckIcon className="text-primary h-10 w-10" />
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
