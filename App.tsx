import React from 'react';
import ChatInterface from './components/ChatInterface';
import { BuddyIcon, UserIcon } from './components/Icons';

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary-500 rounded-full">
            <BuddyIcon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-primary-600 dark:text-primary-400">
            Smart Study Buddy
          </h1>
        </div>
        <div className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full">
            <UserIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
      </header>
      <main className="flex-1 overflow-hidden">
        <ChatInterface />
      </main>
    </div>
  );
};

export default App;
