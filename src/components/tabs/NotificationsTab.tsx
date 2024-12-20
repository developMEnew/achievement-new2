import { ScrollArea } from '@/components/ui/scroll-area';
import { Bell, MessageSquare, Heart, Star } from 'lucide-react';

const notifications = [
  {
    icon: MessageSquare,
    title: 'New Message',
    description: 'You have a new message from Sarah',
    time: '2m ago',
  },
  {
    icon: Heart,
    title: 'New Like',
    description: 'John liked your post',
    time: '15m ago',
  },
  {
    icon: Star,
    title: 'New Feature',
    description: 'Check out our latest update',
    time: '1h ago',
  },
  {
    icon: Bell,
    title: 'Reminder',
    description: 'Your meeting starts in 30 minutes',
    time: '2h ago',
  },
];

export default function NotificationsTab() {
  return (
    <ScrollArea className="h-full px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>
      
      <div className="space-y-4">
        {notifications.map((notification, i) => {
          const Icon = notification.icon;
          return (
            <div
              key={i}
              className="flex items-start gap-4 p-4 bg-card rounded-lg"
            >
              <div className="p-2 bg-primary/10 rounded-full">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{notification.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
                <span className="text-xs text-muted-foreground">
                  {notification.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
}