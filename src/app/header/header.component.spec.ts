import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('add-receiver', ()=> {
  //   component.changeHeader=false;
  //   fixture.detectChanges();
 
  //   const addReceiverLink: HTMLAnchorElement= fixture.nativeElement.querySelector('a[routerLink="add-receiver"]');
  //   expect(addReceiverLink).toBeTruthy();
  // });
//   it("logout function",()=>{
//     expect(component.logfun()).toBe(void)
//   })
});
