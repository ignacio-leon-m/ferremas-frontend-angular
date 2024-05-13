import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransbankComponent } from './transbank.component';

describe('TransbankComponent', () => {
  let component: TransbankComponent;
  let fixture: ComponentFixture<TransbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransbankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
