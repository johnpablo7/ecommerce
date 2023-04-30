import { RiFacebookFill, RiTwitterFill, RiInstagramLine } from "react-icons/ri";

export const SocialNetworks = () => {
  return (
    <div className="flex items-center gap-4 text-2xl">
      <div className="border border-[#e5e7eb] hover:bg-[#e5e7eb] rounded-full p-[6px]">
        <RiFacebookFill />
      </div>
      <div className="border border-[#e5e7eb] hover:bg-[#e5e7eb] rounded-full p-[6px]">
        <RiTwitterFill />
      </div>
      <div className="border border-[#e5e7eb] hover:bg-[#e5e7eb] rounded-full p-[6px]">
        <RiInstagramLine />
      </div>
    </div>
  );
};
