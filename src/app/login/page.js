import Link from 'next/link'
import Image from 'next/image';
import GoogleSVG from '../../../public/google_icon.svg';

export default function login() {
    return (
        <main className="flex min-h-screen">
            {/* form */}
            <section className="flex flex-1 justify-center items-center">
                <div className="flex flex-col min-w-[80%] lg:min-w-[360px]">
                    <figure className='mb-20'>
                        <img src="/wanclouds_logo.svg"></img>
                        <figcaption></figcaption>
                    </figure>

                    <div className='mb-8'>
                        <h1 className='mb-3 text-gray-900'>Log in</h1>
                        <h4 className='text text-gray-500'>Welcome back! Please enter your details.</h4>
                    </div>

                    <form>
                        <div className="flex flex-col mb-5">
                            <label for="email" class="block mb-1.5 text-sm font-medium text-gray-700">Email address</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" required></input>
                        </div>

                        <div className="flex flex-col mb-6">
                            <label for="password" class="block mb-1.5 text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3" placeholder="•••••••••" required></input>
                        </div>

                        <div className='flex justify-between items-center mb-6 text-xs'>
                            <div class="flex items-center">
                                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"></input>
                                <label for="default-checkbox" class="ml-2 font-medium text-gray-900">Remember for 30 days</label>
                            </div>

                            <Link href="/">
                                <span className='text-primary'>Forgot Password?</span>
                            </Link>
                        </div>
                        
                        <div className='flex flex-col mb-8'>
                            <button type="button" class="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4 focus:outline-none">Sign In</button>

                            <button type="button" class="text-gray-700 border border-gray-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none flex gap-3 justify-center items-center">
                                <Image src={GoogleSVG} alt="Google Icon" />
                                Sign in with Google
                            </button>
                        </div>
                        
                    </form>

                    <div>
                        <p className='text-center text-xs text-gray-500'>Don't have an account? <Link href="/">
                            <span className='font font-medium text-primary'>Sign up</span></Link>
                        </p>
                    </div>
                </div>
            </section>

            {/* slider */}
            <section className="justify-center items-center flex-1 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] hidden lg:flex relative before:content-login_bg before:absolute before:top-0 before:right-0 after:content-login_bg after:absolute after:bottom-[-25%] after:left-0 overflow-hidden">
                <div>
                    <figure className='z-10 relative'>
                        <img src="/login_img.png"></img>
                        <figcaption></figcaption>
                    </figure>

                    <div className='text-white text-center'>
                        <h5>Welcome to our new dashboard</h5>
                        <p className='text-primary-200'>Sign in to explore changes we've made.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
