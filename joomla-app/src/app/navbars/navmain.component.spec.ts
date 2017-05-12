import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavmainComponent } from './navmain.component';

describe('NavmainComponent', () => {
  let component: NavmainComponent;
  let fixture: ComponentFixture<NavmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
