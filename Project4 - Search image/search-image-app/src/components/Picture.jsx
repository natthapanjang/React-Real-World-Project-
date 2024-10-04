const Picture = (props) => {
  const { urls, description } = props;
  return (
    <>
      <img src={urls.small} alt={description} />
    </>
  );
};

export default Picture;
