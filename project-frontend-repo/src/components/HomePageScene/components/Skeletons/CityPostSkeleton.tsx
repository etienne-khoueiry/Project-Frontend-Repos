import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";
import { CardActions, Stack } from "@mui/material";

interface MediaProps {
  loading?: boolean;
}

function Media(props: MediaProps) {
  const { loading = false } = props;

  return (
    <Card>
      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        }
        title={
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        }
        subheader={<Skeleton animation="wave" height={10} width="40%" />}
      />
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      <CardContent>
        <React.Fragment>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Skeleton
              animation="wave"
              height={40}
              width="20%"
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={60} width={40} />
          </Stack>
        </React.Fragment>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Skeleton animation="wave" height={40} width={30} />
          <Skeleton animation="wave" height={40} width={30} />
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function CityPostSkeleton() {
  return (
    <div>
      <Media loading />
    </div>
  );
}
