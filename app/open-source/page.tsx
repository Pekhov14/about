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
        </section>
    )
}
