export function Testimonials() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Trusted by High-Growth Teams
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <TestimonialCard
                        quote="RecruiterAI didn't just find us more candidates; it found us the right ones. Our engineering team has never been stronger."
                        name="David Chen"
                        role="VP Eng, TechFlow"
                        avatarColor="bg-blue-200"
                    />
                    <TestimonialCard
                        quote="The automated screening feels human. It caught nuances in candidate experience that our previous ATS completely missed."
                        name="Sarah Jenkins"
                        role="Talent Director, Lumina"
                        avatarColor="bg-yellow-200"
                    />
                    <TestimonialCard
                        quote="We scaled our sales team from 10 to 50 in three months without increasing our HR headcount. Unbelievable results."
                        name="Marcus Thorne"
                        role="CEO, SwiftScale"
                        avatarColor="bg-green-200"
                    />
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ quote, name, role, avatarColor }: any) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="text-blue-100 text-6xl font-serif leading-none mb-4">"</div>
            <p className="text-gray-600 text-lg mb-8 italic flex-1 relative z-10 -mt-8">
                {quote}
            </p>

            <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${avatarColor} flex items-center justify-center text-gray-700 font-bold text-lg`}>
                    {name.charAt(0)}
                </div>
                <div>
                    <div className="font-bold text-gray-900">{name}</div>
                    <div className="text-sm text-primary font-medium">{role}</div>
                </div>
            </div>
        </div>
    )
}
