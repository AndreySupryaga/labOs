import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleWithButtonWrapperComponent } from './title-with-button-wrapper.component';

describe('TitleWithButtonWrapperComponent', () => {
  let component: TitleWithButtonWrapperComponent;
  let fixture: ComponentFixture<TitleWithButtonWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleWithButtonWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleWithButtonWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
