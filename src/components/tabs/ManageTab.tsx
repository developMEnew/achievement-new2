import { ScrollArea } from "@/components/ui/scroll-area";
import { AddClipForm } from "@/components/manage/AddClipForm";
import { DeleteClipForm } from "@/components/manage/DeleteClipForm";

export default function ManageTab() {
  return (
    <ScrollArea className="h-full">
      <div className="p-6">
        <AddClipForm />
        <DeleteClipForm />
      </div>
    </ScrollArea>
  );
}