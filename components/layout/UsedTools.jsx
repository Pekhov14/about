'use client'

import {Tabs} from "antd";
import {TabList} from "@/components/sections/usedTools/tabs/TabList";
import {TabGraphic} from "@/components/sections/usedTools/tabs/TabGraphic";

const items = [
    {
        key: '1',
        label: 'List',
        children: <TabList />,
    },
    {
        key: '2',
        label: 'Graphic',
        children: <TabGraphic />,
    },
];

const UsedTools = () => {
    return (
        <section id="promotionFooter" className="bg-gray-100 py-8 px-8">
            <div className="container mx-auto">
                <div className="w-full">
                    <h4 className="text-xl font-bold mb-4"><i className="bi bi-tag"></i> Tags of used tools</h4>
                </div>

                <Tabs defaultActiveKey="2" items={items} />
            </div>
        </section>
    )
}

export {UsedTools}