export default function Media() {
    return (
        <main className="max-w-full flex-1 overflow-y-auto focus:outline-none rounded-4xl bg-white">
            <div>
            <h1 className="font-extrabold uppercase text-center py-5 text-5xl md:text-7xl md:pt-16">
                            CRYPTO
                            <br></br>
                            CREDIT
                            <br></br>
                            REPORT
                        </h1>
                        <p className="text-center py-5 text-base px-10 md:px-48">
                        Archive of Credmark&apos;s quarterly reports - definitive aggregate insights on the state of the cryptop credit industry.
                        </p>
                <div className="grid grid-cols-1 xl:grid-cols-2 md:p-10 lg:pt-16 lg:px-40 2xl:pt-16">
                    <div className="text-center">
                    <p className="text-2xl font-bold">2020</p>
                        <a href="https://s3.amazonaws.com/reports.credmark.com/TheCryptoCreditReport-Q4-2020.pdf" target="_blank" rel="noreferrer"><p className="py-1.5">Year End Report</p></a>
                        <a href="https://s3.amazonaws.com/reports.credmark.com/TheCryptoCreditReport-Q3-2020.pdf" target="_blank" rel="noreferrer"><p className="py-1.5">Q3 Report</p></a>
                        <a href="https://s3.amazonaws.com/reports.credmark.com/TheCryptoCreditReport-Q2-2020.pdf" target="_blank" rel="noreferrer"><p className="py-1.5">Q2 Report</p></a>
                        <a href="https://s3.amazonaws.com/reports.credmark.com/TheCryptoCreditReport-Q1-2020.pdf" target="_blank" rel="noreferrer"><p className="py-1.5">Q1 Report</p></a>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl pt-10 md:pt-0 font-bold">2019</p>
                        <a href="https://s3.amazonaws.com/reports.credmark.com/TheCryptoCreditReport-Q4-2019.pdf" target="_blank" rel="noreferrer"><p className="py-1.5">Year End Report</p></a>
                        <a href="https://s3.amazonaws.com/reports.credmark.com/TheCryptoCreditReport-Q3-2019.pdf" target="_blank" rel="noreferrer"><p className="py-1.5">Q3 Report</p></a>
                        <a href="https://s3.amazonaws.com/reports.credmark.com/TheCryptoCreditReport-Q2-2019.pdf" target="_blank" rel="noreferrer"><p className="py-1.5">Q2 Report</p></a>
                    </div>
                    </div>
                    <div>
                        <img className="pb-0" id="whitepaper" src="/assets/sky.png" alt="Credmark White Paper"></img>
                    </div>
            </div>
        </main>
    )
}