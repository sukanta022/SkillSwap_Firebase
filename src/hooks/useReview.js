import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useReview = () => {
    const [review,setReview] = useState([])
    const [loading2, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios('../review.json')
        .then(data => setReview(data.data))
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    },[])
    return {review, loading2, error}
};

export default useReview;