import React from 'react';

const ForumPage = () => {
  // Static forum data
  const threads = [
    {
      id: 1,
      title: 'Best Football Cleats for Turf',
      content: 'What are the best football cleats for playing on turf? Any recommendations?',
      author: 'John Doe',
      date: 'October 10, 2023',
      replies: 12,
    },
    {
      id: 2,
      title: 'Tips for Improving Golf Swing',
      content: 'Looking for tips to improve my golf swing. Any advice from experienced players?',
      author: 'Jane Smith',
      date: 'October 12, 2023',
      replies: 8,
    },
    {
      id: 3,
      title: 'Yoga for Athletes',
      content: 'How can yoga benefit athletes? Share your experiences and routines.',
      author: 'Michael Brown',
      date: 'October 15, 2023',
      replies: 15,
    },
    {
      id: 4,
      title: 'Best Protein Supplements for Muscle Recovery',
      content: 'What are the best protein supplements for muscle recovery after intense workouts?',
      author: 'Sophia Lee',
      date: 'October 18, 2023',
      replies: 20,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Community Forum</h2>
      <div className="space-y-4">
        {threads.map((thread) => (
          <div key={thread.id} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-amber-600 mb-2">{thread.title}</h3>
            <p className="text-gray-600 mb-4">{thread.content}</p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                By {thread.author} | {thread.date} | {thread.replies} replies
              </div>
              <button className="text-blue-500 btn hover:underline">View Thread</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumPage;