const columns = [
    {name: "Project", uid: "name"},
    {name: "Link PR", uid: "link"},
    {name: "PR status", uid: "status"},
    {name: "Date", uid: "date"},
    {name: "Description", uid: "description"},
];

const projects = [
    {
        id: 1,
        project: "Sculpin",
        link: "https://github.com/sculpin/sculpin/pull/487",
        status: "Merged",
        date: "Jun 29, 2024",
        description: "Update dependency",
    },
    {
        id: 2,
        project: "thephp.foundation",
        link: "https://github.com/ThePHPF/thephp.foundation/pull/153",
        status: "Closed",
        date: "May 31, 2024",
        description: "Attempt to replace code highlighting with a PHP solution on the PHP Foundation website"
    },
    {
        id: 3,
        project: "Sculpin",
        link: "https://github.com/sculpin/sculpin/pull/491",
        status: "Merged",
        date: "Dec 1, 2024",
        description: "Changed legacy dependency to symfony component"
    },
    {
        id: 4,
        project: "yiisoft/cache",
        link: "https://github.com/yiisoft/cache/pull/150",
        status: "Merged",
        date: "Oct 2 2025",
        description: "Implemented TTL (time-to-live) value object and improved cache expiration logic"
    },
    {
        id: 5,
        project: "Sculpin",
        link: "https://github.com/sculpin/sculpin/pull/498",
        status: "Merged",
        date: "Nov 22 2025",
        description: "Proposed Rector to simplify code refactoring and Symfony updates"
    },
];

export {columns, projects};