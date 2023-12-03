import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from 'components/Loader/Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="50"
        width="50"
        radius="9"
        color="steelblue"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderWrapper>
  );
};
