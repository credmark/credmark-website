import Nav from "../layout/nav"

export default function Contact() {
    return (
        <>
            <div className="bg-credmarkpurple cmfBg w-screen">
                <Nav />
                <div className="max-w-xl block mx-auto pt-8 pb-24">
                    <h1 className="px-4 md:px-0 text-green leading-snug pb-3 text-center text-4xl">
                        Get in touch</h1>
                    <p className="px-4 md:px-0 text-white leading-snug text-center">
                        Have any business inquiries or questions about our data products? Contact us through this form and we’ll get back ASAP.
                        <br />
                        <br />
                        Or join our growing community of developers and quants on discord to learn how our API is being used.
                    </p>
                    {/* Begin Mailchimp Signup Form */}
                    <div className="flex-1 p-3 mt-10 large:pt-0">
                        <div className="p-8 lg:p-20 shadow-lg border-2 border-white" style={{ borderRadius: "20px" }}>
                            <div id="mc_embed_signup">
                                <form
                                    action="https://credmark.us19.list-manage.com/subscribe/post?u=b6dfe393113892a064b435044&amp;id=c295a3edd2&amp;f_id=00da92e4f0"
                                    method="post"
                                    id="mc-embedded-subscribe-form"
                                    name="mc-embedded-subscribe-form"
                                    className="validate"
                                    target="_blank"
                                    noValidate
                                >
                                    <div id="mc_embed_signup_scroll">
                                        <div className="mc-field-group">
                                            <label htmlFor="mce-FNAME" className="text-white">
                                                Your Name*
                                            </label>
                                            <input
                                                type="text"
                                                name="FNAME"
                                                className="required"
                                                id="mce-FNAME"
                                            />
                                        </div>
                                        <div className="mc-field-group">
                                            <label htmlFor="mce-EMAIL"  className="text-white">
                                                Email Address*
                                            </label>
                                            <input
                                                type="email"
                                                name="EMAIL"
                                                className="required email"
                                                id="mce-EMAIL"
                                            />
                                        </div>
                                        <div className="mc-field-group">
                                            <label htmlFor="mce-MESSAGE"  className="text-white">Message*</label>
                                            <textarea
                                                name="MESSAGE"
                                                id="mce-MESSAGE"
                                            />
                                        </div>
                                        <div id="mce-responses" className="clear">
                                            <div
                                                className="response"
                                                id="mce-error-response"
                                                style={{ display: "none" }}
                                            />
                                            <div
                                                className="response"
                                                id="mce-success-response"
                                                style={{ display: "none" }}
                                            />
                                        </div>
                                        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                                        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                                            <input
                                                type="text"
                                                name="b_c4c524692c8e5c32a51b6ca7c_f92bdfa3b1"
                                                tabIndex={-1}
                                            />
                                        </div>
                                        <div className="clear" style={{ textAlign: "right" }}>
                                            <input
                                                type="submit"
                                                defaultValue="Submit"
                                                name="subscribe"
                                                id="mc-embedded-subscribe"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}