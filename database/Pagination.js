const mongoose = require('mongoose');
const Blog = require('./models/Blog'); // assume Blog model exists

async function getPaginatedBlogs(page = 1, limit = 10) {
  const blogs = await Blog.find({})
    .skip((page - 1) * limit)
    .limit(limit);
  return blogs;
}

getPaginatedBlogs().then(blogs => console.log('Paginated Blogs:', blogs));
