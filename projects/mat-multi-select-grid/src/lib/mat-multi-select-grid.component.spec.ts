import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatMultiSelectGridComponent } from './mat-multi-select-grid/mat-multi-select-grid.component';

describe('MatMultiSelectGridComponent', () => {
  let component: MatMultiSelectGridComponent;
  let fixture: ComponentFixture<MatMultiSelectGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatMultiSelectGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatMultiSelectGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
