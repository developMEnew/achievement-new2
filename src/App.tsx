import { useState } from 'react';
import { Home, Eye, ListChecks, User } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/lib/auth';
import HomeTab from '@/components/tabs/HomeTab';
import ViewTab from '@/components/tabs/ViewTab';
import ManageTab from '@/components/tabs/ManageTab';
import ProfileTab from '@/components/tabs/ProfileTab';
import UserTab from '@/components/tabs/UserTab';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const { isAuthenticated } = useAuth();

  return (
    <div className="h-[100dvh] w-screen max-w-md mx-auto flex flex-col bg-background">
      <main className="flex-1 overflow-y-auto">
        {activeTab === 'home' && <HomeTab />}
        {activeTab === 'view' && isAuthenticated && <ViewTab />}
        {activeTab === 'manage' && isAuthenticated && <ManageTab />}
        {activeTab === 'profile' && isAuthenticated && <ProfileTab />}
        {activeTab === 'user' && <UserTab />}
      </main>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="fixed bottom-0 w-full max-w-md">
        <TabsList className="grid grid-cols-5 h-16 bg-background border-t">
          <TabsTrigger value="home" className="flex flex-col gap-1 data-[state=active]:text-primary">
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </TabsTrigger>
          <TabsTrigger 
            value="view" 
            disabled={!isAuthenticated}
            className="flex flex-col gap-1 data-[state=active]:text-primary"
          >
            <Eye className="h-5 w-5" />
            <span className="text-xs">View</span>
          </TabsTrigger>
          <TabsTrigger 
            value="manage"
            disabled={!isAuthenticated}
            className="flex flex-col gap-1 data-[state=active]:text-primary"
          >
            <ListChecks className="h-5 w-5" />
            <span className="text-xs">Manage</span>
          </TabsTrigger>
          <TabsTrigger 
            value="profile"
            disabled={!isAuthenticated}
            className="flex flex-col gap-1 data-[state=active]:text-primary"
          >
            <User className="h-5 w-5" />
            <span className="text-xs">Profile</span>
          </TabsTrigger>
          <TabsTrigger 
            value="user"
            className="flex flex-col gap-1 data-[state=active]:text-primary"
          >
            <User className="h-5 w-5" />
            <span className="text-xs">User</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}