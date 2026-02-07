'use client';
import { HelpCircle, FileText, RefreshCw, CheckCircle, XCircle, Search, Users, MessageSquare } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function HowItWorks() {
    return (
        <section className="bg-primary py-24 text-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
                        AI Recruiting Software That Works Like Your Own HR Team
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-blue-100">
                        Build custom hiring workflows in minutes. No coding required.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Card 1: Screening */}
                    <FlowCard
                        title="Screening & Scheduling"
                        desc="Screen 250+ apps in mins"
                        icon={Search}
                        delay={0}
                        nodes={[
                            { text: "New Application", type: "rect", color: "bg-white text-gray-900" },
                            { text: "AI Skill Extraction", type: "rect", color: "bg-blue-200 text-blue-900" },
                            { text: "Qualified?", type: "diamond", icon: HelpCircle },
                            { text: "Match (90%+) | Archive", type: "split" }
                        ]}
                    />

                    {/* Card 2: Interview */}
                    <FlowCard
                        title="Interview Automation"
                        desc="Reduce time-to-hire to 12 days"
                        icon={Users}
                        delay={200}
                        nodes={[
                            { text: "Schedule Call", type: "rect", color: "bg-white text-gray-900" },
                            { text: "AI Interview", type: "rect", color: "bg-purple-200 text-purple-900" },
                            { text: "Score > 8/10?", type: "diamond", icon: FileText },
                            { text: "Hiring Manager", type: "rect", color: "bg-green-200 text-green-900" }
                        ]}
                    />

                    {/* Card 3: Re-engagement */}
                    <FlowCard
                        title="Re-engagement"
                        desc="Build talent pipeline automatically"
                        icon={MessageSquare}
                        delay={400}
                        nodes={[
                            { text: "Silver Medalists", type: "rect", color: "bg-white text-gray-900" },
                            { text: "Auto-Engagement", type: "rect", color: "bg-indigo-200 text-indigo-900" },
                            { text: "Interested?", type: "diamond", icon: RefreshCw },
                            { text: "New Role Match", type: "rect", color: "bg-pink-200 text-pink-900" }
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}

function FlowCard({ title, desc, icon: Icon, nodes, delay }: { title: string, desc: string, icon: any, nodes: any[], delay: number }) {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className={`bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 flex flex-col h-full hover:bg-white/15 hover:-translate-y-2 hover:shadow-2xl transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/20 rounded-lg">
                    <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white leading-tight">{title}</h3>
                    <p className="text-xs text-blue-100">{desc}</p>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center space-y-3 relative">
                {nodes.map((node, i) => (
                    <div
                        key={i}
                        className={`flex flex-col items-center w-full relative z-10 transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        style={{ transitionDelay: `${delay + (i * 300)}ms` }}
                    >
                        {/* Connector Line */}
                        {i > 0 && <div className="h-4 w-0.5 bg-white/40 my-1"></div>}

                        {/* Node */}
                        {node.type === 'rect' && (
                            <div className={`w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold shadow-lg ${node.color}`}>
                                {node.text}
                            </div>
                        )}
                        {node.type === 'diamond' && (
                            <div className="relative w-10 h-10 flex items-center justify-center my-1 group">
                                <div className="absolute inset-0 bg-[#5B95F5] rotate-45 rounded-sm border-2 border-white/30 shadow-lg transition-transform group-hover:scale-110"></div>
                                <div className="relative z-10 text-white">
                                    {node.icon ? <node.icon size={18} /> : node.text}
                                </div>
                            </div>
                        )}
                        {node.type === 'split' && (
                            <div className="flex w-full gap-2 mt-1">
                                <div className="flex-1 bg-green-400 py-2 rounded-lg text-[10px] font-bold text-center shadow-lg text-gray-900 flex items-center justify-center gap-1">
                                    <CheckCircle size={10} /> Match
                                </div>
                                <div className="flex-1 bg-red-400 py-2 rounded-lg text-[10px] font-bold text-center shadow-lg text-white flex items-center justify-center gap-1">
                                    <XCircle size={10} /> Archive
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
