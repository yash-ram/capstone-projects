import { Link } from 'react-router-dom';

function CallToAction() {
    return (
        <section className="section-calltoaction">
            <h1 className="title">Little Lemon</h1>
            <h2 classname="subtitle">Chicago</h2>
            <p>
                We are a family owned Mediterranean restautant, focused on traditional recipes served with a modern twist.
            </p>
            <Link to="/reservations" ><button>Reserve a Table</button></Link>
            <img src="/images/little-lemon-calltoaction.png" alt="Little Lemon food"/>
        </section>
    );
}

export default CallToAction;