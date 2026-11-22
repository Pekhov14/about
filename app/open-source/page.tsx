"use client"

import type React from "react"
import {
    Chip,
    type ChipProps,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from "@nextui-org/react"
import { columns, projects } from "@/public/data/open-source"
import { GitPullRequest, GitMerge, XCircle, AlertCircle, Clock, CheckCircle, Calendar, ArrowUpRight } from "lucide-react"
import {Footer} from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const statusColorMap: Record<string, ChipProps["color"]> = {
    merged: "success",
    closed: "danger",
    open: "warning",
    draft: "primary",
    pending: "warning",
    failed: "danger",
    approved: "success",
}

const statusIconMap: Record<string, React.ReactNode> = {
    merged: <GitMerge className="w-3.5 h-3.5" />,
    closed: <XCircle className="w-3.5 h-3.5" />,
    open: <GitPullRequest className="w-3.5 h-3.5" />,
    draft: <AlertCircle className="w-3.5 h-3.5" />,
    pending: <Clock className="w-3.5 h-3.5" />,
    failed: <XCircle className="w-3.5 h-3.5" />,
    approved: <CheckCircle className="w-3.5 h-3.5" />,
}

const myProjects = [
    {
        id: 1,
        name: "elephant-php/ttl",
        projectUrl: "https://github.com/elephant-php/ttl",
        links: [
            {
                label: "GitHub",
                href: "https://github.com/elephant-php/ttl",
            },
            {
                label: "Packagist",
                href: "https://packagist.org/packages/elephant-php/ttl",
            },
        ],
        tags: ["library", "php", "cache"],
        description: "An immutable Time To Live value object for the cache and other places where you need to specify a time rather than a magic value. This my code from PR to yii/cache but like, a lib for other frameworks.",
    },
    {
        id: 2,
        name: "elephant-php/byte-size",
        projectUrl: "https://packagist.org/packages/elephant-php/byte-size",
        links: [
            {
                    label: "GitHub",
                    href: "https://github.com/elephant-php/byte-size",
            },
            {
                label: "Packagist",
                href: "https://packagist.org/packages/elephant-php/byte-size",
            },
        ],
        tags: ["library", "php", "utility"],
        description: "A small PHP library for byte size conversion and formatting.",
    },
    {
        id: 3,
        name: "elephant-php/duration",
        projectUrl: "https://packagist.org/packages/elephant-php/duration",
        links: [
            {
                    label: "GitHub",
                    href: "https://github.com/elephant-php/duration",
            },
            {
                label: "Packagist",
                href: "https://packagist.org/packages/elephant-php/duration",
            },
        ],
        tags: ["library", "php", "time"],
        description: "A small PHP library for representing elapsed time.",
    },
    {
        id: 4,
        name: "elephant-php/otp",
        projectUrl: "https://packagist.org/packages/elephant-php/otp",
        links: [
            {
                label: "GitHub",
                href: "https://github.com/elephant-php/otp",
            },
            {
                label: "Packagist",
                href: "https://packagist.org/packages/elephant-php/otp",
            },
        ],
        tags: ["code-generator", "otp", "php"],
        description: "A small PHP library for generating one-time passwords and random verification codes.",
    },
]

// Функция для парсинга даты (обрабатывает разные форматы)
function parseDate(dateString: string): Date {
    const normalizedDate = dateString
        .replace(/(\w+) (\d+),? (\d+)/, '$1 $2, $3')
        .replace(/(\w+) (\d+) (\d+)/, '$1 $2, $3');

    return new Date(normalizedDate);
}

const sortedProjects = [...projects].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
});

export default function OpenSourcePage() {
    return (
        <>
            <main className="min-h-screen bg-[var(--site-bg)] text-[var(--site-text)] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12">
                        <h1 className="text-4xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                            Open Source Contributions
                        </h1>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--site-muted)] sm:text-base">
                            My journey in contributing to the open source community
                        </p>
                    </div>

                    <div className="w-full rounded-2xl border border-[var(--site-border)] bg-[var(--site-panel)] shadow-sm overflow-hidden">
                        <Table
                            aria-label="Open source contributions table"
                            removeWrapper
                            classNames={{
                                base: "overflow-x-auto",
                                th: "bg-[var(--site-card)] text-[var(--site-text)] font-semibold border-b border-[var(--site-border)]",
                                td: "py-4 text-[var(--site-text)] border-b border-[var(--site-border)]",
                                tr: "hover:bg-[var(--site-card)]/50 transition-colors",
                            }}
                        >
                            <TableHeader columns={columns}>
                                {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
                            </TableHeader>
                            <TableBody items={sortedProjects}>
                                {(item) => (
                                    <TableRow key={item.id}>
                                        <TableCell className="font-medium text-[var(--site-text)]">{item.project}</TableCell>
                                        <TableCell>
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[var(--site-accent)] hover:opacity-80 underline underline-offset-4 transition-opacity font-medium"
                                            >
                                                View PR
                                            </a>
                                        </TableCell>
                                        <TableCell>
                                            <Chip
                                                color={statusColorMap[item.status.toLowerCase()]}
                                                variant="flat"
                                                startContent={statusIconMap[item.status.toLowerCase()]}
                                                className="font-medium"
                                                size="sm"
                                            >
                                                {item.status}
                                            </Chip>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2 text-[var(--site-muted)] whitespace-nowrap">
                                                <Calendar className="w-4 h-4" />
                                                {item.date}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-[var(--site-muted)] max-w-md min-w-[220px]">
                                            {item.description}
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>

                    <div className="mt-16 mb-8">
                        <h2 className="text-3xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-4xl text-[var(--site-text)]">
                            Personal Projects
                        </h2>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--site-muted)] sm:text-base">
                            A collection of open source packages and small tools I build and maintain.
                        </p>
                    </div>

                    <div className="w-full grid gap-4 md:grid-cols-2">
                        {myProjects.map((item) => (
                            <Card
                                key={`${item.name}-${item.id}`}
                                className="border-[var(--site-border)] bg-[var(--site-panel)] shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
                            >
                                <CardHeader className="space-y-3">
                                    <CardTitle className="text-xl leading-snug text-[var(--site-text)]">
                                        {item.projectUrl ? (
                                            <a
                                                href={item.projectUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 hover:text-[var(--site-accent)] transition-colors"
                                            >
                                                {item.name}
                                                <ArrowUpRight className="h-4 w-4 shrink-0" />
                                            </a>
                                        ) : (
                                            item.name
                                        )}
                                    </CardTitle>

                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map((tag) => (
                                            <span key={tag} className="inline-flex items-center rounded-full border border-[var(--site-border)] bg-[var(--site-card)] px-2.5 py-1 text-xs font-medium text-[var(--site-text)] capitalize">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <p className="text-sm leading-7 text-[var(--site-muted)]">
                                        {item.description}
                                    </p>

                                    {item.links.length > 0 && (
                                        <div className="flex flex-wrap gap-3">
                                            {item.links.map((link) => (
                                                <a
                                                    key={link.href}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--site-accent)] underline underline-offset-4 hover:opacity-80 transition-opacity"
                                                >
                                                    {link.label}
                                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}
