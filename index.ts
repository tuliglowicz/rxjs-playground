import { of } from 'rxjs'; 
import { map } from 'rxjs/operators';


const source = of('World', 'Test').pipe(
  map(x => `Hello ${x}!`)
);

source.subscribe(console.log);