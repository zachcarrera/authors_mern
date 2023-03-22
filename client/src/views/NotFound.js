import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div>
            <p>
                We're sorry, but we could not find the author you are looking
                for. would you like to add this author to our database?{" "}
                <Link to={"/new"}>Add an author</Link>
            </p>
        </div>
    );
};

export default NotFound;
