import React from 'react';

export default function Blog() {
  const blogPosts = [
    {
      title: "Getting Started with Web Development",
      brief: "A comprehensive guide for beginners looking to start their journey in web development. Learn about HTML, CSS, and JavaScript fundamentals.",
      slug: "getting-started-with-web-development",
      dateAdded: "2024-01-15T10:00:00Z",
      coverImage: require("../../assets/images/blog1.webp"),
      tags: [{ name: "WebDev" }, { name: "Programming" }, { name: "Beginners" }],
      readTime: 5
    },
    {
      title: "Debugging Techniques in JavaScript",
      brief: "Introduction Debugging is an essential skill for every JavaScript developer.",
      slug: "understanding-javascript",
      dateAdded: "2024-01-20T14:30:00Z",
      coverImage: require("../../assets/images/blog2.png"),
      tags: [{ name: "React" }, { name: "JavaScript" }, { name: "Frontend" }],
      readTime: 7
    },
  ];

  return (
    <div
      id="blog"
      className="min-h-screen flex flex-col justify-center text-center gap-8 md:gap-10 px-4 py-12 md:py-16"
    >
      <div
        className="font-extrabold py-5 mt-6 md:mt-10 text-4xl md:text-5xl text-white"
        data-aos="fade-down"
        data-aos-duration="600"
        data-aos-easing="ease-out-cubic"
      >
        Blogs   
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-2 md:px-4 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <div
            key={post.slug}
            className="glass-card glass-card-strong w-full sm:w-[calc(50%-1rem)] md:max-w-md rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-delay={index * 100}
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
          >
            {post.coverImage && (
              <img
                src={post.coverImage.default || post.coverImage}
                alt={post.title}
                className="w-full h-36 sm:h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-2 text-white">{post.title}</h2>
              <div className="flex justify-between items-center mb-4 text-gray-200 text-sm">
                <span>{new Date(post.dateAdded).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                <span>{post.readTime} min read</span>
              </div>
              <p className="text-gray-200 mb-4">{post.brief}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full text-sm"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => window.open(`https://gun03.hashnode.dev/${post.slug}`, '_blank')}
                className="mt-4 px-4 py-2 bg-blue-500/30 backdrop-blur-sm border border-blue-400 text-white rounded-lg hover:bg-blue-500/40 hover:border-blue-300 transition-colors"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
        <div
          className="glass-card glass-card-strong w-full sm:w-[calc(50%-1rem)] md:max-w-md rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-delay={blogPosts.length * 100}
          data-aos-duration="800"
          data-aos-easing="ease-out-cubic"
          onClick={() => window.open('https://gunhack.hashnode.dev/', '_blank')}
          style={{ cursor: 'pointer' }}
        >
          <div className="p-6 text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">View More Articles</h2>
            <p className="text-gray-200 mb-4">Explore more articles on my Hashnode blog</p>
            <button 
              className="px-6 py-3 bg-blue-500/30 backdrop-blur-sm border border-blue-400 text-white rounded-lg hover:bg-blue-500/40 hover:border-blue-300 transition-colors text-base md:text-lg font-semibold"
            >
              Visit Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}