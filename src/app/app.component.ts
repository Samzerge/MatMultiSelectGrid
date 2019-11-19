
import { Component, PipeTransform } from '@angular/core';
import { MatMultiSelectGridComponent } from 'projects/mat-multi-select-grid/src/public_api';
import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WeekDayPipe } from './week-day.pipe';


@Component({
  selector: 'mat-msgp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mat-multi-select-grid-project';
  comp: MatMultiSelectGridComponent;

  formGroup: FormGroup;
  selectedNumbers: number[];
  showClearButton = true;
  usedPipe: PipeTransform;

  numberList$: BehaviorSubject<any[]>;
  weeksList$: BehaviorSubject<any[]>;
  heroesList$: BehaviorSubject<any[]>;

  constructor(private formBuilder: FormBuilder) {
    const numberList = Array.from(Array(50), (_, x) => x + 1);
    const weeksList = Array.from(Array(7), (_, x) => x + 1);
    const heroesList = ['Spiderman', 'Ironman', 'Thor', 'Hulk',
    'Captain America', 'Black Widow', 'Hawkeye', 'Dr.Strange', 'Starlord', 'Rocket Racoon', 'Gamora', 'Groot', 'Drax'];

    // const itemsList = [
    //   {id: 1, nombre: 'Spiderman', otherLanguages: {englishName: 'Spiderman', spanishName: 'Hombre araña'}},
    //   {id: 2, nombre: 'Ironman', otherLanguages: {englishName: 'Ironman', spanishName: 'Hombre de acero'}},
    // ];

    this.numberList$ = new BehaviorSubject(numberList);
    this.weeksList$ = new BehaviorSubject(weeksList);
    this.heroesList$ = new BehaviorSubject(heroesList);

    this.formGroup = this.createFormGroup();

    this.usedPipe = new WeekDayPipe();
  }

  createFormGroup() {
    return this.formBuilder.group(
      {
        selectedHero: [undefined]
      }
    );
  }


  onMonthDayAdded(value) {
    console.log('onMonthDayAdded');
    // console.dir(value);

  }

  onMonthDayRemoved(value) {
    console.log('onMonthDayRemoved');
    // console.dir(value);

  }

  onMonthDayClear() {
    console.log('onMonthDayClear');
  }
}
