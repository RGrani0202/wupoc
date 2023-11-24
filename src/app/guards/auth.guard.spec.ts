import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
 
describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;
 
  beforeEach(() => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['checkLogin']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
 
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });
 
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });
 
  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
 
  it('should return true and navigate to "/" if  logged in', () => {
    authService.checkLogin.and.returnValue(false);
 
    const result = guard.canActivate(undefined!, undefined!);
 
    expect(result).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });
 
  it('should return true if logged in', () => {
    authService.checkLogin.and.returnValue(true);
 
    const result = guard.canActivate(undefined!, undefined!);
 
    expect(result).toBeTrue();
  });

});