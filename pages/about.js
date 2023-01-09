import Layout from "../layout/layout";
import { motion } from "framer-motion";

export default function About() {
const currentColor = '4F46E5'
    return (
        <Layout title="About me">
            <div className="flex flex-grow items-center">
                <div className="w-full">
                    <div className="container flex mx-auto justify-center">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                            <h1 className="text-center md:text-6xl text-3xl font-bold">
                                About <span className="text-indigo-500">me</span>
                            </h1>
                            <div className="container lg:w-3/5 w-11/12 mx-auto mt-4">
                                <div className="text-left md:text-justify space-y-6 text-lg font-medium text-gray-200">
                                    <p>
                                        Hey there! My name is Justin AKA IStay from the US. I am a young highschooler who likes program in multiple coding languages and environments. I create content on <span className="text-indigo-200">twitch</span> and <span className="text-indigo-200">youtube</span>. I have always wanted to make content for years and hopefully be able to have youtube and twitch as a job! Consider checking out my social medias and hangout with me!
                                    </p>
                                    <div className="space-y-2">
                                        <p>
                                            Here are the programs/languages that I use:
                                        </p>
                                        <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                                            <img alt="Javascript" src={ `https://img.shields.io/badge/-Javascript-18181b?style=for-the-badge&logo=javascript&logoColor=${currentColor}` } />
                                            <img alt="HTML5" src={ `https://img.shields.io/badge/-HTML5-18181b?style=for-the-badge&logo=html5&logoColor=${currentColor}` } />
                                            <img alt="React" src={ `https://img.shields.io/badge/-React-18181b?style=for-the-badge&logo=react&logoColor=${currentColor}` } />
                                            <img alt="Next.js" src={ `https://img.shields.io/badge/-Next.js-18181b?style=for-the-badge&logo=next.js&logoColor=${currentColor}` } />
                                            <img alt="Git" src={ `https://img.shields.io/badge/-Git-18181b?style=for-the-badge&logo=git&logoColor=${currentColor}` } />
                                            <img alt="Heroku" src={ `https://img.shields.io/badge/-Heroku-18181b?style=for-the-badge&logo=heroku&logoColor=${currentColor}` } />
                                            </div>
                                        
                                    </div>
                                    </div>
                                    </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

// logoColor=4F46E5 FOR NORMAL BRANDING