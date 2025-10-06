import img1 from "../asset/img1.png"
import img2 from "../asset/img2.jpg"
import img3 from "../asset/img3.jpg"
import img4 from "../asset/img4.jpg"
export default function Info() {
    const cards = [
        {
            id: 1,
            img: img1,
            title: "A Resume Format That Gets You Interviews",
            text: "Get a professionally written, keyword-optimized resume that lands in recruiter inboxes.",
        },
        {
            id: 2,
            img: img2,
            title: "A Cover Letter Style That Stands Out Strong",
            text: "Stand out with a cover letter that speaks directly to the role and reflects your strengths.",
        },
        {
            id: 3,
            img: img3,
            title: "A LinkedIn Profile That Works For You",
            text: "Attract the right eyes, start conversations, and show up in recruiter searches.",
        },
        {
            id: 4,
            img: img4,
            title: "An Interview Strategy That Builds Confidence",
            text: "Interview preparation with real HR professionals so you speak clearly and confidently.",
        },
    ];

    return (
        <section className="flex flex-col items-center justify-center p-3 md:px-6 py-16 bg-white">
            {/* Section Title */}
            <p className="bg-red-100 text-red-700 px-6 py-2 rounded-md text-lg font-medium mb-4">
                What You Get
            </p>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl text-center font-semibold max-w-5xl leading-snug mb-12 ">
                You’re Not Just
                <span className="text-red-700 px-2">Another Applicant</span>
                And Your Resume Shouldn’t Look Like One
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl w-full p-5 md:p-0 ">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="bg-white  rounded-2xl p-6 flex gap-5 flex-col items-center text-center shadow-[0_0_20px_rgba(0,0,0,0.15)] hover:shadow-[0_0_40px_rgba(0,0,0,0.25) transition-shadow duration-300"
                    >   <img src={card.img} alt={card.img} className="w-60 h-60"/>
                        <h3 className="text-xl font-semibold text-gray-900 ">
                            {card.title}
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed">{card.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
