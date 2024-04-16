const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section>
            <p className="bg-gray-100 text-center">&copy; {currentYear} - Anthony Pekhov</p>
        </section>
    )
}

export {Footer}