import { BehaviorSubject, Observable } from 'rxjs';
export interface CounterFunctionInstance {
  counter$: () => Observable<number>;
  startCounter: () => number;
  restartCounter: () => void;
  pauseCounter: () => void;
  stopCounter: () => void;
}

export const CounterFunction = (): CounterFunctionInstance => {
  const _counterValue$ = new BehaviorSubject<number>(0);
  const counter$ = () => _counterValue$.asObservable();

  const startCounter = () => {
    const currentTimer = setInterval(() => {
      _counterValue$.next(_counterValue$.value + 1);
    }, 1000) as unknown as number; // this for react 'Timeout' type not 'number'

    return currentTimer;
  };

  const restartCounter = () => {
    stopCounter();
    startCounter();
  };

  const pauseCounter = () => {
    if (_currentTimer === 0) {
      _currentTimer = startCounter();
    } else {
      clearInterval(_currentTimer);
      _currentTimer = 0;
    }
  };

  const stopCounter = () => {
    if (_currentTimer === 0) return;

    pauseCounter();
    _counterValue$.next(0);
  };

  let _currentTimer: number = startCounter();

  return {
    counter$,
    startCounter,
    restartCounter,
    pauseCounter,
    stopCounter,
  };
};
