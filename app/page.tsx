export default function LandingPage() {
    return (
        <>
            <div className="container mx-auto my-4 md:px-72">
                {/* NAVIGATION */}
                {/* CONTENT */}
                <div className="flex items-center space-x-4 my-4">
                    <img
                        src="https://via.placeholder.com/80"
                        alt="Robbe"
                        className="w-20 h-20 rounded-full border-2 border-gray-300"
                    />
                    <div>
                        <h1 className="font-bold text-2xl">Hey! 👋</h1>
                        <p className="font-extralight">My name is <u>Robbe</u>, nice to meet you!</p>
                    </div>
                </div>

                <h2 className="font-bold text-xl">🧑‍💻 About me</h2>
                <p>I'm a young, passionate developer who doesn't fear a challenge. I don't limit myself to one tech-stack and keep myself up to date by working on side-projects in my free time.</p>
            </div>
        </>
    )
}