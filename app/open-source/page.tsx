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
        id: 3,
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
        tags: ["code-generator", "otpone-time-password", "verification-code", "one-time-code", "random-code", "php"],
        description: "A small PHP library for generating one-time passwords and random verification codes.",
    },
]

// Функция для парсинга даты (обрабатывает разные форматы)
function parseDate(dateString: string): Date {
    // Заменяем возможные варианты разделителей и приводим к стандартному формату
    const normalizedDate = dateString
        .replace(/(\w+) (\d+),? (\d+)/, '$1 $2, $3') // "Jun 29, 2024" -> "Jun 29, 2024"
        .replace(/(\w+) (\d+) (\d+)/, '$1 $2, $3');  // "Oct 2 2025" -> "Oct 2, 2025"

    return new Date(normalizedDate);
}

// Сортируем проекты по дате (от новых к старым)
const sortedProjects = [...projects].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime(); // Новые первыми
});

export default function OpenSourcePage() {
    return (
        <>
            <section className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-16 bg-gradient-to-b from-background to-muted/20">
            <div className="text-center mb-12 space-y-4 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text">
                    Open Source Contributions
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl">
                    My journey in contributing to the open source community
                </p>
            </div>

            <div className="w-full max-w-6xl bg-card rounded-xl shadow-lg border border-border overflow-hidden">
                <Table
                    aria-label="Open source contributions table"
                    classNames={{
                        wrapper: "shadow-none",
                        th: "bg-muted/50 text-foreground font-semibold",
                        td: "py-4",
                    }}
                >
                    <TableHeader columns={columns}>
                        {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
                    </TableHeader>
                    <TableBody items={sortedProjects}>
                        {(item) => (
                            <TableRow key={item.id} className="hover:bg-muted/30 transition-colors">
                                <TableCell className="font-medium">{item.project}</TableCell>
                                <TableCell>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors font-medium"
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
                                        size="lg"
                                    >
                                        {item.status}
                                    </Chip>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Calendar className="w-4 h-4" />
                                        {item.date}
                                    </div>
                                </TableCell>
                                <TableCell className="text-muted-foreground max-w-md">
                                    {item.description}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="text-center mt-16 mb-8 space-y-4 max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text">
                    Personal Projects
                </h2>
                <p className="text-muted-foreground text-lg">
                    A collection of open source packages and small tools I build and maintain.
                </p>
            </div>

            <div className="w-full max-w-5xl grid gap-6 md:grid-cols-2">
                {myProjects.map((item) => (
                    <Card
                        key={item.id}
                        className="border-border/70 bg-card/95 shadow-lg transition-transform duration-200 hover:-translate-y-1"
                    >
                        <CardHeader className="space-y-4">
                            <div className="flex items-start justify-between gap-4">
                                <CardTitle className="text-xl leading-snug">
                                    {item.projectUrl ? (
                                        <a
                                            href={item.projectUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
                                        >
                                            {item.name}
                                            <ArrowUpRight className="h-4 w-4 shrink-0" />
                                        </a>
                                    ) : (
                                        item.name
                                    )}
                                </CardTitle>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag) => (
                                    <Chip key={tag} size="sm" variant="flat" className="capitalize">
                                        {tag}
                                    </Chip>
                                ))}
                            </div>
                        </CardHeader>

                        <CardContent className="space-y-5">
                            <p className="text-sm leading-6 text-muted-foreground">
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
                                            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
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
        </section>
            <Footer/>
        </>
    )
}
