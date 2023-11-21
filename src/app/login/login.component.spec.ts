import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,FormsModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with email and password fields', () => {
    const compiled = fixture.debugElement.nativeElement;
    const form = compiled.querySelector('form');
    expect(form).toBeTruthy();
 
    const emailInput = compiled.querySelector('input[name="email"]');
    expect(emailInput).toBeTruthy();
 
    const passwordInput = compiled.querySelector('input[name="password"]');
    expect(passwordInput).toBeTruthy();
  });

 
 
});
