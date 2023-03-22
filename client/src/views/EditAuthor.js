import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const EditAuthor = () => {
    const { _id } = useParams();
    const [name, setName] = useState("");
    const [validationErrors, setValidationErrors] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/authors/${_id}`)
            .then((res) => {
                setName(res.data.author.name);
            })
            .catch((error) => {
                console.log(error);
                navigate("/author_not_found");
            });
    }, [_id, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .put(`http://localhost:8000/api/authors/update/${_id}`, { name })
            .then((res) => {
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                setValidationErrors(error?.response?.data?.errors);
            });
    };

    return (
        <div className="w-50 mx-auto">
            <Link to="/">Home</Link>
            <p>Edit this author:</p>
            <form
                className="w-75 rounded shadow p-3 mx-auto"
                onSubmit={handleSubmit}
            >
                <label className="form-label">Name:</label>
                {validationErrors?.name && (
                    <p className="text-danger">
                        {validationErrors.name.message}
                    </p>
                )}
                <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Link to="/" className="btn btn-secondary mx-1">
                    Cancel
                </Link>
                <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary"
                />
            </form>
        </div>
    );
};

export default EditAuthor;
