import React from "react";
import './footer.scss';
import moment from "moment";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>Realizado con ♥ por Sergio Cano</p>
                <p>{moment().format("YYYY")}</p>
            </div>
        </footer>
    );
};
