import Link from "next/link";

export default function CtaTwo() {
    return (
        <>
            <section className="relative z-5" style={{paddingTop:"50px"}}>
                <div className="container">
                    <div className="relative rounded-16">
                        <div className="absolute-full-center z--1">
                            <div className="bg-image rounded-16 js-lazy loaded" style={{ backgroundImage: 'url("/img/home-2/footer/cta.png")' }} />
                        </div>

                        <div className="py-50 px-64">
                            <div className="row y-gap-32 justify-between items-center">
                                <div className="col-auto">
                                    <h3 className="SectionSubheading lh-15 text-white">Discover Your Perfect Coating Solution Today!</h3>
                                </div>
                                <div className="col-auto">
                                    <Link href="/contact" className="button -md -white rounded-8 text-accent SectionDesc">Click here
                                        </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}