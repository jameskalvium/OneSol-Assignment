import { Zap, Calendar, DollarSign } from 'lucide-react';

export function Impact() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Proven Results
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Real impact measured across 5,000+ deployments.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card 1 */}
                    <ImpactCard
                        icon={Zap}
                        stat="10x"
                        label="Faster Screening"
                        desc="From hours to minutes per role. Zero quality loss."
                        metric="+1000% Efficiency Gain"
                        color="text-green-600"
                        iconBg="bg-blue-100 text-blue-600"
                    />

                    {/* Card 2 */}
                    <ImpactCard
                        icon={Calendar}
                        stat="70%"
                        label="Lower Time-to-Hire"
                        desc="Fill roles in 12 days instead of the industry-average 45."
                        metric="-32 Days Saved / Role"
                        color="text-green-600"
                        iconBg="bg-purple-100 text-purple-600"
                    />

                    {/* Card 3 */}
                    <ImpactCard
                        icon={DollarSign}
                        stat="45%"
                        label="Cost Reduction"
                        desc="Slash agency fees and internal overhead significantly."
                        metric="Save $4,200 Per Hire"
                        color="text-green-600"
                        iconBg="bg-green-100 text-green-600"
                    />
                </div>
            </div>
        </section>
    );
}

function ImpactCard({ icon: Icon, stat, label, desc, metric, color, iconBg }: any) {
    return (
        <div className="bg-blue-50/50 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${iconBg}`}>
                <Icon size={24} />
            </div>
            <div className="text-5xl font-extrabold text-primary mb-2">{stat}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{label}</h3>
            <p className="text-gray-600 mb-6">{desc}</p>
            <div className={`flex items-center gap-2 text-sm font-bold ${color}`}>
                {/* Simple trend arrow icon inline */}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {metric}
            </div>
        </div>
    )
}
