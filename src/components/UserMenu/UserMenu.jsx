import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/auth-selectors';
import { authOperations } from 'redux/auth/auth-operations';
import { Container, Welcome, LogOutBtn } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getUsername);

  return (
    <Container>
      <Welcome>Welcome, {name}!</Welcome>
      <LogOutBtn
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </LogOutBtn>
    </Container>
  );
};
