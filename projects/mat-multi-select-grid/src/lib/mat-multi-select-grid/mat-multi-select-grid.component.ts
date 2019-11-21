import { Component, OnInit, Input, forwardRef, PipeTransform, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { GridItem } from '../grid-item';
import { findNestedPropertyValue } from '../util';

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

  @Input() rowHeight  = '1:1';
  @Input() columnsNumber: number;
  @Input() gutterSize = '1px';

  @Input() bindLabel;
  @Input() showClearButton: boolean;

  @Input() listItems: any[] = [];

  @Input() pipeToApply: PipeTransform;

  gridItems = [];
  value: any[] = [];
  selectedItemsCount = 0;

  @Output() addEvent: EventEmitter<any> = new EventEmitter();
  @Output() removeEvent: EventEmitter<any> = new EventEmitter();
  @Output() clearEvent: EventEmitter<any> = new EventEmitter();

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() {}

  ngOnInit() {

      this.gridItems = this.mapToGridItemList(this.listItems, this.bindLabel);

  }

  mapToGridItemList(listItems: any[], bindLabel: string): GridItem[] {
      return listItems.map(item => {

        let labelText = item;

        if (bindLabel != null) {
            const propertiesArray = bindLabel.split('.');
            const propertyValue = findNestedPropertyValue(item, propertiesArray, 0);
            labelText = propertyValue;
        }

        if (this.pipeToApply != null) {
            labelText = this.pipeToApply.transform(labelText);
        }

        const gridItem = { originalValue: item, label: labelText, selected: false };
        return gridItem;
      });
  }


  toggleStatus(gridItem: GridItem) {
      gridItem.selected = !gridItem.selected;
      this.changeInValue();

      if (gridItem.selected) {
          this.addEvent.emit(gridItem);
      } else {
          this.removeEvent.emit(gridItem);
      }
  }

  clear() {
      this.gridItems.forEach(item => {
          item.selected = false;
      });
      this.selectedItemsCount = 0;
      this.changeInValue();

      this.clearEvent.emit();

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

  writeValue(value: any[]) {
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
    }
}

  changeInValue() {
      const selectedItems = this.getSelectedGridItems();
      this.selectedItemsCount = selectedItems.length;

      this.value = this.getOriginalItemsFromGridItems(selectedItems);
      this.onChange(this.value);
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

