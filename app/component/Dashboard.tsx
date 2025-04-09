'use client';

const Dashboard = () => {
  return (
    <div className="w-full h-[600px] my-8 rounded-xl overflow-hidden border border-zinc-700 shadow-lg">
      <iframe
        src="https://thingsboard.cloud/dashboards/1d36e060-135c-11f0-863b-f730addc68ba?publicId=1d36e060-135c-11f0-863b-f730addc68ba"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Dashboard;