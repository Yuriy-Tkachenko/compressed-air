import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-item">Расчет количества воздуха</li>
                <li className="nav-item">Расчет диаметра трубопровода</li>
                <li className="nav-item">Расчет срока службы трубопровода</li>
                <li className="nav-item">Подбор компрессора</li>
                <li className="nav-item">Подбор осушителя</li>
            </ul>
        </nav>
    )
}

export default Nav;