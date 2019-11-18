import { Component, OnInit, Input, forwardRef, PipeTransform, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { GridItem } from '../grid-item';

@Component({
  selector: 'lib-mat-multi-select-grid',
  templateUrl: './mat-multi-select-grid.component.html',
  styleUrls: ['./mat-multi-select-grid.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
      {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => MatMultiSelectGridComponent),
          multi: true
      }
  ]
})

export class MatMultiSelectGridComponent implements OnInit, ControlValueAccessor {
  TAG = MatMultiSelectGridComponent.name + ': ';

  disabled = false;

  // @Input() listItems$: Observable<any[]>;
  @Input() bindLabel;
  @Input() showClearButton: boolean;

  @Input() listItems: any[] = [];

  @Input() pipeToApply: PipeTransform;

  gridItems = [];
  selectedItemsCount = 0;

  @Output() addEvent: EventEmitter<any> = new EventEmitter();
  @Output() removeEvent: EventEmitter<any> = new EventEmitter();
  @Output() clearEvent: EventEmitter<any> = new EventEmitter();

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() {}

  ngOnInit() {
      // console.log(this.TAG + 'ngOnInit');

      this.gridItems = this.mapToGridItemList(this.listItems, this.bindLabel);

      // console.dir(this.listItems);
      // console.dir(this.gridItems);
  }

  mapToGridItemList(listItems: any[], bindLabel: string): GridItem[] {
      return listItems.map(item => {
          let labelText = bindLabel == null ? item : item[bindLabel];
          console.log(this.TAG + 'labelText');
          console.dir(bindLabel);
          console.dir(labelText);


          if (this.pipeToApply != null) {
            labelText = this.pipeToApply.transform(labelText);
          }

          const gridItem = { originalValue: item, label: labelText, selected: false };
          return gridItem;
      });
  }

  writeValue(value: any[]) {
      console.log(this.TAG + 'writeValue');
      console.dir(value);
      if (value != null) {
          // const selectedGridItems = this.mapToGridItemList(value, this.bindLabel);

          value.forEach(item => {
              const foundItems = this.gridItems.filter(originalItem => {
                  return originalItem.originalValue === item;
              });

              if (foundItems.length > 0) {
                  foundItems[0].selected = true;
              }
          });

          console.log('written value for exisiting list');
          console.dir(this.gridItems);
      }
  }

  toggleStatus(gridItem: GridItem) {
      console.log(this.TAG + 'toggleStatus');
      gridItem.selected = !gridItem.selected;
      this.change(gridItem);

      if (gridItem.selected) {
          this.addEvent.emit(gridItem);
      } else {
          this.removeEvent.emit(gridItem);
      }
  }

  clear() {
    console.log(this.TAG + 'clear');
      this.gridItems.forEach(item => {
          item.selected = false;
      });

      this.clearEvent.emit();
      this.selectedItemsCount = 0;
  }

  getSelectedGridItems(): GridItem[] {
      return this.gridItems.filter(item => {
          return item.selected;
      });
  }

  getOriginalItemsFromGridItems(gridItems: GridItem[]): any[] {
      return gridItems.map(item => {
          return item.originalValue;
      });
  }

  change(value: any) {
      console.log(this.TAG + 'change');
      const selectedItems = this.getSelectedGridItems();
      this.selectedItemsCount = selectedItems.length;

      this.onChange(this.getOriginalItemsFromGridItems(selectedItems));
  }

  registerOnChange(fn: any) {
      this.onChange = fn;
  }

  registerOnTouched(fn: any) {
      this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
      this.disabled = isDisabled;
  }
}

