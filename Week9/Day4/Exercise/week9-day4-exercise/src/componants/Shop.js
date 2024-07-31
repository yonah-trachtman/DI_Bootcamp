
import React, { useState, useEffect } from 'react';

function Shop(props) {
    const [hasError, setHasError] = useState(true);

    if (hasError) {
        throw new Error("Simulated error for testing ErrorBoundary in Shop");
    }


    return (
        <>
        <h1>Shop</h1>
        </>
    )
}

export default Shop;