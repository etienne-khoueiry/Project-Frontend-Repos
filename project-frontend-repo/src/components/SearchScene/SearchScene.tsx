import React, { useCallback } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { GetCitiesByNameOnce } from "../../Services/CitiesApiCalls";
import { useState } from "react";
import { useNavigate } from "react-router";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Grid } from "@mui/material";

export default function SearchScene() {
  const [cities, setCities] = useState<any[]>([]);
  const searchHandler = useCallback(async (event: any) => {
    if (event.target.value.length > 2) {
      setTimeout(async () => {
        var get = await GetCitiesByNameOnce(event.target.value);
        var cities = await get(
          `https://localhost:7181/cities/${event.target.value}?pageIndex=${1}`
        );
        setCities(cities);
      }, 50);
    }
  }, []);
  const [emptySearch, setEmptySearch] = useState<boolean>(false);

  const navigate = useNavigate();
  const searchRef = React.useRef<any>("");

  const handleSearch = React.useCallback(() => {
    if (searchRef.current.value === "") {
      setEmptySearch(true);
    } else {
      navigate("/SearchResult/" + searchRef.current.value);
    }
  }, [searchRef.current.value]);

  const enterPressedHandler = React.useCallback((event: any) => {
    if (event.code === "Enter") {
      handleSearch();
    }
  }, []);
  return (
    <Stack spacing={2}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={cities.map((option: any) => option.city.cityName)}
        onKeyPress={enterPressedHandler}
        renderInput={(params) => (
          <Grid container sx={{alignItems: "center"}} spacing={1}>
            <Grid item xs={10} sm={10} md={11}>
            <TextField
              {...params}
              label="Search"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
              onChange={searchHandler}
              inputRef={searchRef}
            />
            </Grid>
            <Grid item xs={2} sm={2} md={1} textAlign={"center"}>
              <SearchRoundedIcon onClick={handleSearch} sx={{fontSize:"35px", cursor: "pointer"}}/>
            </Grid>
          </Grid>
        )}
      />
    </Stack>
  );
}
