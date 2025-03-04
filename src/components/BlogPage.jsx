import React from 'react';

const BlogPage = () => {
  // Static blog data
  const blogs = [
    {
      id: 1,
      title: 'Top 5 Exercises to Improve Your Basketball Skills',
      summary: 'Learn the best exercises to enhance your basketball performance and agility.',
      image: 'https://i.postimg.cc/1RJFbkdC/111.jpg',
      author: 'John Doe',
      date: 'October 10, 2023',
    },
    {
      id: 2,
      title: 'How to Choose the Right Running Shoes for Marathon Training',
      summary: 'A complete guide to selecting the perfect running shoes for long-distance running.',
      image: 'https://i.postimg.cc/4xtm4q8T/222.jpg',
      author: 'Jane Smith',
      date: 'October 12, 2023',
    },
    {
      id: 3,
      title: 'The Ultimate Guide to Maintaining Your Tennis Racket',
      summary: 'Keep your tennis racket in top condition with these maintenance tips.',
      image: 'https://i.postimg.cc/0Nsrzn3K/333.jpg',
      author: 'Michael Brown',
      date: 'October 15, 2023',
    },
    {
      id: 4,
      title: '10 Must-Have Gym Accessories for Beginners',
      summary: 'Discover the essential gym accessories every beginner should have.',
      image: 'https://i.postimg.cc/tgNJWPQS/444.jpg',
      author: 'Sophia Lee',
      date: 'October 18, 2023',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Sports Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl text-blue-300 font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.summary}</p>
              <div className="text-sm text-gray-500">
                By {blog.author} | {blog.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;