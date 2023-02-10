import { loader } from '../assets';

const Loader = () => (
  <div className='w-full flex justify-center items-center flex-col'>
    <img src={loader} alt="loader" className="w-32 h-3" />
  </div>
);

export default Loader;
