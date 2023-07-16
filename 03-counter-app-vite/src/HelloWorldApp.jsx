import { PropTypes } from 'prop-types';
const name = 'Michael 2';

export const App = ({ title, subTitle }) => {
  return (
    <>
      <h1>Hello world22 {name}</h1>;
    </>
  );
};

App.propTypes = {
  // title: PropTypes.string,
  title: PropTypes.string.isRequired,
  // subTitle: PropTypes.number.isRequired,
};
