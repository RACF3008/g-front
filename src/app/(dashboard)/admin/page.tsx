import StatsCard from "@/components/StatsCard";
import MyBarChart from "@/components/BarChart";
import MyRadialChart from "@/components/RadialChart";
import MyLineChart from "@/components/LineChart";
import MyCalendar from "@/components/Calendar";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* STATS CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <StatsCard title="Devices" date="01/01/2099" stat="24" />
          <StatsCard title="Hives" date="01/01/2099" stat="3" />
          <StatsCard title="Errors" date="01/01/2099" stat="2" />
          <StatsCard title="Alerts" date="01/01/2099" stat="1" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col xl:flex-row">
          {/* RADIAL CHART */}
          <div className="w-full xl:w-1/3 h-[450px]">
            <MyRadialChart />
          </div>
          {/* BAR CHART */}
          <div className="w-full xl:w-2/3 h-[450px]">
            <MyBarChart />
          </div>
        </div>
        {/* BOTTOM CHARTS */}
        <div className="w-full h-[500px]">
          <MyLineChart />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <MyCalendar />
      </div>
    </div>
  );
};

export default AdminPage;
