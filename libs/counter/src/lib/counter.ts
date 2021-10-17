import { BehaviorSubject, Observable } from 'rxjs';
export interface CounterInstance {
  counter$: () => Observable<number>;
  startCounter: () => number;
  restartCounter: () => void;
  pauseCounter: () => void;
  stopCounter: () => void;
}

export const Counter = (initialValue = 0): CounterInstance => {
  const _counterValue$ = new BehaviorSubject<number>(initialValue);
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
