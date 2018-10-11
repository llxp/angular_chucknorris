import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchMoreComponent } from './fetch-more.component';

describe('FetchMoreComponent', () => {
  let component: FetchMoreComponent;
  let fixture: ComponentFixture<FetchMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
