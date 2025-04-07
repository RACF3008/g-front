import StatsCard from "@/components/StatsCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
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
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3">R</div>
    </div>
  );
};

export default AdminPage;
