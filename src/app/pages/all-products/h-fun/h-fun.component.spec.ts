import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HFunComponent } from './h-fun.component';

describe('HFunComponent', () => {
  let component: HFunComponent;
  let fixture: ComponentFixture<HFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HFunComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
