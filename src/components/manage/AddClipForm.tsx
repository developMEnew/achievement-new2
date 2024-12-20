import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function AddClipForm() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Add New Clip</h2>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-gray-600 block mb-1">Clip Number</label>
          <Input type="text" placeholder="0006" className="bg-gray-200" />
        </div>
        
        <div>
          <label className="text-sm text-gray-600 block mb-1">Attribute Count</label>
          <Input type="number" placeholder="6789" className="bg-gray-200" />
        </div>
        
        <div>
          <label className="text-sm text-gray-600 block mb-1">For</label>
          <div className="flex gap-2">
            <Input 
              type="text"
              placeholder="December 16, 2024"
              className="bg-gray-200"
            />
            <Button variant="outline" size="icon">
              <Calendar className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Button className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300">
        Add
      </Button>
    </div>
  );
}