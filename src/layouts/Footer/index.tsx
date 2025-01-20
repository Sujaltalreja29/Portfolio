"use client";

import { useRouter, usePathname } from "next/navigation";
import { Label, Switch } from "@src/components/ui";
import { NextLink } from "@src/components/common";
import { GithubIcon, LinkedinIcon, EmailIcon } from "@src/icons";

export default function Footer() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <footer className="h-footer flex cursor-default items-center bg-primary-300 text-white">
            <div className="container flex items-center justify-center text-sm">
                <div className="flex items-center gap-2.5">
                    <NextLink
                        href="https://github.com/Sujaltalreja29"
                        title="Github"
                    >
                        <GithubIcon className="h-8 w-8 fill-white transition hover:fill-primary-100" />
                    </NextLink>
                    <NextLink
                        href="https://www.linkedin.com/in/sujal-talreja/"
                        title="Linkedin"
                    >
                        <LinkedinIcon className="h-8 w-8 fill-white transition hover:fill-primary-100" />
                    </NextLink>
                    <NextLink
                        href="mailto:sujaltlrj@gmail.com"
                        title="Email"
                    >
                        <EmailIcon className="h-8 w-8 fill-white transition hover:fill-primary-100" />
                    </NextLink>
                </div>
            </div>
        </footer>
    );
}
