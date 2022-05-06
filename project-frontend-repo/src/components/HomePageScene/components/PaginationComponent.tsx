import { Grid, Pagination } from "@mui/material";
import React, { useCallback, useContext, useRef } from "react";
import { useParams } from "react-router";
import { Context } from "../../../Contexts/Context";
import { GetCities, GetCitiesByName } from "../../../Services/CitiesApiCalls";
import { GetReviewsByCityId } from "../../../Services/ReviewApiCalls";

type Props = {};

export default function PaginationComponent({}: Props) {
  const { cities, setCities, setIsLoading, reviews } = useContext(Context);
  const pageIndexRef = useRef<number>(1);
  const { search, id } = useParams();

  const handleNextPage = useCallback( async (event: any) => {
    var pageIndex = event?.target.textContent;
    setIsLoading(true);
    var result;
    var resultReviews;
    if (search) {
      result = await GetCitiesByName(search, pageIndex);
    } else if(id){
      resultReviews = await GetReviewsByCityId(Number(id), pageIndex);

    }else{
      result = await GetCities(pageIndex);

    }
    if (result) {
      window.scrollTo(0, 0);
      setCities(result);
      setIsLoading(false);
    } else if(resultReviews){
      reviews.current = resultReviews;
      setIsLoading(false);
    }
  }, []);


  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "20px" }}>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item xs={12}>
          <Pagination count={10} color="secondary" onChange={handleNextPage} ref={pageIndexRef} size="small" sx={{textAlign: "center"}}/>
        </Grid>
      </Grid>
    </div>
  );
}
