import type { ReactNode } from "react";

export const Icon = ({ children }: { children: ReactNode }) => {
  return <span aria-hidden="true" className="text-[19px] leading-none">{children}</span>;
};
