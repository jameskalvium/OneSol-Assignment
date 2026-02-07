export function Brands() {
    return (
        <section className="bg-white py-12 border-t border-gray-100">
            <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900">Post Once, Reach Everywhere</h3>
                <p className="text-gray-500 text-sm">Direct integrations with the tools your team already uses.</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
                    <BrandLogo name="LinkedIn" />
                    <BrandLogo name="Indeed" />
                    <BrandLogo name="Glassdoor" />
                    <BrandLogo name="GitHub" />
                    <BrandLogo name="Wellfound" />
                    <BrandLogo name="ZipRecruiter" />
                    {/* Duplicate for seamless loop */}
                    <BrandLogo name="LinkedIn" />
                    <BrandLogo name="Indeed" />
                    <BrandLogo name="Glassdoor" />
                    <BrandLogo name="GitHub" />
                    <BrandLogo name="Wellfound" />
                    <BrandLogo name="ZipRecruiter" />
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 px-8 ml-full">
                    <BrandLogo name="LinkedIn" />
                    <BrandLogo name="Indeed" />
                    <BrandLogo name="Glassdoor" />
                    <BrandLogo name="GitHub" />
                    <BrandLogo name="Wellfound" />
                    <BrandLogo name="ZipRecruiter" />
                </div>
            </div>
        </section>
    );
}

function BrandLogo({ name }: { name: string }) {
    // Using simple text placeholders for logos with heavy styling to mimic brand logos
    // In a real project, we would use SVGs
    return (
        <div className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors cursor-pointer group">
            <div className="text-2xl font-bold font-sans opacity-60 group-hover:opacity-100">{name}</div>
        </div>
    )
}
