import cc from "classcat";
import type { VFC } from "react";

export const GameListTable: VFC = () => {
  return (
    <div
      className={cc([
        "w-full p-2 rounded-lg",
        "bg-white border border-gray-100",
        "dark:border-gray-500 dark:bg-gray-900 dark:bg-opacity-25"
      ])}
    >
      <table className="w-full divide-y">
        <thead>
          <tr>
            <th className="text-left font-light text-gray-300">Name</th>
            <th className="text-left font-light text-gray-300">Completion %</th>
            <th className="text-left font-light text-gray-300">Last Earned</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>asdfasdf</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
