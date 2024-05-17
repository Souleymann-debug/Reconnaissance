import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CniaiComponent } from './cniai.component';

describe('CniaiComponent', () => {
  let component: CniaiComponent;
  let fixture: ComponentFixture<CniaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CniaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CniaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
