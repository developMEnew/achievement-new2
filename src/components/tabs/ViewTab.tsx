import { ScrollArea } from "@/components/ui/scroll-area";
import { ClipGroup } from "@/components/manage/ClipGroup";

const clipGroups = [
  {
    date: "December 16, 2024",
    clips: [
      { id: 1, clipNumber: "0006", attributeCount: 6789 },
      { id: 2, clipNumber: "0006", attributeCount: 6789 },
      { id: 3, clipNumber: "0006", attributeCount: 6789 },
    ],
    total: 16789,
  },
  {
    date: "December 16, 2024",
    clips: [
      { id: 4, clipNumber: "0006", attributeCount: 6789 },
      { id: 5, clipNumber: "0006", attributeCount: 6789 },
    ],
    total: 16789,
  },
  {
    date: "December 16, 2024",
    clips: [
      { id: 6, clipNumber: "0006", attributeCount: 6789 },
      { id: 47, clipNumber: "0006", attributeCount: 6789 },
    ],
    total: 16789,
    showFix: true,
  },
];

export default function ViewTab() {
  return (
    <ScrollArea className="h-full">
      <div className="p-4">
        {clipGroups.map((group, index) => (
          <ClipGroup
            key={index}
            date={group.date}
            clips={group.clips}
            total={group.total}
            showFix={group.showFix}
          />
        ))}
      </div>
    </ScrollArea>
  );
}