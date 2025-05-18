import poster1 from "../assets/poster2.jpg";
import poster2 from "../assets/poster1.jpg";


const About = () => {
    return (
        <section id='about'>
            <div className="lg:px-40 md:px-20 px-10 w-full text-7xl font-medium roboto-serif-regular h-64 bg-stone-100 text-[#22227a] flex items-center">
                <h1>Arnifi Blogs 📝</h1>
            </div>

            {/* first content */}
            <div className="flex flex-col lg:flex-row md:flex-col  pt-16 mt-6 gap-4 lg:px-40 md:px-20 px-10">
                <div className="lg:w-1/2 md:w-full w-full mx-auto text-center my-auto">
                    <h2 className="text-2xl font-bold mb-4">Why Blogging Matters</h2>
                    <p className="text-gray-700 text-lg">
                        Blogging helps you <strong>share knowledge</strong>, <strong>build your identity</strong>, and <strong>connect with others</strong>.
                        It improves your communication skills, drives traffic, boosts visibility, and opens up personal and professional opportunities —
                        all while documenting your journey.
                    </p>
                </div>
                <figure className="flex lg:w-1/2 md:w-full w-full justify-center items-center">
                <img className="w-full rounded-2xl" src={poster1} alt="poster " /></figure>
            </div>

            {/* second content */}
            <div className="flex flex-col lg:flex-row md:flex-col pt-16 mt-6 gap-5 lg:px-40 md:px-20 px-10">
 <figure className="flex lg:w-1/2 md:w-full w-full justify-center items-center">                <img src={poster2} alt="poster" className="w-full rounded-2xl" /></figure>

                <div className="my-auto mx-auto text-center lg:w-1/2 md:w-full w-full">
                    <h2 className="text-3xl font-bold mb-4">Manage and Grow Your Blogs</h2>
                    <p className="text-lg text-gray-700">
                        Our platform gives you complete control over your blogging experience. Whether you're a casual writer or a content strategist, you can <strong>create</strong> new blog posts, <strong>read</strong> and share ideas, <strong>edit</strong> existing content, and <strong>delete</strong> outdated entries — all with ease.
                    </p>
                    <p className="mt-4 text-gray-600">
                        We’ve built a simple, intuitive dashboard that helps you organize, customize, and maintain your content seamlessly. From draft to publish, managing your blog has never been this efficient.
                    </p>
                    <p className="mt-4 text-gray-600">
                        Start sharing your voice, managing your posts, and building a content journey that grows with you.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default About