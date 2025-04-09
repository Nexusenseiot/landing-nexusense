// app/components/Dashboard.tsx
'use client';

export default function Dashboard() {
  return (
    <div className="w-full h-[600px] mt-6">
      <iframe
        src="https://thingsboard.cloud/dashboards/1d36e060-135c-11f0-863b-f730addc68ba?publicId=1d36e060-135c-11f0-863b-f730addc68ba"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        allowFullScreen
      ></iframe>
    </div>
  );
}
