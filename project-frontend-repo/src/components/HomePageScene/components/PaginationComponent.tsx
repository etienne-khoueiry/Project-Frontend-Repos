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
    // console.log(pageIndexRef);
    var pageIndex = event?.target.textContent;
    // console.log(pageIndexRef);
    // console.log(event.target);
    // pageIndexRef.current = pageIndex;
    setIsLoading(true);
    var result;
    // if(!pageIndex){
    //   pageIndex = pageIndexRef.current-1;
    // }
    var resultReviews;
    if (search) {
      result = await GetCitiesByName(search, pageIndex);
    } else if(id){
      resultReviews = await GetReviewsByCityId(Number(id), pageIndex);
      console.log(resultReviews);
    }else{
      result = await GetCities(pageIndex);

    }
    if (result) {
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
          <Pagination count={10} color="secondary" onChange={handleNextPage} ref={pageIndexRef}/>
        </Grid>
      </Grid>
    </div>
  );
}
