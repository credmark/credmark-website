import AdvisorCard from "../layout/advisorCard";
import CenteredHeader from "../layout/centeredHeader";
import Footer from "../layout/footer";
import Menu from "../filters/Menu";
import Link from "next/link";

export default function Team() {
  return (
    <>
      <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none bg-white">
        <div className="blogGradient rounded-md">
          <CenteredHeader
            title="Contributors"
            description="Our team is distributed across the globe"
          />
          <div className="px-5 py-10 md:px-10 max-w-5xl block m-auto">
            <h3 className="text-center md:text-left text-black py-5 text-3xl text-4xl md:text-5xl pb-0 md:pt-10">
              Core Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 pb-10 gap-12 px-10 md:px-0">
              <Menu
                category="Team"
                img="../assets/paul.png"
                alt="Paul Murphy"
                name="Paul Murphy"
                title="CEO"
                twitter="https://twitter.com/prmurphy"
                linkedin="https://www.linkedin.com/in/prmurphy/"
              />
              <Menu
                category="Team"
                img="../assets/vineet-kumar.jpeg"
                alt="Vineet Kumar"
                name="Vineet Kumar"
                title="CTO"
                twitter="https://twitter.com/v1nvn"
                linkedin="https://www.linkedin.com/in/v1nvn/"
              />
              <div className="box col-xs">
                <div id="team" className="md:py-10">
                  <div>
                    <div className="rounded-full img-hover">
                      <img
                        className="text-center bio-photo"
                        src="../assets/kunlun-yang.jpg"
                        alt="Kunlun Yang"
                      />
                      <div className="overlay relative"></div>
                    </div>
                    <div>
                      <p className="text-black font-bold pt-2.5 pb-0 text-center text-base">
                        Kunlun Yang
                      </p>
                      <p className="text-black pb-5 pt-0 text-center text-base">
                        Senior Quant
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="advisorBg">
            <div className="px-5 py-10 md:px-10 max-w-5xl block m-auto">
              <h3 className="text-center md:text-left text-black py-5 text-3xl text-4xl md:text-5xl pb-0 md:pt-10">
                Advisors
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 pb-10 gap-12 px-10 md:px-0">
                {/* <div className="grid grid-cols-1 md:grid-cols-2 block m-auto max-w-4xl"> */}
                <AdvisorCard
                  img="../assets/jonah.png"
                  alt="Jonah Lau"
                  name="Jonah Lau"
                  linkedin="https://www.linkedin.com/in/jonathanlauhk/"
                  twitter="https://twitter.com/thejonahlau"
                />
                {/* </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 block m-auto"> */}

                <AdvisorCard
                  img="../assets/heiki.png"
                  alt="Heikki Vanttinen"
                  name="Heikki Vanttinen"
                  linkedin="https://www.linkedin.com/in/heikki-v%C3%A4nttinen-83a86380/"
                  twitter="https://twitter.com/API3DAO"
                />
                <AdvisorCard
                  img="../assets/alberto.png"
                  alt="Alberto Ornaghi"
                  name="Alberto Ornaghi"
                  linkedin="https://www.linkedin.com/in/albertoornaghi/"
                  twitter="https://twitter.com/AlbertoOrnaghi"
                />
                <AdvisorCard
                  category="Team"
                  img="../assets/neil-resized.png"
                  alt="Neil Zumwalde"
                  name="Neil Zumwalde"
                  twitter="https://twitter.com/neilzum"
                  linkedin="https://www.linkedin.com/in/neilzumwalde/"
                />
                <div className="box col-xs">
                  <div id="team" className="md:py-10">
                    <div>
                      <div className="rounded-full img-hover">
                        <img
                          className="text-center bio-photo"
                          height={240}
                          width={240}
                          src="../assets/serge.png"
                          alt="Serge Ugarte"
                        />
                        <div className="overlayAdvisors relative">
                          <div className="socialButtons flex justify-center">
                            <a
                              href="https://www.linkedin.com/in/serge-ugarte/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill="#ffff"
                                  d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-black font-bold pt-2.5 pb-0 text-center text-base">
                          Serge Ugarte
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-20 md:py-0">
            <h4 className="text-3xl text-black font-light text-center md:pt-32 pb-9">
              Looking to de-risk DeFi together?
            </h4>
            <div className="flex justify-center">
              <Link href="/careers">
                <button
                  type="button"
                  className="font-medium inline-flex items-center md:mb-32 px-7 py-3 shadow-sm text-sm leading-1 rounded-md text-credmarkpurple bg-green"
                >
                  See open positions
                </button>
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
