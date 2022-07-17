import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoAPI_URL, geoAPIOptions } from "../../api";
import "./Search.css";

function Search({ onSearchChange }) {

    const [search, setSearch] = useState(null);

    const handleSearchChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    const loadOptions = (inputData) => {
        return fetch(`${geoAPI_URL}cities?minPopulation=100000&namePrefix=${inputData}`, geoAPIOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map(city => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div id="search-container">
            <AsyncPaginate
                placeholder="Search for a city"
                debounceTimeout={600}
                value={search}
                onChange={handleSearchChange}
                loadOptions={loadOptions}
            />
        </div>
    )
}

export default Search;