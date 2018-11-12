import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SushirollsComponent } from './sushirolls.component';

describe('SushirollsComponent', () => {
  let component: SushirollsComponent;
  let fixture: ComponentFixture<SushirollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SushirollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SushirollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
