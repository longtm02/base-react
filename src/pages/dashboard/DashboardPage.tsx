import {FC, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
  fetchDataRequest,
  fetchDataRequestFast,
} from '../../store/actions/action';

const DashboardPage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Promise.all([
    //   dispatch(fetchDataRequest()),
    //   dispatch(fetchDataRequest()),
    //   dispatch(fetchDataRequest()),
    //   dispatch(fetchDataRequest()),
    //   dispatch(fetchDataRequest()),
    //   dispatch(fetchDataRequest()),
    //   dispatch(fetchDataRequest()),
    //   dispatch(fetchDataRequest()),
    //   dispatch(fetchDataRequest()),
    //   dispatch(fetchDataRequest()),
    //   dispatch(fetchDataRequest()),
    //   dispatch(fetchDataRequestFast()),
    // ]);
    dispatch(fetchDataRequest());
    dispatch(fetchDataRequest());
    dispatch(fetchDataRequest());
    dispatch(fetchDataRequest());
    dispatch(fetchDataRequest());
    dispatch(fetchDataRequest());
    dispatch(fetchDataRequest());
    dispatch(fetchDataRequest());
    dispatch(fetchDataRequest());
    dispatch(fetchDataRequest());
    dispatch(fetchDataRequest());
    dispatch(fetchDataRequestFast());
  }, []);

  return (
    <div className='flex flex-col'>
      <div className='m-0 text-[1.625rem] font-bold leading-8 text-white'>
        DashboardPage
      </div>
    </div>
  );
};

export default DashboardPage;
