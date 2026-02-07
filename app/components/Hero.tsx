import { Button } from './Button';

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-white pt-20 pb-32 lg:pt-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                {/* Main Content */}
                <div className="mx-auto max-w-2xl relative z-20">
                    <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl mb-8">
                        Every Hire, <br className="hidden sm:block" />
                        <span className="text-primary">Faster</span> and <span className="text-primary">Better</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-xl text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
                        Stop losing great candidates to slow, manual hiring processes. Let AI handle the heavy
                        lifting while you focus on building your team.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="w-full sm:w-auto">
                            Start Hiring Smarter
                        </Button>
                        <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                            See How It Works
                        </Button>
                    </div>
                </div>

                {/* Floating Cards (Hidden on mobile/tablet, visible on desktop) */}
                <div className="hidden xl:block absolute inset-0 pointer-events-none z-10">
                    {/* Card 1: Sarah K (Top Left) */}
                    <div className="absolute top-[8%] left-0 animate-float-slow">
                        <FloatingCard
                            quote="I need to clone myself to screen all these applicants properly."
                            name="Sarah K."
                            role="Founder"
                            initial="SK"
                            bubbleColor="bg-pink-50 text-pink-800"
                            rotation="rotate-[-6deg]"
                        />
                    </div>

                    {/* Card 2: Rahul M (Top Right) */}
                    <div className="absolute top-[15%] right-0 animate-float-medium">
                        <FloatingCard
                            quote="Why is scheduling interviews taking longer than the interviews?"
                            name="Rahul M."
                            role="Hiring Manager"
                            initial="RM"
                            bubbleColor="bg-blue-50 text-blue-800"
                            rotation="rotate-[6deg]"
                        />
                    </div>

                    {/* Card 3: Priya S (Bottom Left) */}
                    <div className="absolute bottom-[10%] left-[2%] animate-float-fast">
                        <FloatingCard
                            quote="We're losing top talent because our process is too slow."
                            name="Priya S."
                            role="CEO"
                            initial="PS"
                            bubbleColor="bg-purple-50 text-purple-800"
                            rotation="rotate-[-3deg]"
                        />
                    </div>

                    {/* Card 4: Amit T (Bottom Right) */}
                    <div className="absolute bottom-[12%] right-[2%] animate-float-slow transition-delay-500">
                        <FloatingCard
                            quote="Sifting through resumes manually is killing my productivity."
                            name="Amit T."
                            role="Head of HR"
                            initial="AT"
                            bubbleColor="bg-orange-50 text-orange-800"
                            rotation="rotate-[3deg]"
                        />
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </section>
    );
}

function FloatingCard({ quote, name, role, initial, bubbleColor, rotation }: { quote: string, name: string, role: string, initial: string, bubbleColor: string, rotation: string }) {
    return (
        <div className={`bg-white p-3 rounded-2xl shadow-xl border border-gray-100 max-w-[240px] transform hover:scale-105 transition-transform duration-300 pointer-events-auto ${rotation}`}>
            <div className="flex items-center gap-3 mb-2">
                {/* Placeholder Avatar */}
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xs">
                    {initial}
                </div>
                <div className="text-left">
                    <p className="text-xs font-bold text-gray-900">{name}</p>
                    <p className="text-[9px] text-gray-500 uppercase">{role}</p>
                </div>
            </div>
            <div className={`p-3 rounded-xl rounded-tl-none text-xs font-medium leading-relaxed ${bubbleColor}`}>
                "{quote}"
            </div>
        </div>
    )
}
