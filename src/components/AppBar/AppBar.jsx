import Navigation from "../Navigation/Navigator";
import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
