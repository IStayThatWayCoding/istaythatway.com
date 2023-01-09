import {useState} from 'react';
import Link from "next/link";
import RomanNumerals from '../lib/romanNumerals';
import { siGithub, siDiscord, siTwitter, siInstagram } from 'simple-icons/icons';
import { Linkedin, Mail } from 'react-feather';

export default function Footer() {
    const initialDiscordText = 'istay#5154';
    const [discordText, setDiscordText] = useState(initialDiscordText);

    function handleDiscordClick() {
        navigator.clipboard.writeText("istay#5154").then(r => {
            setDiscordText('Copied to clipboard!');

            setTimeout(() => {
                setDiscordText(initialDiscordText);
            }, 1000);
        });
    }

    return (
        <>
            <footer className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <p className="text-xl">
                    © {RomanNumerals(new Date().getFullYear())}
                    {" "}
                    <Link href="/">
                        <a>IStayThatWay</a>
                    </Link>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-x-4 md:gap-2.5">
                    <a href="mailto:istay@istaythatway.xyz" className="text-gray-400">
                        <Mail className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/IStayThatWayCoding" className="text-gray-400" target="_blank" rel="noopener noreferrer">
                        <svg
                            fill="currentColor"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>{siGithub.title}</title>
                            <path d={siGithub.path} />
                        </svg>
                    </a>
                    <a href="https://dsc.gg/istay" className="text-gray-400" target="_blank" rel="noopener noreferrer">
                        <svg
                            fill="currentColor"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>{siDiscord.title}</title>
                            <path d={siDiscord.path} />
                        </svg>
                        <span className='tooltip bg-gray-800 text-white rounded shadow-lg p-1 -mt-14'>{discordText}</span>
                    </a>
                    <a href="https://twitter.com/IStayThatWay" className="text-gray-400" target="_blank" rel="noopener noreferrer">
                        <svg
                            fill="currentColor"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>{siTwitter.title}</title>
                            <path d={siTwitter.path} />
                        </svg>
                    </a>
                </span>
            </footer>
        </>
    )
}
