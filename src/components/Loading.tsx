import { CircularProgress } from "@mui/material";
import { LoadingWrapper } from "../style/App.style";

type Props = {
  size?: number;
  blur?: boolean;
};

export const Loading = ({ size, blur }: Props) => (
  <LoadingWrapper blur={blur}>
    <CircularProgress size={size} />
  </LoadingWrapper>
);
