
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
  usedPipe: PipeTransform;

  numberList$: BehaviorSubject<any[]>;
  weeksList$: BehaviorSubject<any[]>;
  heroesList$: BehaviorSubject<any[]>;
  developmentList$: BehaviorSubject<any[]>;

  constructor(private formBuilder: FormBuilder) {
    const numberList = Array.from(Array(50), (_, x) => x + 1);
    const weeksList = Array.from(Array(7), (_, x) => x + 1);
    const heroesList = ['Spiderman', 'Ironman', 'Thor', 'Hulk',
    'Captain America', 'Black Widow', 'Hawkeye', 'Dr.Strange', 'Starlord', 'Rocket Racoon', 'Gamora', 'Groot', 'Drax'];

    const developmentList = [
      {id: 1, developer: {name: 'Sammuel', bestProject: {name: 'ProjectOne'}}},
      {id: 2, developer: {name: 'Catherine', bestProject: {name: 'Social For All'}}},
      {id: 3, developer: {name: 'Keanu', bestProject: {name: 'EnviroSafety'}}},
      {id: 4, developer: {name: 'Angelina', bestProject: {name: 'MultiSelectGrid'}}},
    ];

    this.numberList$ = new BehaviorSubject(numberList);
    this.weeksList$ = new BehaviorSubject(weeksList);
    this.heroesList$ = new BehaviorSubject(heroesList);
    this.developmentList$ = new BehaviorSubject(developmentList);

    this.formGroup = this.createFormGroup();

    this.usedPipe = new WeekDayPipe();


    this.formGroup.valueChanges.subscribe(data => {
      console.log('valueChanges');
      console.dir(data);
    });
  }

  createFormGroup() {
    return this.formBuilder.group(
      {
        selectedHero: [undefined]
      }
    );
  }


  onMonthDayAdded(value) {
    // console.log('onMonthDayAdded');
    // console.dir(value);
    // console.log('forms');
    // console.dir(this.selectedNumbers);
    // console.dir(this.formGroup);

  }

  onMonthDayRemoved(value) {
    // console.log('onMonthDayRemoved');
    // console.dir(value);
    // console.log('forms');
    // console.dir(this.selectedNumbers);
    // console.dir(this.formGroup);

  }

  onMonthDayClear() {
    // console.log('onMonthDayClear');
    // console.dir(this.selectedNumbers);
    // console.dir(this.formGroup);
  }
}
