import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Snackbar } from '../shared-components';
import { userSlice } from '../slices';

export default function Auth() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userSlice.actions.auth());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    switch (true) {
      case user.auth && location.pathname === '/login':
        navigate('/', { replace: true });
        break;
      case !user.auth && location.pathname !== '/login':
        navigate('/login', { replace: true });
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.auth]);
  return <Snackbar open={Boolean(user.working)}>{user.working}...</Snackbar>;
}
