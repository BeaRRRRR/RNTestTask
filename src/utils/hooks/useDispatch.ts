import { useDispatch as useReduxDispatch } from 'react-redux';
import { RootDispatch } from 'types/types';

const useDispatch = () => useReduxDispatch<RootDispatch>();
export default useDispatch;
