import { useRecoilState } from "recoil";
import Main from "../Item/Main/Main";
import Port from "../Item/Portfolio/Port";
import Side from "../Item/Side/Side";
import { idState, itemsState } from "@/recoil/atoms";

const Total = () => {
  const [item, setItem] = useRecoilState(itemsState);
  const [itemId, setItemId] = useRecoilState(idState);

  const items = (id: number) => item.find((ids) => ids.id === id);

  return (
    <>
      {items(1)?.id === itemId ? (
        <Side />
      ) : "" || items(2)?.id === itemId ? (
        <Port />
      ) : "" || items(3)?.id === itemId ? (
        <Main />
      ) : "" || 0 === itemId ? (
        <Port />
      ) : (
        ""
      )}
    </>
  );
};

export default Total;
