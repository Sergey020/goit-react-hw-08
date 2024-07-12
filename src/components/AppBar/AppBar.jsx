import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedIn, selectIsRefreshing } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigator";

function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  return (
    <header>
      <Navigation />
      {!isRefreshing && isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar;