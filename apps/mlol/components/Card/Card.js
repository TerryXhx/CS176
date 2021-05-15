import { Divider } from '@material-ui/core';
import { MemoizedOnePicCard } from "./OnePicCard";

export default function Card(props) {
  const datum = props.data;
  return (
    <>
      <Divider variant="middle" light={true} />
      <MemoizedOnePicCard data={datum} />
    </>
  );
}
