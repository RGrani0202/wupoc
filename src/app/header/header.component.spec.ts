import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [AuthService],
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
 
  it('should initialize with default values', () => {
    expect(component.myReceiver).toBeFalse();
    expect(component.addReceiver).toBeFalse();
    expect(component.logOut).toBeTrue();
  });
 
  it('should set myReceiver to true when the route is "/my-receivers"', () => {
    const router = TestBed.inject(Router);
    router.navigate(['/my-receivers']).then(() => {
      expect(component.myReceiver).toBeTrue();
    });
  });
 
  it('should set addReceiver to true when the route is "/add-receiver"', () => {
    const router = TestBed.inject(Router);
    router.navigate(['/add-receiver']).then(() => {
      expect(component.addReceiver).toBeTrue();
    });
  });
 
  it('should set logout to false when the route is "/"', () => {
    const router = TestBed.inject(Router);
    router.navigate(['/']).then(() => {
      expect(component.logOut).toBeFalse();
    });
  });
 
  it('should call auth.logout() when logfun() is called', () => {
    const authSpy = spyOn(TestBed.inject(AuthService), 'logOut');
    component.logfun();
    expect(authSpy).toHaveBeenCalled();
  });
  // it('add-receiver', ()=> {
  //   component.changeHeader=false;
  //   fixture.detectChanges();
 
  //   const addReceiverLink: HTMLAnchorElement= fixture.nativeElement.querySelector('a[routerLink="add-receiver"]');
  //   expect(addReceiverLink).toBeTruthy();
  // });
  // it("logout function",()=>{
  //   expect(component.logfun()).toBe(void)
  // })
});
