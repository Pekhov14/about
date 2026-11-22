"use client";

import React, {useState, useEffect} from "react";
import {Logo} from "@/components/ui/Logo";
import moment from "moment";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [lastUpdated, setLastUpdated] = useState('');

    useEffect(() => {
        fetch('/last-updated.json')
            .then(response => response.json())
            .then(data => {
                const formattedDate = moment(data.lastUpdated, "YYYY-MM-DD HH:mm:ss Z").format("MMMM DD, YYYY, hh:mm A z");
                setLastUpdated(formattedDate);
            })
            .catch(() => {});
    }, []);

    return (
        <footer className="section-footer px-4 sm:px-6 py-6">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="flex items-center gap-4">
                    <div className="shrink-0">
                        <Logo/>
                    </div>
                    <div className="text-sm text-[var(--site-muted)]">
                        <div className="font-medium text-[var(--site-text)]">© {currentYear} Anthony Pekhov</div>
                        <div>Made with love and Green Teas ❤️</div>
                    </div>
                </div>
                {lastUpdated ? (
                    <div className="text-xs text-[var(--site-muted)] text-center sm:text-right">
                        Last updated: {lastUpdated} EEST
                    </div>
                ) : null}
            </div>
        </footer>
    )
}

export {Footer}