import { Link } from "react-router-dom";

function EmailVerificationPage() {
  return (
    <>
      <div class="w-screen h-full">
        <div class="relative">
          <div class="px-4 font-Poppins py-6 mx-auto my-auto max-w-7xl md:max-h-2xl md:py-6">
            <h1 class="p-5 text-4xl text-center font-semibold text-black md:text-5xl">Verify your email</h1>
            <p class="pt-6 px-16 text-xl text-center tracking-wide text-gray-600 ">
              Meanwhile we'd love to have you get started right now, we still
              need you to verify your email. Once that's done, let the fun
              begin!
            </p>
            <button
              to="#"
              class="mx-auto font-normal my-16 text-center h-8 w-[460px] rounded-lg shadow-md p-1 flex justify-center hover:bg-green-500 content-center text-base text-white bg-green-600 hover:text-gray-100 "
            >
              Click here if you need a new email sent to you.
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailVerificationPage;
