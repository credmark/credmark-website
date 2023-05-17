export default function ClosingCta() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="rounded-md applicationsBg mt-16 py-5 lg:py-16 p-5 mx-2">
        <p className="max-w-sm mx-auto openSansMedium uppercase text-white text-center font-bold text-3xl pb-2 lg:pb-8">
          Access DeFi data instantly
        </p>
        <p className="text-center pb-8">
          Start with our free token API and explore the possibilities
        </p>
        <div className="flex justify-center">
          <button
            type="button"
            className="mx-2 lg:mx-0 text-black bg-green px-5 py-2 mb-10 shadow rounded-md"
          >
            <a
              href="https://access.credmark.com/register"
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-base">Sign up</p>
            </a>
          </button>
        </div>
      </div>

      <div className="rounded-md communityBoxBg mt-16 py-5 lg:py-16 p-5 mx-2">
        <p className="max-w-sm mx-auto openSansMedium uppercase text-credmarkpurple text-center font-bold text-3xl pb-2 lg:pb-8">
          Build with the community
        </p>
        <p className="text-center pb-8">
          Join our vibrant community of developers and modelers. Build faster
          together.
        </p>
        <div className="flex justify-center">
          <button
            type="button"
            className="mx-2 lg:mx-0 text-black bg-green px-5 py-2 mb-10 shadow rounded-md"
          >
            <a
              href="https://discord.com/invite/3dSfMqP3d4"
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-base">Join now</p>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
