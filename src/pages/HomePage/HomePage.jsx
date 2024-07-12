import { useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle";
import { Link } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <PageTitle>This is your phonebook</PageTitle>
      ) : (
        <>
          <PageTitle>
            Please,<Link to="/register"> register </Link>if you whant to
            continue
          </PageTitle>
        </>
      )}
    </>
  );
}
