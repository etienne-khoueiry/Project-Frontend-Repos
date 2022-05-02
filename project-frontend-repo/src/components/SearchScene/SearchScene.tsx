import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import React, { useCallback, useRef, useState } from "react";

const SearchScene = () => {
  const searchRef = useRef<any>("");

  const navigate = useNavigate();

  const [emptySearch, setEmptySearch] = useState<boolean>(false);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const handleSearch = useCallback(() => {
    if (searchRef.current.value == "") {
      setEmptySearch(true);
    } else {
      navigate("/SearchResult/" + searchRef.current.value);
    }
  }, [searchRef.current.value]);

  return (
    <Search
      style={{
        border: "1px solid black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <SearchIconWrapper sx={{ cursor: "pointer" }}>
        <SearchIcon sx={{ cursor: "pointer" }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        inputRef={searchRef}
        error={emptySearch}
      />
      <Button
        sx={{
          backgroundColor: "secondary.main",
          "&:hover": { backgroundColor: "rgb(249 211 66 / 60%)" },
        }}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Search>
  );
};

export default SearchScene;
