import { useRecoilState } from "recoil";
import { hourSelector, minuteState } from "./Atoms";

function App() {
  const [minute, setMinute] = useRecoilState(minuteState);
  const [hour, setHour] = useRecoilState(hourSelector);

  const changeMinute = (event: React.FormEvent<HTMLInputElement>) => {
    setMinute(+event.currentTarget.value);
  };
  const changeHour = (event: React.FormEvent<HTMLInputElement>) => {
    setHour(+event.currentTarget.value);
  };

  return (
    <div>
      <input
        value={minute}
        onChange={changeMinute}
        type="number"
        placeholder="minutes"
      />
      <input
        value={hour}
        onChange={changeHour}
        type="number"
        placeholder="hours"
      />
    </div>
  );
}

export default App;
