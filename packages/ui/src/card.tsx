import { type ReactNode } from "react";
import venmoLogo from "./venmoLogo";

export function Card({
  title,
  buttonPlaceholder1,
  placeholder,
  buttonPlaceholder2
}: {
  title: string;
  buttonPlaceholder1: string;
  placeholder: string;
  buttonPlaceholder2: string;
}): JSX.Element {
  return (
    <div className="ui-h-screen ui-flex ui-items-center ui-justify-center">
      <div className="ui-border-2 ui-rounded-lg ui-p-16 ui-w-4/12">
        <div className="ui-mb-10 ui-flex ui-justify-center"><img src={venmoLogo()} alt="Venmo" width={100} /></div>
        <div className="ui-text-2xl ui-flex ui-justify-center ui-mb-10">{title}</div>
        <div className="ui-flex ui-justify-center"><input className="max-w-screen-2xl ui-border-2 ui-p-3 focus:ui-outline-none ui-w-full ui-rounded-md" placeholder={placeholder} /></div>
        <div className="ui-text-sm ui-flex ui-justify-center">
          <button className="ui-rounded-full ui-bg-[#0074DE] ui-text-lg ui-mt-4 ui-text-white ui-w-full ui-py-2 hover:ui-bg-[#045CB2]">{buttonPlaceholder1}</button>
        </div>
        <div className="ui-text-sm ui-flex ui-justify-center">
          <button className="ui-border-[1px] ui-rounded-full ui-text-[#0074DE] ui-text-lg ui-mt-2 ui-w-full ui-py-2 ui-border-[#0074DE] hover:ui-bg-[#0074DE] hover:ui-text-white hover:ui-duration-300">{buttonPlaceholder2}</button>
        </div>
      </div>
    </div>
  );
}
