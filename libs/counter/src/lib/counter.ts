import { BehaviorSubject, Observable } from 'rxjs';

const __counterValue$ = new BehaviorSubject<number>(0);
let __currentTimer: number;

const startCounter = () => {
  const currentTimer = setInterval(() => {
    __counterValue$.next(__counterValue$.value + 1);
  }, 1000) as unknown as number; // this for react 'Timeout' type not 'number'

  __currentTimer = currentTimer;
};

export const Counter = (): Observable<number> => {
  startCounter();
  return __counterValue$.asObservable();
};

export const RestartCounter = () => {
  StopCounter();
  startCounter();
};

export const PauseCounter = () => {
  if (__currentTimer === 0) {
    startCounter();
  } else {
    clearInterval(__currentTimer);
    __currentTimer = 0;
  }
};

export const StopCounter = () => {
  if (__currentTimer === 0) return;

  PauseCounter();
  __counterValue$.next(0);
};

export const testFunction = () => {
  return 
}