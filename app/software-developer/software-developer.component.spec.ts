import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDeveloperComponent } from './software-developer.component';

describe('SoftwareDeveloperComponent', () => {
  let component: SoftwareDeveloperComponent;
  let fixture: ComponentFixture<SoftwareDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
