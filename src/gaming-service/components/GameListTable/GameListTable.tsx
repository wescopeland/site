import cc from "classcat";
import type { FC, ReactNode } from "react";
import { HiCheckCircle } from "react-icons/hi";

interface GameListTableProps {
  children?: ReactNode;
}

export const GameListTable: FC<GameListTableProps> = () => {
  return (
    <div
      className={cc([
        "w-full p-4 rounded-lg !mt-2",
        "bg-white",
        "dark:bg-black dark:bg-opacity-30"
      ])}
    >
      <div
        className="grid divide-y divide-gray-900 gap-x-2 gap-y-4"
        role="table"
      >
        <div
          role="row"
          className="grid items-center text-gray-300"
          // eslint-disable-next-line sonarjs/no-duplicate-string
          style={{ gridTemplateColumns: "3fr repeat(3, 1fr)" }}
        >
          <div role="columnheader" aria-sort="none">
            Name
          </div>
          <div
            role="columnheader"
            aria-sort="none"
            className="flex justify-end"
          >
            Last Played
          </div>
          <div
            role="columnheader"
            aria-sort="none"
            className="flex justify-end"
          >
            Earned #
          </div>
          <div
            role="columnheader"
            aria-sort="none"
            className="flex justify-end"
          >
            Completed %
          </div>
        </div>

        <div
          role="row"
          className="grid items-center pt-4"
          style={{ gridTemplateColumns: "3fr repeat(3, 1fr)" }}
        >
          <TableCell>Mortal Kombat 11</TableCell>
          <TableCell end>Nov 24, 2021</TableCell>
          <TableCell end>
            42 of 59 <span className="text-sm text-lime-500">[A]</span>
          </TableCell>
          <TableCell end>
            <div className="flex flex-col items-end w-20">
              65.29%
              <div className="relative h-[3px] w-full bg-gray-700 rounded">
                <span className="absolute left-0 bg-gray-400 h-full w-[65.29%]" />
              </div>
            </div>
          </TableCell>
        </div>

        <div
          role="row"
          className="grid items-center pt-4"
          style={{ gridTemplateColumns: "3fr repeat(3, 1fr)" }}
        >
          <TableCell>
            <HiCheckCircle className="text-blue-500" /> GTA IV
          </TableCell>
          <TableCell end>Oct 13, 2021</TableCell>
          <TableCell end>
            70 of 70 <span className="text-sm text-blue-200">[S]</span>
          </TableCell>
          <TableCell end>
            <div className="flex flex-col items-end w-20">
              100.00%
              <div className="relative h-[3px] w-full bg-gray-700 rounded-3xl">
                <span className="absolute left-0 w-full h-full bg-gray-400" />
              </div>
            </div>
          </TableCell>
        </div>
      </div>
    </div>
  );
};

interface TableCellProps {
  children?: ReactNode;
  start?: boolean;
  center?: boolean;
  end?: boolean;
}

export const TableCell: FC<TableCellProps> = ({
  children,
  start,
  center,
  end
}) => {
  return (
    <span
      role="cell"
      className={cc([
        "flex items-center gap-x-1",
        start && "justify-start",
        center && "justify-center",
        end && "justify-end"
      ])}
    >
      {children}
    </span>
  );
};
