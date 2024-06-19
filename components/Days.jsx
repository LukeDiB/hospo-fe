function Days() {
  const days = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];
  const shortDays = [
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
    "SUN",
  ];

  const handleClick = (day) => {
    window.location.href = `/${day.toLowerCase()}`;
  };

  return (
    <div id="days">
      {days.map((day, index) => (
        <button
          key={index}
          className={`day-button`}
          onClick={() => handleClick(day)}
        >
          {day.slice(0, 3)}
        </button>
      ))}
    </div>
  );
}

export default Days;
