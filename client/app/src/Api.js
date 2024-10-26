// GET REQUESTS
export const fetchCountries = async () => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/countries/");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchStates = async () => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/states/");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchCities = async () => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/cities/");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchCounties = async () => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/counties/");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

// GET SINGLE ENTITY RESULT REQUESTS
export const fetchCountry = async (id) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/countries/${id}/`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchCity = async (id) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/cities/${id}/`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchState = async (id) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/states/${id}/`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchCounty = async (id) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/counties/${id}/`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

// CREATE REQUESTS
export const createCountry = async (data) => {
    const response = await fetch("http://127.0.0.1:8000/api/countries/create/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const newCountry = await response.json();
    return newCountry
}

export const createState = async (data) => {
    const response = await fetch("http://127.0.0.1:8000/api/states/create/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const newState = await response.json();
    return newState;
}

export const createCity = async (data) => {
    const response = await fetch("http://127.0.0.1:8000/api/cities/create/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const newCity = await response.json();
    return newCity;
}

export const createCounty = async (data) => {
    const response = await fetch("http://127.0.0.1:8000/api/counties/create/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const newCounty = await response.json();
      return newCounty;
}

// UPDATE REQUESTS
export const updateCountry = async (id, newData) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/countries/update/${id}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const updateState = async (id, newData) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/states/update/${id}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const updateCity = async (id, newData) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/cities/update/${id}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const updateCounty = async (id, newData) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/counties/update/${id}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

// DELETE REQUESTS
export const deleteCountry = async (id) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/countries/update/${id}/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteState = async (id) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/states/update/${id}/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteCity = async (id) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/cities/update/${id}/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteCounty = async (id) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/counties/update/${id}/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};