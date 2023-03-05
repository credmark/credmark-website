import * as React from 'react';

export default function TrustedBy() {
    return (
        <>
            <div className="bg-white">
                <div className="px-5 py-10 md:pt-28">
                    <h2 className="text-black max-w-7xl block m-auto font-extrabold text-center">
                        TRUSTED BY
                    </h2>
                </div>
                <div className="max-w-4xl block m-auto">
                    <div className="grid grid-cols-1 m-auto block md:grid-cols-4 px-5 pb-0 md:pb-10">
                        <a href="https://www.yield.app/" target="_blank" rel="noreferrer"><img className="block mx-auto py-7" width={128} src="../assets/yieldapp-logo.svg" alt="Yield App logo" /></a>
                        <a href="https://picante.io/" target="_blank" rel="noreferrer"><img className="block mx-auto py-9" width={150} src="../assets/picante-logo.svg" alt="Picante logo" /></a>
                        <a href="https://exponent.cx/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5" width={194} src="../assets/exponent.jpeg" alt="Exponent logo" /></a>
                        <a href="https://docs.debtdao.finance/overview/what-is-debt-dao" target="_blank" rel="noreferrer"><img className="block mx-auto py-5 md:py-8" width={80} src="../assets/debt-dao-logo.png" alt="Debt dao logo" /></a>
                    </div>
                    <div className="max-w-5xl block m-auto grid grid-cols-1 m-auto block md:grid-cols-4 px-5 pb-10 md:pb-20 md:px-0">
                        <a href="https://www.chainml.net/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5 md:py-3" width={214} src="../assets/chainml-logo.svg" alt="ChainML logo" /></a>
                        <a href="https://www.snowflake.com/en/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5 md:py-0" width={148} src="../assets/snowflake-logo.svg" alt="Snowflake logo" /></a>
                        <a href="https://rose.ai/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5 md:py-3" width={150} src="../assets/roseAI-logo.svg" alt="roseAI logo" /></a>
                        <a href="https://api3.org/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5 md:py-2" width={138} src="../assets/API3-logo.svg" alt="API3 logo" /></a>
                    </div>
                    <div className="max-w-5xl block m-auto grid grid-cols-1 m-auto block md:grid-cols-4 px-5 pb-10 md:pb-20 md:px-0">
                        <a href="https://coinshift.xyz/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5" width={150} src="../assets/Coinshift.svg" alt="Coinshift logo" /></a>
                        <a href="https://dlab.vc/" target="_blank" rel="noreferrer"><img className="py-5 block mx-auto md:py-0" width={130} src="../assets/dlab-logo.svg" alt="DLAB logo" /></a>
                        <a href="https://www.longhash.com/en" target="_blank" rel="noreferrer"><img className="block mx-auto py-5" width={150} src="../assets/longhash-logo.svg" alt="Long Hash Ventures logo" /></a>
                        <a href="https://irulast.com/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5" width={130} src="../assets/irulast-logo.svg" alt="Irulast logo" /></a>
                    </div>
                </div>
            </div>
        </>
    );
}

