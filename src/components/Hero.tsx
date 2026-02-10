export default function Hero() {
    return (
        <div className="bg-gray-100 py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p className="text-lg text-gray-700 mb-8">Discover my projects, skills, and experience in web development.</p>
                <a href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">View My Work</a>
            </div>
        </div>
    );
}