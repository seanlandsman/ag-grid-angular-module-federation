import { TestBed } from '@angular/core/testing';
import { GridComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GridComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(GridComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'grid-two'`, () => {
    const fixture = TestBed.createComponent(GridComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('grid-two');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(GridComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('grid-two app is running!');
  });
});
