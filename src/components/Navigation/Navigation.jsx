import { Link } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/auth-selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};
