import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./Atoms";

function App() {
  const [minute, setMinute] = useRecoilState(minuteState);
  const hour = useRecoilValue(hourSelector);

  const changeMinute = (event: React.FormEvent<HTMLInputElement>) => {
    setMinute(+event.currentTarget.value);
  };
  return (
    <div>
      <input
        value={minute}
        onChange={changeMinute}
        type="number"
        placeholder="minutes"
      />
      <input value={hour} type="number" placeholder="hours" />
    </div>
  );
}

export default App;
