import React, {useEffect, useRef, useState} from 'react';
import * as d3 from 'd3';
import SoundControl from "@/components/helpers/SoundControl";

const data = {
    "name": "flare",
    "children": [
        {
            "name": "Databases",
            "children": [
                {
                    "name": "Relational",
                    "children": [
                        {"name": "SQL", "value": 3938},
                        {"name": "Mysql", "value": 3938},
                        {"name": "Mariadb", "value": 3812},
                        {"name": "Postgresql", "value": 6714},
                    ]
                },
                {
                    "name": "Other",
                    "children": [
                        {"name": "Redis", "value": 3534},
                        {"name": "Mongodb", "value": 5731},
                    ]
                }
            ]
        },
        {
            "name": "Output",
            "children": [
                {"name": "HTML5", "value": 17010},
                {"name": "CSS3", "value": 5842},
                {"name": "Twig", "value": 1041},
                {"name": "Blade", "value": 5176},
                {"name": "Markdown", "value": 449},
            ]
        },
        {
            "name": "Js",
            "children": [
                {"name": "React", "value": 1759},
                {"name": "Js", "value": 1759},
                {"name": "TypeScript", "value": 1759},
            ]
        },
        {
            "name": "Tools",
            "children": [
                {
                    "name": "Package managers",
                    "children": [
                        {"name": "Composer", "value": 2105},
                        {"name": "Npm", "value": 2105},
                        {"name": "Yarn", "value": 2105},
                    ]
                },
                {
                    "name": "Bundling",
                    "children": [
                        {"name": "Webpack", "value": 2105},
                        {"name": "Vite", "value": 2105},
                    ]
                },
                {"name": "Git", "value": 2105},
                {"name": "Docker", "value": 1316},
                {"name": "Nginx", "value": 3151}
            ]
        },
        {
            "name": "PHP",
            "children": [
                {
                    "name": "Symfony",
                    "children": [
                        {"name": "Doctrine", "value": 9354},
                        {"name": "Easy admin", "value": 1233},
                        {"name": "Api platform", "value": 1233},
                    ]
                },
                {"name": "Opencart", "value": 335},
                {
                    "name": "Laravel",
                    "children": [
                        {"name": "Voyager", "value": 3165},
                        {"name": "Blade", "value": 2815},
                    ]
                }
            ]
        },
    ]
};

const TabGraphic = () => {
    const audioRef = useRef(null);
    const [isSoundOn, setIsSoundOn] = useState(true);
    const [playSound, setPlaySound] = useState(false);

    const volumeDefault = 0.3;
    const volumeOff = 0;

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = isSoundOn ? volumeDefault : volumeOff;
        }
    }, [isSoundOn]);

    const toggleSound = () => {
        setIsSoundOn((prev) => !prev);
    };

    useEffect(() => {
        const width = 1200; // 928
        const height = width;

        // Create the color scale.
        const color = d3.scaleLinear()
            .domain([0, 5])
            .range(["hsl(19,77%,79%)", "hsl(89,76%,42%)"])
            .interpolate(d3.interpolateHcl);

        // Compute the layout.
        const pack = data => d3.pack()
            .size([width, height])
            .padding(3)
            (d3.hierarchy(data)
                .sum(d => d.value)
                .sort((a, b) => b.value - a.value));
        const root = pack(data);

        // Очищаем содержимое контейнера перед добавлением нового графика
        const container = d3.select("#circle-packing-container");
        container.selectAll("*").remove();

        // TODO: Разобраться почему дубль в circle-packing-container

        // Create the SVG container.
        const svg = d3.select("#circle-packing-container")
            .append("svg")
            .attr("viewBox", `-${width / 2} -${height / 2} ${width} ${height}`)
            .attr("width", width)
            .attr("height", height)
            .attr("style", `max-width: 100%; height: auto; display: block; margin: 0 -14px;  cursor: pointer;`);

        // Append the nodes.
        const node = svg.append("g")
            .selectAll("circle")
            .data(root.descendants().slice(1))
            .join("circle")
            .attr("fill", d => d.children ? color(d.depth) : "white")
            .attr("pointer-events", d => !d.children ? "none" : null)
            .on("mouseover", function() { d3.select(this).attr("stroke", "#000"); })
            .on("mouseout", function() { d3.select(this).attr("stroke", null); })
            .on("click", (event, d) => focus !== d && (zoom(event, d), event.stopPropagation()));

        // Append the text labels.
        const label = svg.append("g")
            .style("font-family", "Arial, sans-serif")
            .style("font-size", "15px")
            .style("font-weight", "bold")
            .attr("pointer-events", "none")
            .attr("text-anchor", "middle")
            .selectAll("text")
            .data(root.descendants())
            .join("text")
            .style("fill-opacity", d => d.parent === root ? 1 : 0)
            .style("display", d => d.parent === root ? "inline" : "none")
            .text(d => d.data.name);

        // Create the zoom behavior and zoom immediately in to the initial focus node.
        svg.on("click", (event) => zoom(event, root));
        let focus = root;
        let view;
        zoomTo([focus.x, focus.y, focus.r * 2]);

        function zoomTo(v) {
            const k = width / v[2];

            view = v;

            label.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
            node.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
            node.attr("r", d => d.r * k);
        }

        function zoom(event, d) {
            setPlaySound(true);

            const focus0 = focus;

            focus = d;

            const transition = svg.transition()
                .duration(event.altKey ? 7500 : 750)
                .tween("zoom", d => {
                    const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
                    return t => zoomTo(i(t));
                });

            label
                .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
                .transition(transition)
                .style("fill-opacity", d => d.parent === focus ? 1 : 0)
                .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
                .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
        }
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio && playSound) {
            const handleEnded = () => setPlaySound(false);

            audio.addEventListener('ended', handleEnded);
            audio.play();

            return () => {
                audio.removeEventListener('ended', handleEnded);
            };
        }
    }, [playSound, audioRef]);

    return (
        <>
            <audio ref={audioRef} id="myAudio" src="/assets/sounds/whoosh3.mp3"></audio>
            <SoundControl audioRef={audioRef} isSoundOn={isSoundOn} toggleSound={toggleSound} playSound={playSound} />
            <div id="circle-packing-container"></div>
        </>
    )
}

export {TabGraphic}