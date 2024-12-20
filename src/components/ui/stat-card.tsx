interface StatCardProps {
  label: string;
  value: string | number;
  subLabel?: string;
}

export function StatCard({ label, value, subLabel }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
      {subLabel && <p className="text-xs text-gray-400 mt-1">{subLabel}</p>}
    </div>
  );
}