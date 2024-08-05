import "./App.css";

const GenerateGreeting = () => {
  const getGreeting = () => {
    return "Hello, John!";
  };

  return <h1>{getGreeting()}</h1>;
};

const CalculateArea = () => {
  const length = 10;
  const width = 5;

  const areaOfRectangle = (x, y) => {
    return x * y;
  };

  return (
    <div>
      <p>Rectangle Area: {areaOfRectangle(length, width)}</p>
    </div>
  );
};

const CalculatePerimeter = () => {
  const length = 10;
  const width = 5;

  const perimeter = (x, y) => {
    return 2 * (x + y);
  };
  return (
    <div>
      <p>Rentangle Perimeter: {perimeter(length, width)}</p>
    </div>
  );
};

const GenerateMessage = () => {
  const currentHour = new Date().getHours();
  const message = () => {
    return currentHour < 12
      ? "Good Morning!"
      : currentHour < 18
        ? "Good Afternoon!"
        : "Good Evening!";
  };

  return (
    <div>
      <h1>{message()}</h1>
    </div>
  );
};

const CalculateVolume = () => {
  const radius = 3;
  const height = 5;

  const volume = (x, y) => {
    return Math.PI * Math.pow(x, 2) * y;
  };

  return (
    <div>
      <p>Volume of Cylinder: {volume(radius, height)}</p>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <GenerateGreeting />
      <CalculateArea />
      <CalculatePerimeter />
      <GenerateMessage />
      <CalculateVolume />
    </main>
  );
}
