import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function SearchTab() {
  return (
    <ScrollArea className="h-full px-4 py-6">
      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input className="pl-9" placeholder="Search..." />
      </div>

      <div className="space-y-4">
        <div className="grid gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 bg-card rounded-lg"
            >
              <div className="w-16 h-16 bg-muted rounded-md" />
              <div>
                <h3 className="font-medium">Search Result {i}</h3>
                <p className="text-sm text-muted-foreground">
                  Description for search result {i}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}