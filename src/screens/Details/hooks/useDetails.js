import { useContext, useEffect, useState } from "react";
import AppContext from "../../../contexts/App";
import { allPizza } from "../../../mock/pizzaList";

export default function useDetails(route) {
  const [details, setDetails] = useState({});
  const [inLoading, setInLoading] = useState(false);
  const { themeMode } = useContext(AppContext);
  const { productId } = route.params;

  useEffect(() => {
    setInLoading(true);

    setTimeout(() => {
      const details = allPizza.find((item) => item.id === productId);
      setDetails(details);
      setInLoading(false);
    }, 2000);
  }, []);

  return { themeMode, details, setDetails, inLoading, setInLoading };
}
