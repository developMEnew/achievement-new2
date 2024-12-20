import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function DeleteClipForm() {
  return (
    <div className="mt-8 bg-gray-100 p-6 rounded-lg space-y-4">
      <h3 className="font-medium">DELETE</h3>
      
      <div>
        <label className="text-sm text-gray-600 block mb-1">Select Number</label>
        <div className="flex gap-2">
          <div className="bg-red-500 text-white px-3 py-1 rounded text-sm">
            47
          </div>
        </div>
      </div>

      <Button variant="destructive" className="w-full">
        DELETE
      </Button>
    </div>
  );
}