import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Camera, Edit, MapPin, Link as LinkIcon } from 'lucide-react';

export default function ProfileTab() {
  return (
    <ScrollArea className="h-full">
      {/* Cover Photo */}
      <div className="relative h-32 bg-muted">
        <Button
          size="icon"
          variant="secondary"
          className="absolute bottom-4 right-4"
        >
          <Camera className="h-4 w-4" />
        </Button>
      </div>

      {/* Profile Info */}
      <div className="px-4">
        <div className="relative -mt-12 mb-4">
          <Avatar className="h-24 w-24 border-4 border-background">
            <AvatarImage src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Button
            size="icon"
            variant="secondary"
            className="absolute bottom-0 right-0"
          >
            <Edit className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Jane Doe</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <LinkIcon className="h-4 w-4" />
            <a href="#" className="text-sm text-primary">
              jane.design
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">1.5K</div>
              <div className="text-xs text-muted-foreground">Followers</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">420</div>
              <div className="text-xs text-muted-foreground">Following</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">128</div>
              <div className="text-xs text-muted-foreground">Posts</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}