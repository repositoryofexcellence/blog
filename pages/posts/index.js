import AllPosts from "../../components/home-page/posts/all-posts";
const DUMMY_POSTS = [
    {
        slug:"getting-started-with-nextjs",
        title:"Getting Started with NextJS",
        image:"getting-started-nextjs.png",
        excerpt:"NextJS is a React framework for production - it makes building fullstack React App",
        date:"2022-02-10"
    },
    {
        slug:"getting-started-with-nextjs",
        title:"Getting Started with NextJS1",
        image:"nextjs-file-based-routing.png",
        excerpt:"NextJS is a React framework for production - it makes building fullstack React App",
        date:"2022-02-10"
    },
];
function AllPostsPage() {
    return(
        <AllPosts posts={DUMMY_POSTS}/>
    )
}

export default AllPostsPage;