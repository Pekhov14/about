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
import { GitPullRequest, GitMerge, XCircle, AlertCircle, Clock, CheckCircle } from "lucide-react"

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


const myProjectsColumns = [
    { name: "Project", uid: "project" },
    { name: "Links", uid: "links" },
    { name: "Description", uid: "description" },
]

const myProjects = [
    {
        id: 1,
        project: "elephant-php/vo-ttl",
        github: "https://github.com/elephant-php/vo-ttl",
        packagist: "https://packagist.org/packages/elephant-php/vo-ttl",
        description: "Immutable Value Object for Time To Live (TTL). This code from PR to yii/cache but like, a lib for other frameworks.",
    },
]

export default function OpenSourcePage() {
    return (
        <section className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-16 bg-gradient-to-b from-background to-muted/20">
            <div className="text-center mb-12 space-y-4 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text">
                    Open Source Contributions
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl">
                    My journey in contributing to the open source community
                </p>
            </div>

            <div className="w-full max-w-5xl bg-card rounded-xl shadow-lg border border-border overflow-hidden">
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
                    <TableBody items={projects}>
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
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="text-center mb-12 space-y-4 max-w-3xl pt-10">
                <p className="text-muted-foreground text-lg md:text-xl">
                    My personal open source projects.
                </p>
            </div>

            <div className="w-full max-w-5xl bg-card rounded-xl shadow-lg border border-border overflow-hidden">
                <Table
                    aria-label="My open source projects table"
                    classNames={{
                        wrapper: "shadow-none",
                        th: "bg-muted/50 text-foreground font-semibold",
                        td: "py-4",
                    }}
                >
                    <TableHeader columns={myProjectsColumns}>
                        {(column) => (
                            <TableColumn key={column.uid}>{column.name}</TableColumn>
                        )}
                    </TableHeader>
                    <TableBody items={myProjects}>
                        {(item) => (
                            <TableRow
                                key={item.id}
                                className="hover:bg-muted/30 transition-colors"
                            >
                                <TableCell className="font-medium" width="160">
                                    {item.project}
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col space-y-1">
                                        <a
                                            href={item.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors font-medium"
                                        >
                                            GitHub
                                        </a>
                                        <a
                                            href={item.packagist}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors font-medium"
                                        >
                                            Packagist
                                        </a>
                                    </div>
                                </TableCell>
                                <TableCell className="text-muted-foreground">
                                    {item.description}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </section>
    )
}
