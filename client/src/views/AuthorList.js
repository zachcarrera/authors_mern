import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const AuthorList = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((res) => {
                setAuthors(res.data.authors);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleDelete = (deleteId) => {
        axios
            .delete(`http://localhost:8000/api/authors/${deleteId}`)
            .then((res) => {
                setAuthors(authors.filter((author) => author._id !== deleteId));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="w-50 rounded shadow mx-auto p-3">
            <Link to="/new">Add an author</Link>
            <p>We have quotes by:</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {/* add authors here as array */}
                    {authors.map((author) => {
                        return (
                            <tr key={author._id}>
                                <td>{author.name}</td>
                                <td>
                                    <Link className="btn btn-warning mx-1" to={`/edit/${author._id}`}>
                                        Edit
                                    </Link>
                                    <button
                                        className="btn btn-danger mx-1"
                                        onClick={() => handleDelete(author._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default AuthorList;
