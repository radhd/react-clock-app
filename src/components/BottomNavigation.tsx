interface Props {
  isOpen: boolean;
}

export function BottomNavigation(props: Props) {
  const { isOpen } = props;

  return (
    <>
      {isOpen ? (
        <div>
          <p>current timezone: {}</p>
          <p>day of the year: {}</p>
          <p>day of the week: {}</p>
          <p>week number: {}</p>
        </div>
      ) : null}
    </>
  );
}
