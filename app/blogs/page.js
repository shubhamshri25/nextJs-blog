async function getBlogs() {
  try {
    const res = await fetch("http://localhost:3000/api/get-blogs", {
      method: "GET",
      cache: "no-store",
    });

    const result = await res.json();

    return result?.blogs;
  } catch (error) {
    throw new Error(error);
  }
}

const Blogs = async () => {
  const blogList = await getBlogs();
  // console.log(blogList);
  return <div>Blogs</div>;
};

export default Blogs;
