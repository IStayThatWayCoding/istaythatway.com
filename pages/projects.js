import Layout from "../layout/layout";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <Layout title="My projects">
            <div className="flex flex-grow items-center">
                <div className="w-full">
                    <div className="container flex mx-auto justify-center">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                            <div className="text-center">
                                <h1 className="md:text-6xl text-3xl font-bold">
                                    My <span className="text-indigo-500">projects</span>
                                </h1>
                                <p className="text-gray-200 text-lg font-medium px-4">
                                    Featured & recent projects
                                </p>
                            </div>
                            {/* <div className="relative w-11/12 mx-auto overflow-auto">
                                <div className="absolute h-full w-full p-20 z-20">
                                    <div className="flex items-center justify-center h-full w-full p-4">
                                        <div className="text-center space-y-1">
                                            <h1 className="md:text-6xl text-3xl font-bold text-center">
                                                WORK IN PROGRESS
                                            </h1>
                                            {/* <p className="text-gray-200 italic text-lg">This page has been coming soon for a year hasn't it?</p> */}
                                        {/* </div>
                                    </div>
                                </div> */}
                                {/* <div className="w-full grid gap-20 grid-cols-1 md:grid-cols-2 blur md:p-16 p-4"> */}
                                    <div className="flex-grow space-y-2">
                                        <h1 className="text-3xl font-bold">Minecraft Madness</h1>
                                        <p className="text-gray-400 py- text-justify">
                                            Minecraft Madness is a Minecraft (Java Edition) event hosted by me! Like MCC or MCU, there are multiple games that are live streamed, and sometimes upload on YouTube. Click the link button to join the Discord server!
                                        </p>
                                        <div className="flex space-x-2">
                                            <a className="rounded-full" href="https://discord.com/invite/uqvZcAekWG" target="_blank">
                                                <svg className="h-8 w-8" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <title>Link</title>
                                                    <path d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z" />
                                                    <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z" />
                                                    <path d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <br>
                                    </br>
                                    <div className="flex-grow space-y-2">
                                        <h1 className="text-3xl font-bold">Aquasis</h1>
                                        <p className="text-gray-400 py- text-justify">
                                            Aquasis is a Discord Bot built for a content creator, "SwiftBlade"/"Oasis." It currently serves as replacing miscellaneous tasks! The github repository can be found by clicking the button below!
                                        </p>
                                        <p className="text-purple-300 py- text-justify">
                                            "I can't recommend "istay" enough! They did an incredible job developing and coding a Discord server bot for me. Seriously, their skills are top-notch. The bot they created is just amazing and it works to my needs. istay is not only talented but also super friendly and easy to work with. I'm beyond happy with the results and would definitely choose them again for any future projects :D" <br/><a href="https://discord.gg/RtsZcajWCR" target="_blank">- Oasis/Swiftblade (5/29/23)</a>
                                        </p>
        
                                        <div className="flex space-x-2">
                                            <a className="rounded-full" href="https://www.github.com/istaythatwaycoding/aquasis" target="_blank">
                                                <svg className="h-8 w-8" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <title>Link</title>
                                                    <path d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z" />
                                                    <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z" />
                                                    <path d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <br>
                                    </br>

                                    <br>
                                    </br>
                                    <div className="flex-grow space-y-2">
                                        <h1 className="text-3xl font-bold">Dream Hosting</h1>
                                        <p className="text-gray-400 py- text-justify">
                                            Dream Hosting is a fairly new server hosting company, owned by a good friend of IStay. You can check out everything on the Discord Server by clicking the <span className="text-white-200">white</span> link button below. You can also check out their website by clicking the <span className="text-indigo-200">purple</span> link button below!
                                        </p>
                                        <p className="text-purple-300 py- text-justify">
                                            CEO at Dream Hosting - "IStay has helped Dream Hosting with a few upgrades to the company over the course of this year. He has spent many hours coding/implementing a panel for Dream Hosting's users to access their servers. He has also set up a panel for the status of the computer hardware for Dream Hosting. He has been a good advertiser for the company as well with his Minecraft event called Minecraft Madness. He is knowledgeable and reliable."<br/><a href="https://discord.gg/EBJk36MkaY" target="_blank">- SuperPlaysGamer (8/10/23)</a>
                                        </p>
        
                                        <div className="flex space-x-2">
                                            <a className="rounded-full" href="https://discord.gg/EBJk36MkaY" target="_blank">
                                                <svg className="h-8 w-8" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <title>Link</title>
                                                    <path d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z" />
                                                    <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z" />
                                                    <path d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z" />
                                                </svg>
                                            </a>
                                            <a className="rounded-full" href="https://dream-hosting-llc.square.site" target="_blank">
                                                <svg className="h-8 w-8" fill="#5f407f" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <title>Link</title>
                                                    <path d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z" />
                                                    <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z" />
                                                    <path d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <br>
                                    </br>

                                    <div className="flex-grow space-y-2">
                                        <h1 className="text-3xl font-bold">IStay's Utilities Bot</h1>
                                        <p className="text-gray-400 py- text-justify">
                                            Used for my Discord server, IStay's Utilities is for moderation and other fun stuff! You can check out the github repo by clicking on the link button!
                                        </p>
                                        <div className="flex space-x-2">
                                            <a className="rounded-full" href="https://www.github.com/istaythatwaycoding/istays-utilities" target="_blank">
                                                <svg className="h-8 w-8" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <title>Link</title>
                                                    <path d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z" />
                                                    <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z" />
                                                    <path d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    
                                {/* </div>
                            </div> */}
                        </motion.div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
