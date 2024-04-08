import Link from 'next/link';

const Menu = () => {
    return (
        <nav className="p-4">
            <div className="container mx-auto flex justify-between items-center">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="text-white">Home</Link>
                    </li>
                    <li>
                        <Link href="/work" className="text-white">Work</Link>
                    </li>
                    <li>
                        <Link href="/cv" className="text-white">Resume</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export {Menu};
