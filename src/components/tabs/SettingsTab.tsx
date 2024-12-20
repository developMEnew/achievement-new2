import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Switch } from '@/components/ui/switch';
import {
  ChevronRight,
  Bell,
  Shield,
  Smartphone,
  Moon,
  HelpCircle,
  LogOut,
} from 'lucide-react';

const settingsSections = [
  {
    icon: Bell,
    title: 'Notifications',
    description: 'Manage your notification preferences',
  },
  {
    icon: Shield,
    title: 'Privacy',
    description: 'Control your privacy settings',
  },
  {
    icon: Smartphone,
    title: 'Appearance',
    description: 'Customize your app experience',
  },
];

export default function SettingsTab() {
  return (
    <ScrollArea className="h-full px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="space-y-6">
        {/* Theme Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Moon className="h-5 w-5" />
            <div>
              <p className="font-medium">Dark Mode</p>
              <p className="text-sm text-muted-foreground">
                Toggle dark mode theme
              </p>
            </div>
          </div>
          <Switch />
        </div>

        <div className="space-y-4">
          {settingsSections.map((section, i) => {
            const Icon = section.icon;
            return (
              <Button
                key={i}
                variant="ghost"
                className="w-full justify-between h-auto py-4"
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  <div className="text-left">
                    <p className="font-medium">{section.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {section.description}
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5" />
              </Button>
            );
          })}
        </div>

        <div className="space-y-4 pt-4">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <HelpCircle className="h-5 w-5" />
            Help & Support
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 text-destructive"
          >
            <LogOut className="h-5 w-5" />
            Sign Out
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
}