

const SignIn = () => {
    return (
        <section class="">
        <div class=" bg-[#05397A] h-screen">      
            <main
            class="flex items-center justify-center px-8 py-8 h-screen"
            >
                <div class="max-w-xl lg:max-w-3xl bg-white min-w-[50vw] px-3 py-14 lg:min-w-[30vw] lg:px-10">
                    <div class="relative block ">

                    <h1
                        class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl text-center mb-4"
                    >
                        Create Account
                    </h1>
                    </div>
                    <div class="relative block ">

                    <p
                        class="mt-2 text-gray-900 text-center mb-4"
                    >
                        Create Your New Account
                    </p>
                    </div>

                    <form action="#" class="">                

                    <div class="mb-2">
                        <label for="Email" class="block text-sm font-medium text-gray-700">
                        Email
                        </label>

                        <input
                        type="email"
                        id="Email"
                        name="email"
                        class="mt-1 w-full rounded-md border-gray-200 bg-gray-200 text-sm text-black shadow-sm py-2"
                        />
                    </div>

                    <div class="mb-2">
                        <label
                        for="Password"
                        class="block text-sm font-medium text-gray-700"
                        >
                        Password
                        </label>

                        <input
                        type="password"
                        id="Password"
                        name="password"
                        class="mt-1 w-full rounded-md border-gray-200 bg-gray-200 text-sm text-black shadow-sm py-2"
                        />
                    </div>

                    <div class="col-span-6">
                        <label for="MarketingAccept" class="flex gap-4">
                        <input
                            type="checkbox"
                            id="MarketingAccept"
                            name="marketing_accept"
                            class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                        />

                        <span class="text-sm text-gray-700">
                            Remember Me
                        </span>
                        </label>
                    </div>


                    <div class="">
                        <button
                        class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 w-full text-center my-4"
                        >
                        Login In
                        </button>
                    </div>

                    {/* <div className="bg-black h-[1px] w-full"></div> */}
                    <div class="relative block w-full">

                        <p
                            class="mt-2 text-gray-900 text-center min-w-full block my-2"
                        >
                            Or log in with
                        </p>
                    </div>
                    <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                        <button
                        class="inline-block shrink-0 rounded-md border border-blue-600 px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 w-full"
                        >
                        Google
                        </button>
                    </div>
                    <h4 className="text-center my-2">New account yet? Sign Up</h4>
                    </form>
                </div>
            </main>
        </div>
    </section>
    )
}

export default SignIn;
