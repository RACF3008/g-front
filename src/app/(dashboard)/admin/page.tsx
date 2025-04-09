import StatsCard from '@/components/StatsCard';
import CountChart from '@/components/CountChart';

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* STATS CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <StatsCard
            title="Devices"
            date="01/01/2099"
            stat="12"
            color="bg-greenAccent-400"
          />
          <StatsCard
            title="Tasks"
            date="01/01/2099"
            stat="24"
            color="bg-orangeAccent-400"
          />
          <StatsCard
            title="Warnings"
            date="01/01/2099"
            stat="2"
            color="bg-yellowAccent-400"
          />
          <StatsCard
            title="Alerts"
            date="01/01/2099"
            stat="1"
            color="bg-redAccent-400"
          />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHARTS */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* BAR CHARTS */}
          <div className="w-full lg:w-2/3 h-[450px]">R</div>
        </div>
        {/* BOTTOM CHARTS */}
        <div className="">R</div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3">R</div>
    </div>
  );
};

export default AdminPage;
