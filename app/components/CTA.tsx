import { Button } from './Button';

export function CTA() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="bg-primary rounded-[2.5rem] p-12 md:p-24 text-center shadow-2xl overflow-hidden relative">
                    <div className="relative z-10">
                        <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-6">
                            Ready to Hire <br />
                            Better, Faster?
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-blue-100 mb-10">
                            Join 5,000+ forward-thinking companies using RecruiterAI to build world-class teams.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="bg-white text-primary hover:bg-gray-50 border-0 w-full sm:w-auto">
                                Start Free Trial
                            </Button>
                            <Button size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white/10 w-full sm:w-auto">
                                Schedule Demo
                            </Button>
                        </div>
                    </div>

                    {/* Subtle background glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
