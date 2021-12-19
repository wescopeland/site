import type { VFC } from "react";

export const AppFooter: VFC = () => {
  return (
    <div className="flex text-sm mb-20 justify-between flex-col sm:flex-row">
      <p>
        <strong>Wes Copeland</strong> © 2021 &ndash; Present.
      </p>

      <p>Made with ❤️ in Boston</p>
    </div>
  );
};
