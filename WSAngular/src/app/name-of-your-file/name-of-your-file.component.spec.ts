import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameOfYourFileComponent } from './name-of-your-file.component';

describe('NameOfYourFileComponent', () => {
  let component: NameOfYourFileComponent;
  let fixture: ComponentFixture<NameOfYourFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameOfYourFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameOfYourFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
