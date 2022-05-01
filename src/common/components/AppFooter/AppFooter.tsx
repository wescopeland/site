import type { FC } from "react";

export const AppFooter: FC = () => {
  return (
    <div className="flex flex-col justify-between mb-20 text-sm sm:flex-row">
      <p>
        <strong>Wes Copeland</strong> © 2021 &ndash; Present.
      </p>

      <p>Made with ❤️ in Boston</p>
    </div>
  );
};
