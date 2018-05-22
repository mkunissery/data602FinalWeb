import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CmpchartComponent } from './cmpchart.component';

describe('CmpchartComponent', () => {
  let component: CmpchartComponent;
  let fixture: ComponentFixture<CmpchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
