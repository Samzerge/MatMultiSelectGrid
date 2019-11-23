# MatMulitSelectGridProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.

## Installation and usage
1. Run the following command:
´npm install mat-multi-select-grid´
or
´yarn add mat-multi-select-grid´

2. Add MatMultiSelectGridModule to AppModule
´
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatMultiSelectGridModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
´
3. Add the tag mat-multi-select-grid on the desired html file
´
    <mat-multi-select-grid
        [listItems] = "numberList$ | async">
    </mat-multi-select-grid> 
´
## API
| Input  | Type | Default |  Description |
| -------- | -------- | -------- |  ------------- |
| [rowHeight] | string | `'1:1'` |   String passed on to Angular Material Grid List input of the same name. For more information please check the following link: https://material.angular.io/components/grid-list/api |
| [columnsNumber] | number | `undefined` |   Number passed on to Angular Material Grid List input of the same name. For more information please check the following link: https://material.angular.io/components/grid-list/api |
| [gutterSize] | string | `'1px'` |   String passed on to Angular Material Grid List input of the same name. For more information please check the following link: https://material.angular.io/components/grid-list/api |
| [bindLabel] | string | `undefined` |  Specifies the property of the objects in the list to show in the grid list. It supports nested properties. Example: 'objProperty.nestedProperty1.nestedProperty2'  |
| [showClearButton] | boolean | `false` | Sets whether to show the clear all button or not. |
| [listItems] | any[] | `[]` | List of items to show on the grid list. |
| [pipeToApply] | PipeTransform | `undefined` | pipe to apply to the bindLabel or item on the list  |

| Output  | Description |
| -------- | -------- |
| (select) | Fired when an item is selected on the grid list. |
| (remove) | Fired when an item is removed from the grid list. |
| (clearAll) | Fired when the clear all button is pressed. |

## Examples
### Template forms
´
<mat-multi-select-grid
    [(ngModel)] = "selectedNumbers"
    [rowHeight] ="'100px'"
    [columnsNumber] = "10"
    [gutterSize] ="'1px'"
    [listItems] = "numberList$ | async"
    [showClearButton]="true"
    (addEvent)="onMonthDayAdded($event)"
    (removeEvent)="onMonthDayRemoved($event)"
    (clearEvent)="onMonthDayClear()">
</mat-multi-select-grid> 
´
### Reactive forms usage
´
<form [formGroup]="formGroup">
    <mat-multi-select-grid
        formControlName="selectedHero"
        [rowHeight] ="'4:3'"
        [columnsNumber] = "2"
        [listItems] = "heroesList$ | async"
        [showClearButton]="true"
        (addEvent)="onMonthDayAdded($event)"
        (removeEvent)="onMonthDayRemoved($event)"
        (clearEvent)="onMonthDayClear()">
    </mat-multi-select-grid>   
</form>
´
### Binding properties
´
<mat-multi-select-grid
    [rowHeight] ="'100px'"
    [columnsNumber] = "10"
    [gutterSize] ="'1px'"
    [listItems] = "developmentList$ | async"
    [bindLabel]="'id'"
    [showClearButton]="true"
    (addEvent)="onMonthDayAdded($event)"
    (removeEvent)="onMonthDayRemoved($event)"
    (clearEvent)="onMonthDayClear()">
</mat-multi-select-grid> 
´
´
<mat-multi-select-grid
    [rowHeight] ="'4:4'"
    [columnsNumber] = "4"
    [gutterSize] ="'1px'"
    [listItems] = "developmentList$ | async"
    [bindLabel]="'developer.bestProject.name'"
    [showClearButton]="true"
    (addEvent)="onMonthDayAdded($event)"
    (removeEvent)="onMonthDayRemoved($event)"
    (clearEvent)="onMonthDayClear()">
</mat-multi-select-grid> 
´
### Pipe usage
´
<mat-multi-select-grid
    [rowHeight] ="'1:2'"
    [columnsNumber] = "5"
    [gutterSize] ="'10px'"
    [listItems] = "weeksList$ | async"
    [showClearButton]="true"
    [pipeToApply]="usedPipe">
</mat-multi-select-grid> 
´

### License

The MIT License (see the [LICENSE](https://github.com/optimistex/ngx-select-ex/blob/master/LICENSE) file for the full text)
