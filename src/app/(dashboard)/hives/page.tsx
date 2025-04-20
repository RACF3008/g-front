import Search from "@/components/Search";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import AddIcon from "@mui/icons-material/Add";

import FilterListIcon from "@mui/icons-material/FilterList";
import Pagination from "@/components/Pagination";

const Hives = () => {
  return (
    <div className="bg-primary-600 p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold text-primary-100">
          All Hives
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <Search />
          <div className="flex items-center gap-4 self-end">
            <button className="bg-yellowAccent-500 w-8 h-8 p-1 flex items-center justify-center rounded-full text-primary-600">
              <FilterListIcon />
            </button>
            <button className="bg-yellowAccent-500 w-8 h-8 p-1 flex items-center justify-center rounded-full text-primary-600">
              <SwapVertIcon />
            </button>
            <button className="bg-yellowAccent-500 w-8 h-8 p-1 flex items-center justify-center rounded-full text-primary-600">
              <AddIcon />
            </button>
          </div>
        </div>
      </div>
      {/* HIVES */}
      <div className=""></div>
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default Hives;
