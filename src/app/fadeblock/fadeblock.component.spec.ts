import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeblockComponent } from './fadeblock.component';

describe('FadeblockComponent', () => {
  let component: FadeblockComponent;
  let fixture: ComponentFixture<FadeblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadeblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
