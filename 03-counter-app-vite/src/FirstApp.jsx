import { PropTypes } from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <div data-testid='test-title'>{title}</div>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  name: 'Michael Javier',
  subTitle: 'No hay subtítulo',
  //title: 'No hay titutlo',
};
