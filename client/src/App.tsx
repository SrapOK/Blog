import { useEffect } from "react";
import AppRouter from "./component/AppRouter";
import { useAppDispatch, useAppSelector } from "./utils/hooks/reduxHooks";
import { fetchCheck, selectIsAuth } from "./redux/slices/auth";

function App() {
  const dispatch = useAppDispatch();
  useAppSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchCheck());
  }, []);

  return <AppRouter />;
}

export default App;
