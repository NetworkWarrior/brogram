export default function Layout(props) {
    const {children} =  props
    const header = (
        <header>
            <h1 className="text-gradient">The Brogram</h1>
            <p><strong>The 30 Simple Workouts Programm</strong></p>
        </header>
    )
    const footer = (
        <footer>
            <p>Built by <a href="https://ismailabdumajidov.netlify.app/" target="_blank">Ismail</a></p>
        </footer>
    )

    return (
        <>
            {header}
            {children}
            {footer}
        </>        
    )
}