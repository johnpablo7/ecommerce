import { HomeViewList } from "../shared-filter/HomeViewList";

import { Size } from "../shared-filter/Size";
import { Color } from "../shared-filter/Color";
import { RangeSlider } from "../shared-filter/RangeSlider";
import { SelectCategory } from "../shared-filter/SelectCategory";
import { SelectBrand } from "../shared-filter/SelectBrand";

export const FilterProducts = () => {
  return (
    <div className="flex flex-col">
      <HomeViewList />
      <div className="px-4 pt-8 pb-4 border border-white shadow-md text-secondary">
        <SelectCategory />
        <SelectBrand />
        <RangeSlider />
        <Size />
        <Color />
      </div>
    </div>
  );
};
