'use client'

import React from "react";
import {Chip, ChipProps, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import {columns, projects} from "@/public/data/open-source";

const statusColorMap: Record<string, ChipProps["color"]> = {
    merged: "success",
    closed: "danger",
    open: "warning",
    draft: "primary",
    pending: "warning",
    failed: "danger",
    approved: "success",
};

export default function OpenSourcePage(): JSX.Element {

    return (
        <section className="flex flex-col items-center justify-center w-full pt-10 pb-10">
            <h1 className="pb-5 font-bold text-center">Open source contribution</h1>

            <Table className="md:w-1/2">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn key={column.uid}>
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={projects}>
                    {(item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.project}</TableCell>
                            <TableCell><a href={item.link} target="_blank">Link</a></TableCell>
                            <TableCell>
                                <Chip color={statusColorMap[item.status.toLowerCase()]}>{item.status}</Chip>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </section>
    )
}
