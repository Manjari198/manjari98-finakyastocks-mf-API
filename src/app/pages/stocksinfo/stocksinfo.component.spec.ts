import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksinfoComponent } from './stocksinfo.component';

describe('StocksinfoComponent', () => {
  let component: StocksinfoComponent;
  let fixture: ComponentFixture<StocksinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
