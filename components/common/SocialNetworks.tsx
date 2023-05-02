import clsx from "clsx";
import { FC } from "react";
import { RiFacebookFill, RiTwitterFill, RiInstagramLine } from "react-icons/ri";

type SocialNetworksProps = {
  mode?: "gray" | "colors";
};

export const SocialNetworks: FC<SocialNetworksProps> = ({ mode = "gray" }) => {
  return (
    <div className="flex items-center gap-4 text-xl lg:text-2xl">
      <div
        className={clsx("border rounded-full p-[6px]", {
          "border-[#e5e7eb] hover:bg-[#e5e7eb]": mode === "gray",
          "bg-[#3b5998] text-white": mode === "colors",
        })}
      >
        <RiFacebookFill />
      </div>

      <div
        className={clsx("border rounded-full p-[6px]", {
          "border-[#e5e7eb] hover:bg-[#e5e7eb]": mode === "gray",
          "bg-[#00acee] text-white": mode === "colors",
        })}
      >
        <RiTwitterFill />
      </div>

      <div
        className={clsx("border rounded-full p-[6px]", {
          "border-[#e5e7eb] hover:bg-[#e5e7eb]": mode === "gray",
          "bg-[#d53982] text-white": mode === "colors",
        })}
      >
        <RiInstagramLine />
      </div>
    </div>
  );
};
