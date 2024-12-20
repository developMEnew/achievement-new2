import { Card } from "@/components/ui/card";

interface ClipData {
  id: number;
  clipNumber: string;
  attributeCount: number;
}

interface ClipGroupProps {
  date: string;
  clips: ClipData[];
  total: number;
  showFix?: boolean;
}

export function ClipGroup({ date, clips, total, showFix }: ClipGroupProps) {
  return (
    <Card className="bg-gray-100 p-4 rounded-xl mb-4">
      <div className="text-sm text-gray-600 mb-3">{date}</div>
      
      {clips.map((clip) => (
        <div key={clip.id} className="flex items-center mb-2 last:mb-0">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm">
            {clip.id}
          </div>
          <div className="flex-1 mx-3">
            <div className="bg-white rounded-full px-4 py-2 text-sm">
              {clip.clipNumber}
            </div>
          </div>
          <div className="text-sm">{clip.attributeCount}</div>
        </div>
      ))}
      
      {showFix && (
        <div className="bg-emerald-200 rounded-full px-4 py-2 text-sm text-center my-3">
          FIX (-) 60
        </div>
      )}
      
      <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-200">
        <span className="text-sm font-medium">Total</span>
        <span className="text-sm">{total}</span>
      </div>
    </Card>
  );
}